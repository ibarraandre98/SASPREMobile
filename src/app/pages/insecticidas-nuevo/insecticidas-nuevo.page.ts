import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormBuilder, Validators} from '@angular/forms';
import { InsecticidasService } from '../../services/insecticidas.service';
import { AlertController } from '@ionic/angular';
import { Alerts } from './../../models/alerts';

import { ToastController } from '@ionic/angular';
@Component({
  selector: "app-insecticidas-nuevo",
  templateUrl: "./insecticidas-nuevo.page.html",
  styleUrls: ["./insecticidas-nuevo.page.scss"],
})
export class InsecticidasNuevoPage implements OnInit {
  

  constructor(private modalCtrl:ModalController,
    public insecticidasService: InsecticidasService,
    private formBuilder: FormBuilder,
    private alerts:Alerts,
    ) 
    {
      
    }
    
    insecticidas = {
      nombreInsecticida:'',
      precio:'',
      descripcion:'',
    }
      
  ngOnInit() {

  }



  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }
  onSubmitInsecticida(){

    if(this.insecticidas.nombreInsecticida == '' || this.insecticidas.precio == '' || this.insecticidas.descripcion == ''){
      this.alerts.showAlert('Error','Faltan campos por completar');
      return;
    }

    this.insertInsecticidas();
  }
  salirConArgumentos(){
    this.modalCtrl.dismiss({
      nombre: "nombre desde hijo",
      precio: "precio desde hijo",
      descripcion: "descripcion desde hijo",
    });
  }
  insertInsecticidas() {
    this.insecticidasService.insertInsecticidas(this.insecticidas)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.insecticidas.nombreInsecticida = '';
          this.insecticidas.precio = '';
          this.insecticidas.descripcion = '';
          this.alerts.toast('Exito', 'Insecticida registrada con exito');
        } else {
          console.log(data.message);
          this.alerts.showAlert('Error', 'Ha ocurrido un error');
        }
      }
      )
      .catch(error => {
        this.alerts.showAlert('Error', 'Ha ocurrido un error ' + error);
      });

      this.salirSinArgumentos();

  }
}
