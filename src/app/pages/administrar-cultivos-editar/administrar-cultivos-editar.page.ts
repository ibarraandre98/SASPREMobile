import { SemillasService } from './../../services/semillas.service';
import { Component, OnInit, Input } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import {CultivosService} from '../../services/cultivos.service';
import {FormBuilder, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Alerts } from './../../models/alerts';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-administrar-cultivos-editar',
  templateUrl: './administrar-cultivos-editar.page.html',
  styleUrls: ['./administrar-cultivos-editar.page.scss'],
})
export class AdministrarCultivosEditarPage implements OnInit {

  cultivos:any;
  registerForm:any;
  arraySemillas;

  constructor(private modalCtrl:ModalController,
    private servicesShared:CultivosService,
    private navParams:NavParams,
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    private alertController:AlertController,
    private alerts:Alerts,
    private semillasService:SemillasService,
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
      this.cultivos=this.navParams.get('cultivo');

      console.log(this.cultivos);
      this.registerForm=this.formBuilder.group({
        cantidad:[this.cultivos.cantidad,[Validators.required,Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")]],
        estado:[this.cultivos.estado,[Validators.required,Validators.maxLength(100)]],
      });

      console.log(this.registerForm);
    }

    public errorMessages = {
    
      cantidad:[{type:'required', message:'Valor requerido'},
      {type: 'pattern', message:'Valor no valido'}],

      estado:[
        {type:'required', message:'Descripcion requerida es requerido'},
        {type: 'maxlength', message:'Se exedio el numero de caracteres'}],
    };

    private datos={
      idCultivos:'',
      idSemillas:'',
      idUsuario:'',
      fechaPlantado:'',
      fechaCosechado:'',
      cantidad:'',
      estado:'',
      cosechado:'',
    };

    guardarDatos(){
      this.datos.idCultivos=this.cultivos.idCultivos;
      this.datos.idSemillas=this.cultivos.idSemillas;
      this.datos.idUsuario=this.cultivos.idUsuario;
      this.datos.fechaPlantado=this.cultivos.fechaPlantado;
      this.datos.fechaCosechado=this.cultivos.fechaCosechado;
      this.datos.cantidad=this.cultivos.cantidad;
      this.datos.estado=this.cultivos.estado;
      this.datos.cosechado=this.cultivos.cosechado;
      console.log(this.datos);
    }

    get idSemillas(){
      return this.registerForm.get('idSemillas');
    }

    get fechaPlantado(){
      return this.registerForm.get('fechaPlantado');
    }

    get fechaCosechado(){
      return this.registerForm.get('fechaCosechado');
    }

    get estado(){
      return this.registerForm.get('estado');
    }

    get cantidad(){
      return this.registerForm.get('cantidad');
    }

    get cosechado(){
      return this.registerForm.get('cosechado');
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

  

  onSubmitCultivos(){
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
    .updateCultivos(this.datos)
    .then((response)=>{
      console.log(response);
      let data =JSON.parse(response.data);

      if(data.result=="success"){
      this.datos.idCultivos="";
      this.datos.idSemillas="";
      this.datos.idUsuario="";
      this.datos.fechaPlantado="";
      this.datos.fechaCosechado="";
      this.datos.cantidad="";
      this.datos.estado="";
      this.datos.cosechado="";

      this.alerts.toast("Exito","Cultivo actualizado con exito");
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
