import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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

  constructor(private modalCtrl: ModalController,
    private servicesShared:MostrarFertilizantesService,
    public toastController:ToastController,
    private alertController:AlertController) { 
      this.alertas = new Alerts(toastController,alertController);
    }

  
    alertas:Alerts;

  
  fertilizante = {
    nombreFertilizante: ['',[Validators.required,Validators.maxLength(100)]],
    dosis: ['',[Validators.required,Validators.maxLength(100)]],
    descripcionAplicacion:['',[Validators.required,Validators.maxLength(100)]]
  };

  onSubmitFertilizantes(){
    this.servicesShared.editarFertilizantes(this.fertilizante).then( Response => {
      let data = JSON.parse(Response.data);
      let datosFertilizantes = data.result;
      if( datosFertilizantes == 'success'){
        console.log("Se ha editado con exito");
        this.alertas.toast('Exito', 'Fertilizante actualizado con exito');

      }else{
        console.log("No se ha editado con exito");
      }
    });
    this.salirSinArgumentos();
  }



  ngOnInit() {
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
