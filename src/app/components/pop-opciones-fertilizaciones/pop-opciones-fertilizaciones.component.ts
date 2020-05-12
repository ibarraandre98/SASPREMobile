import { MostrarFertilizacionesService } from './../../services/mostrar-fertilizaciones.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-pop-opciones-fertilizaciones',
  templateUrl: './pop-opciones-fertilizaciones.component.html',
  styleUrls: ['./pop-opciones-fertilizaciones.component.scss'],
})
export class PopOpcionesFertilizacionesComponent implements OnInit {

  fertilizacion:any;

  constructor(
    private popoverCtrl:PopoverController,
    private navParams:NavParams,
    private fertilizacionesService:MostrarFertilizacionesService,
    ) 
    { 
      this.fertilizacion = this.navParams.get('fertilizacion');
    }

  ngOnInit() {}


  clickEditar() {
    console.log("Se oprimio editar");
    this.popoverCtrl.dismiss({
      item: "Editar",
    });
  }

  clickBorrar() {
    this.fertilizacionesService.borrarFertilizaciones(this.fertilizacion)
    .then(response =>{
      console.log(response);
    });
    this.popoverCtrl.dismiss({
      item: "Borrar",
    });
  }
}
