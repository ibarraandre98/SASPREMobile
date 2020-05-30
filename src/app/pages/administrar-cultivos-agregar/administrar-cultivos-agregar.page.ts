import { environment } from './../../../environments/environment';
import { SemillasService } from './../../services/semillas.service';
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

  cultivos:any;
  registerForm:any;
  arraySemillas;

  

  constructor(private modalCtrl: ModalController,
    private servicesShared:CultivosService,
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    private semillasService:SemillasService,
    private alerts:Alerts,
    ) { 
      this.semillasService.mostrarIdSemillas()
      .then(response =>{
        let data = JSON.parse(response.data);
        if (data.resultado == 'failed') {
          console.log('Costos no mostrados');

        } else if (data.resultado == 'success') {
          let datosSemillas = data.data;
          this.arraySemillas = datosSemillas;
          console.log(this.arraySemillas);
        }
        
      });
    }
    infoForm = this.formBuilder.group({
      idSemillas:[''],
      idUsuario:environment.idUsuario,
      fechaPlantado:[''],
      fechaCosechado:[''],
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

  public datos = {
    idSemillas: '',
    idUsuario: '', 
    fechaPlantado: '',
    fechaCosechado: '',
    cantidad: '',
    estado: '',
  };

  get cantidad(){
    return this.infoForm.get('cantidad');
  }

  get estado(){
    return this.infoForm.get('estado');
  }

  guardarDatos(){
    this.datos.idSemillas = this.infoForm.value.idSemillas;
    this.datos.idUsuario = environment.idUsuario;
    this.datos.cantidad = this.infoForm.value.cantidad;
    this.datos.estado = this.infoForm.value.estado;
    this.datos.fechaPlantado = this.infoForm.value.fechaPlantado;
    this.datos.fechaCosechado = this.infoForm.value.fechaCosechado;
    console.log(this.datos);
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
    if(this.datos.cantidad == '0'){
      this.alerts.showAlert('Error','La cantidad no puede ser 0');
      return;
    }
    if(this.datos.idSemillas == '' || this.datos.idUsuario == '' || this.datos.cantidad == '' || this.datos.estado == ''
    || this.datos.fechaPlantado == '' || this.datos.fechaCosechado == ''){
      this.alerts.showAlert('Error','Faltan campos por rellenar');
      return;
    }
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

      this.alerts.toast("Exito","Cultivo agregado con exito");
      this.salirSinArgumentos();
      }else{
        console.log(data.message);
      }
    })
    .catch((error)=>{
      this.alerts.showAlert("Error","Ha ocurrido un error "+error);
    });
  }
  }

 

 

