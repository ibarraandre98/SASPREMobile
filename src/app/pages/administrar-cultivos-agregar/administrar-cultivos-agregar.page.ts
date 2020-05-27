import { Component, OnInit, Input } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import {CultivosService} from '../../services/cultivos.service';
import {FormBuilder, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Alerts } from './../../models/alerts';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-administrar-cultivos-agregar',
  templateUrl: './administrar-cultivos-agregar.page.html',
  styleUrls: ['./administrar-cultivos-agregar.page.scss'],
})
export class AdministrarCultivosAgregarPage implements OnInit {

  alertas:Alerts;
  cultivos:any;
  registerForm:any;


  

  constructor(private modalCtrl: ModalController,
    private servicesShared:CultivosService,
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    ) { 
      this.alertas= new Alerts(toastController,AlertController);
      
    }
    infoForm = this.formBuilder.group({
      cantidad:['',Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")],
      estado:['',[Validators.required,Validators.maxLength(100)]]
    });

    public errorMessages = {
    
      cantidad:[{type:'required', message:'Valor requerido'},
      {type: 'pattern', message:'Valor no valido'}],

      estado:[
        {type:'required', message:'Descripcion requerida es requerido'},
        {type: 'maxlength', message:'Se exedio el numero de caracteres'}],
    };

  private datos = {
    idSemillas: "",
    idUsuario: "", 
    fechaPlantado: "",
    fechaCosechado: "",
    cantidad: "",
    estado: "",
    cosechado: "",
  };

  get cantidad(){
    return this.infoForm.get('cantidad');
  }

  get estado(){
    return this.infoForm.get('estado');
  }

  guardarDatos(){
    this.datos.idSemillas=this.cultivos.idSemillas;
    this.datos.idUsuario=this.cultivos.idUsuario;
    this.datos.fechaPlantado=this.cultivos.fechaPlantado;
    this.datos.fechaCosechado=this.cultivos.fechaCosechado;
    this.datos.cantidad=this.infoForm.value.cantidad;
    this.datos.estado=this.infoForm.value.estado;
    this.datos.cosechado=this.cultivos.cosechado;
  }


 

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
      estado: "semilla desde hijo",
      cantidad: "descripcion desde hijo",
    });
  }

  ngOnInit() {
  }

  onSubmitCultivos() {
    this.guardarDatos();
    this.servicesShared
    .insertCultivos(this.datos)
    .then((response)=>{
      console.log(response);
      let data =JSON.parse(response.data);

      if(data.result=="success"){
      this.datos.idSemillas="";
      this.datos.idUsuario="";
      this.datos.fechaPlantado="";
      this.datos.fechaCosechado="";
      this.datos.cantidad="";
      this.datos.estado="";
      this.datos.cosechado="";

      this.alertas.toast("Exito","Cultivo actualizado con exito");
      this.salirSinArgumentos();
      }else{
        console.log(data.message);
      }
    })
    .catch((error)=>{
      this.alertas.showAlert("Error","Ha ocurrido un error "+error);
    });
  }
  }

 

 

