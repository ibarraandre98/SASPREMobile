import { CultivosService } from './../../services/cultivos.service';
import { Alerts } from 'src/app/models/alerts';
import { SemillasService } from './../../services/semillas.service';
import { MostrarFertilizantesService } from './../../services/mostrar-fertilizantes.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MostrarFertilizacionesService } from '../../services/mostrar-fertilizaciones.service';

@Component({
  selector: 'app-fertilizaciones-agregar',
  templateUrl: './fertilizaciones-agregar.page.html',
  styleUrls: ['./fertilizaciones-agregar.page.scss'],
})
export class FertilizacionesAgregarPage implements OnInit {

  arrayFertilizantes;
  arrayCultivos;

  constructor(
    private modalCtrl: ModalController,
    private serviceShared: MostrarFertilizacionesService,
    private mostrarFertilizantesService:MostrarFertilizantesService,
    private alerts:Alerts,
    private cultivosService:CultivosService,
    ) 
    { 
      this.mostrarFertilizantesService.mostrarFertilizantes()
      .then(response =>{
        let data = JSON.parse(response.data);
        if (data.resultado == 'failed') {
          console.log('Costos no mostrados');

        } else if (data.resultado == 'success') {
          let datosSemillas = data.data;
          this.arrayFertilizantes = datosSemillas;
          console.log(this.arrayFertilizantes);
        }
      });

      this.cultivosService.mostrarCultivos()
      .then(response =>{
        let data = JSON.parse(response.data);
        if (data.resultado == 'failed') {
          console.log('Costos no mostrados');

        } else if (data.resultado == 'success') {
          let datosSemillas = data.data;
          this.arrayCultivos = datosSemillas;
          console.log(this.arrayCultivos);
        }
        
      });
    }

    
  fertilizaciones = {
    idCultivos: '',
    idFertilizantes:'',
    idUsuario:environment.idUsuario,
    fecha:''
  };

  onSubmitFertilizantes(){
    if(this.fertilizaciones.idCultivos == '' || this.fertilizaciones.idFertilizantes == '' || this.fertilizaciones.fecha == ''){
      this.alerts.showAlert('Error','Faltan campos por llenar');
      return;
    }
    if(this.fertilizaciones.idCultivos)
    this.serviceShared.insertarFertilizaciones(this.fertilizaciones).then( response => {
      let data = JSON.parse(response.data);
      let datosFertilizaciones = data.result;
      if( datosFertilizaciones == 'success'){
        console.log("Se ha insertado con exito");
      }else{
        console.log("No se ha insertado con exito");
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
    this.modalCtrl.dismiss({
    });
  }

}
