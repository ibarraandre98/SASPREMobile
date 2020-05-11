import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MostrarFertilizantesService } from '../../services/mostrar-fertilizantes.service';
@Component({
  selector: 'app-fertilizantes-agregar',
  templateUrl: './fertilizantes-agregar.page.html',
  styleUrls: ['./fertilizantes-agregar.page.scss'],
})
export class FertilizantesAgregarPage implements OnInit {

  constructor(private modalCtrl:ModalController,
    private servicesShared:MostrarFertilizantesService) { }



  fertilizante = {
    nombreFertilizante: '',
    dosis: '',
    descripcionAplicacion:''
  };

  ngOnInit() {
  }

  onSubmitFertilizantes(){
    this.servicesShared.insertarFertilizantes(this.fertilizante).then( Response => {
      let data = JSON.parse(Response.data);
      let datosFertilizantes = data.result;
      if( datosFertilizantes == 'success'){
        console.log("Se ha insertado con exito");
      }else{
        console.log("No se ha insertado con exito");
      }
    });
    this.salirSinArgumentos();
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
