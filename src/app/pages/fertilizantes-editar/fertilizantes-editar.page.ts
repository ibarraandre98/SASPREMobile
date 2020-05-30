import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';
import { MostrarFertilizantesService } from '../../services/mostrar-fertilizantes.service';

import {FormBuilder, Validators} from '@angular/forms'

import { AlertController } from '@ionic/angular';
import { Alerts } from './../../models/alerts';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-fertilizantes-editar',
  templateUrl: './fertilizantes-editar.page.html',
  styleUrls: ['./fertilizantes-editar.page.scss'],
})
export class FertilizantesEditarPage implements OnInit {

  fertilizante:any;
  registerForm:any;

  constructor(private modalCtrl: ModalController,
    private servicesShared:MostrarFertilizantesService,
    private navParams:NavParams,
    public toastController:ToastController,
    private formBuilder: FormBuilder,
    private alertController:AlertController,
    private alerts:Alerts,
    )
    {
      this.fertilizante=this.navParams.get('fertilizante');
      this.guardarDatos();
}

 
get nombreFertilizante(){
  return this.registerForm.get('nombreFertilizante');
}

get dosis(){
  return this.registerForm.get('dosis');
}

get descripcionAplicacion(){
  return this.registerForm.get('descripcionAplicacion');
}



public errorMessages = {
  nombreFertilizante:[
    {type:'required', message:'Nombre es requerido'},
    {type: 'maxlength', message:'Se exedio el numero de caracteres'}
  ],
  dosis:[
    {type:'required', message:'Descripcion requerida es requerido'},
    {type: 'maxlength', message:'Se exedio el numero de caracteres'}],

    descripcionAplicacion:[{type:'required', message:'Valor requerido'},
  {type: 'pattern', message:'Valor no valido'}],
};


 datosFertilizante = {
  idFertilizantes:'',
  nombreFertilizante: '',
  dosis: '',
  descripcionAplicacion:''
};


  guardarDatos(){
    this.datosFertilizante.idFertilizantes=this.fertilizante.idFertilizantes;
    this.datosFertilizante.nombreFertilizante=this.fertilizante.nombreFertilizante;
    this.datosFertilizante.dosis=this.fertilizante.dosis;
    this.datosFertilizante.descripcionAplicacion=this.fertilizante.descripcionAplicacion;

  }

  
  ngOnInit() {
  }

  onSubmitFertilizantes(){

    if(this.datosFertilizante.nombreFertilizante == '' || this.datosFertilizante.dosis == '' || this.datosFertilizante.descripcionAplicacion == ''){
      this.alerts.showAlert('Error','Faltan campos por completar');
      return;
    }
    this.servicesShared
    .editarFertilizantes(this.datosFertilizante)
    .then((response)=>{
      console.log(response);
      let data =JSON.parse(response.data);

      if(data.result=="success"){
        this.datosFertilizante.idFertilizantes="";
        this.datosFertilizante.nombreFertilizante="";
        this.datosFertilizante.dosis="";
        this.datosFertilizante.descripcionAplicacion="";
        this.alerts.toast("Exito","Fertilizante actualizado con exito");
        this.salirSinArgumentos();  
      }else{
        console.log(data.message);
        this.alerts.showAlert("Error","Ha ocurrido un error");
      }
    })
    .catch((error)=>{
      this.alerts.showAlert("Error","Ha ocurrido un error "+ error);      
    });

  }


   

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {

    console.log("Form submit");
    console.log(this.fertilizante);

    this.modalCtrl.dismiss({
      nombre: this.fertilizante.nombreFertilizante,
      dosis:  this.fertilizante.dosis,
      descripcion: this.fertilizante.descripcionAplicacion
    });
  }

}
