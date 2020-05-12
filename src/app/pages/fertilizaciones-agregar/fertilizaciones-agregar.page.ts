import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MostrarFertilizacionesService } from '../../services/mostrar-fertilizaciones.service';


@Component({
  selector: 'app-fertilizaciones-agregar',
  templateUrl: './fertilizaciones-agregar.page.html',
  styleUrls: ['./fertilizaciones-agregar.page.scss'],
})
export class FertilizacionesAgregarPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private serviceShared: MostrarFertilizacionesService) { }

    
  fertilizaciones = {
    idCultivos: '',
    idFertilizantes:'',
    idUsuario:'SUPER',
    fecha: Date
  };

  onSubmitFertilizantes(){
    this.serviceShared.insertarFertilizaciones(this.fertilizaciones).then( Response => {
      let data = JSON.parse(Response.data);
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
