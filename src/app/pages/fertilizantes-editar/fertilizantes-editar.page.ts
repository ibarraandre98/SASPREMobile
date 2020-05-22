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

  alertas:Alerts;
  fertilizante:any;
  registerForm:any;

  constructor(private modalCtrl: ModalController,
    private servicesShared:MostrarFertilizantesService,
    private navParams:NavParams,
    public toastController:ToastController,
    private formBuilder: FormBuilder,

    private alertController:AlertController,
    )
    {
      this.alertas=new Alerts(toastController,alertController);
      this.fertilizante=this.navParams.get('fertilizante');

      this.registerForm=this.formBuilder.group({
        nombreFertilizante:[this.fertilizante.nombreFertilizante,[Validators.required,Validators.maxLength(100)]],
        dosis:[this.fertilizante.dosis,[Validators.required,Validators.maxLength(100)]],
        descripcionAplicacion:[this.fertilizante.descripcionAplicacion,[Validators.required,Validators.maxLength(100)]]         
  });
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

private datos={
  idFertilizantes:"",
  nombreFertilizante:"",
  dosis:"",
  descripcionAplicacion:"",
};


  guardarDatos(){
    this.datos.idFertilizantes=this.fertilizante.idFertilizantes;
    this.datos.nombreFertilizante=this.registerForm.value.nombreFertilizante;
    this.datos.dosis=this.registerForm.value.dosis;
    this.datos.descripcionAplicacion=this.registerForm.value.descripcionAplicacion;

  }

  
  ngOnInit() {
  }

  onSubmitFertilizantes(){
    this.guardarDatos();
    this.servicesShared
    .editarFertilizantes(this.datos)
    .then((response)=>{
      console.log(response);
      let data =JSON.parse(response.data);

      if(data.result=="success"){
        this.datos.idFertilizantes="";
        this.datos.nombreFertilizante="";
        this.datos.dosis="";
        this.datos.descripcionAplicacion="";
        this.alertas.toast("Exito","Fertilizante actualizado con exito");
        this.salirSinArgumentos();  
      }else{
        console.log(data.message);
      }
    })
    .catch((error)=>{
      this.alertas.showAlert("Error","Ha ocurrido un error "+ error);      
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
