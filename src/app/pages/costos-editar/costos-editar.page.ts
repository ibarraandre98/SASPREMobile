import { Component, OnInit, Input } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import {CostosService} from '../../services/costos.service';
import {FormBuilder, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Alerts } from './../../models/alerts';

import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-costos-editar",
  templateUrl: "./costos-editar.page.html",
  styleUrls: ["./costos-editar.page.scss"],
})
export class CostosEditarPage implements OnInit {

  alertas:Alerts;
  costos:any;
  registerForm:any;
  constructor(private modalCtrl: ModalController,
    private servicesShared:CostosService,
    private navParams:NavParams,
    public toastController:ToastController,
    private formBuilder:FormBuilder,
    private alertController:AlertController,    
    ) {
      this.alertas= new Alerts(toastController,alertController);
      this.costos=this.navParams.get('costo');
      console.log(this.costos);
      this.registerForm=this.formBuilder.group({
        precio:[this.costos.precio,[Validators.required,Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")]],
        descripcion:[this.costos.descripcion,[Validators.required,Validators.maxLength(100)]]
      });

    }

    public errorMessages = {
    
      precio:[{type:'required', message:'Valor requerido'},
      {type: 'pattern', message:'Valor no valido'}],

      descripcion:[
        {type:'required', message:'Descripcion requerida es requerido'},
        {type: 'maxlength', message:'Se exedio el numero de caracteres'}],
    };

    private datos = {
      idCostos: "",
      idSemillas: "",
      precio: "",
      descripcion: "",
    };

    guardarDatos(){
      this.datos.idCostos=this.costos.idCostos;
      this.datos.idSemillas=this.costos.idSemillas;
      this.datos.precio=this.registerForm.value.precio;
      this.datos.descripcion=this.registerForm.value.descripcion;
    }

    onSubmitCostos(){
      this.guardarDatos();
      this.servicesShared
      .updateCostos(this.datos)
      .then((response)=>{
        console.log(response);
        let data = JSON.parse(response.data);

        if(data.result=="success"){
          this.datos.idCostos="";
          this.datos.idSemillas="";
          this.datos.precio="";
          this.datos.descripcion="";

          this.alertas.toast("Exito","Costo actualizado con exito");
          this.salirSinArgumentos();
        }else{
          console.log(data.message);
        }
      })
      .catch((error)=>{
      this.alertas.showAlert("Error","Ha ocurrido un error "+ error);
      });
    }




  ngOnInit() {}

    get precio(){
      return this.registerForm.get('precio');
    }

    get descripcion(){
      return this.registerForm.get('descripcion');
    }
  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
      semilla: "semilla desde hijo",
      descripcion: "descripcion desde hijo",
    });
  }
}
