import { CultivosService } from './../../services/cultivos.service';
import { Alerts } from 'src/app/models/alerts';
import { MostrarFertilizantesService } from './../../services/mostrar-fertilizantes.service';
import { MostrarFertilizacionesService } from './../../services/mostrar-fertilizaciones.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-fertilizaciones-editar',
  templateUrl: './fertilizaciones-editar.page.html',
  styleUrls: ['./fertilizaciones-editar.page.scss'],
})
export class FertilizacionesEditarPage implements OnInit {

  fertilizacion;
  arrayFertilizantes;
  arrayCultivos;

  constructor(
    private modalCtrl:ModalController,
    private mostrarFertilizacionesService: MostrarFertilizacionesService,
    private mostrarFertilizantesService:MostrarFertilizantesService,
    private alerts:Alerts,
    private cultivosService:CultivosService,
    private navParams:NavParams,
    
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

      this.fertilizacion = this.navParams.get('fertilizacion');
      this.fertilizaciones.idFertilizaciones = this.fertilizacion.idFertilizaciones;
      this.fertilizaciones.idCultivos = this.fertilizacion.idCultivos;
      this.fertilizaciones.idFertilizantes = this.fertilizacion.idFertilizantes;
      this.fertilizaciones.idUsuario = this.fertilizacion.idUsuario;
      this.fertilizaciones.fecha = this.fertilizacion.fecha;
    }

    fertilizaciones = {
      idFertilizaciones:'',
      idCultivos: '',
      idFertilizantes:'',
      idUsuario:'',
      fecha:''
    };

  ngOnInit() {
  }

  onSubmitFertilizaciones(){
    if(this.fertilizaciones.idFertilizaciones == '' || this.fertilizaciones.idCultivos == '' || this.fertilizaciones.idFertilizantes == ''
    || this.fertilizaciones.idUsuario == '' || this.fertilizaciones.fecha == ''){
      this.alerts.showAlert('Error','Faltan campos por llenar');
      return;
    }
    this.mostrarFertilizacionesService.editarFertilizaciones(this.fertilizaciones)
    .then(response => {
      let data = JSON.parse(response.data);
      let datosFertilizaciones = data.result;
      if( datosFertilizaciones == 'success'){
        console.log("Se ha insertado con exito");
        this.alerts.toast('Exito','Fertilizacion editada con exito');
      }else{
        this.alerts.showAlert('Error', 'No se ha podido editar la fertilizacion');
      }
    })
    .catch(error => {
      this.alerts.showAlert('Error', `Ha ocurrido un error ${error}`);
    });
    this.salirSinArgumentos();
  }

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
