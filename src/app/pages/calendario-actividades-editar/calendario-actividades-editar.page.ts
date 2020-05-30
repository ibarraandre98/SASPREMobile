import { Component, OnInit, Input } from "@angular/core";
import { ModalController,NavParams } from "@ionic/angular";
import {FormBuilder, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Alerts } from './../../models/alerts';

import { ToastController } from '@ionic/angular';
import {CalendarioActividadesService} from '../../services/calendario-actividades.service'
@Component({
  selector: "app-calendario-actividades-editar",
  templateUrl: "./calendario-actividades-editar.page.html",
  styleUrls: ["./calendario-actividades-editar.page.scss"],
})
export class CalendarioActividadesEditarPage implements OnInit {
  actividad:any;
  registerForm:any;
  fechainiciado:any;
  //inicioFecha:Date;
 // finFecha:Date;
  constructor(private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private navParams:NavParams,
    private alertController:AlertController,
    public toastController:ToastController,
    private alerts:Alerts,
    private servicesShared:CalendarioActividadesService) {
      this.actividad = this.navParams.get('actividad');
    this.registerForm = this.formBuilder.group({
      actividadNombre:[this.actividad.nombreActividad,[Validators.required,Validators.maxLength(50)]],
      actividadDescripcion:[this.actividad.descripcion ,[Validators.required,Validators.maxLength(100)]]
      });
  
  }
  get actividadNombre(){
    return this.registerForm.get('actividadNombre');
  }

  get actividadDescripcion(){
    return this.registerForm.get('actividadDescripcion');
  }

  public errorMessages = {
    actividadNombre:[
      {type:'required', message:'Nombre es requerido'},
      {type: 'maxlength', message:'Se exedio el numero de caracteres'}
    ],
    actividadDescripcion:[
      {type:'required', message:'Descripcion requerida es requerido'},
      {type: 'maxlength', message:'Se exedio el numero de caracteres'}],
     
  };
  private datos2 = {
    idCalendarioActividades: '',
    idUsuario: '',
    nombreActividad: '',
    descripcion: '',
    fechaInicio: '',
    fechaFin: '',
  };
  guardarDatos(){
   this.datos2.idCalendarioActividades=this.actividad.idCalendarioActividades;
   this.datos2.idUsuario=this.actividad.idUsuario;
   this.datos2.nombreActividad=this.registerForm.value.actividadNombre;
   this.datos2.descripcion=this.registerForm.value.actividadDescripcion;
   this.datos2.fechaInicio=this.actividad.fechaInicio;
   this.datos2.fechaFin=this.actividad.fechaFin;
  }
  updateCalendarioActividades() {

    //document.getElementById("finicio").innerHTML;
    this.guardarDatos();

    if(this.datos2.idCalendarioActividades == '' || this.datos2.idUsuario  == '' || this.datos2.nombreActividad  == ''
    || this.datos2.descripcion  == '' || this.datos2.fechaInicio  == '' || this.datos2.fechaFin  == ''){
      this.alerts.showAlert('Error','Faltan campos por rellenar');
      return;
    }
    this.servicesShared.updateCalendarioActividades(this.datos2)
      .then((response) => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == "success") {
          this.datos2.idCalendarioActividades = "";
          this.datos2.idUsuario = "";
          this.datos2.nombreActividad = "";
          this.datos2.descripcion = "";
          this.datos2.fechaInicio = "";
          this.datos2.fechaFin = "";

          this.alerts.toast("Exito", "Calendario de actividades actualizada con exito");
          this.salirSinArgumentos();
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        this.alerts.showAlert("Error", "Ha ocurrido un error " + error);
      });
  }

  
  ngOnInit() {}

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }


  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombre: "ac1",
      descripcion: "dasdbnawbn",
      fecha_inicio: "23 04 2020",
      fecha_fin: "25 05 2020",
    });
  }
}
