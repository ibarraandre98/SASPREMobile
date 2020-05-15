import { Component, OnInit, Input } from "@angular/core";
import { ModalController,NavParams } from "@ionic/angular";
import {FormBuilder, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Alerts } from './../../models/alerts';
@Component({
  selector: "app-calendario-actividades-editar",
  templateUrl: "./calendario-actividades-editar.page.html",
  styleUrls: ["./calendario-actividades-editar.page.scss"],
})
export class CalendarioActividadesEditarPage implements OnInit {
  alertas:Alerts;
  actividad:any;
  registerForm:any;
  fechainicio:Date;
  constructor(private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private navParams:NavParams) {
      this.actividad = this.navParams.get('actividad');
    this.registerForm = this.formBuilder.group({
      actividadNombre:[this.actividad.nombre,[Validators.required,Validators.maxLength(50)]],
      actividadDescripcion:[this.actividad.descripcion ,[Validators.required,Validators.maxLength(100)]]
      });
    this.fechainicio=this.actividad.fecha_inicio;
    console.log("lol1 "+this.actividad.nombre);
    console.log("lol "+this.actividad.fecha_fin);
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
  onSubmitAlarmas(){

  }
  @Input() nombre;
  @Input() descripcion;
  @Input() fecha_inicio;
  @Input() fecha_fin;
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
