import { MostrarFertilizacionesService } from './../../services/mostrar-fertilizaciones.service';
import { CultivosService } from './../../services/cultivos.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-pop-cultivos',
  templateUrl: './pop-cultivos.component.html',
  styleUrls: ['./pop-cultivos.component.scss'],
})
export class PopCultivosComponent implements OnInit {


  cultivo: any;

  constructor(
    private popoverCtrl: PopoverController,
    private cultivosService:CultivosService,
    private navParams:NavParams,
    private mostrarFertilizacionesService:MostrarFertilizacionesService,
    ) { 
      this.cultivo = this.navParams.get('cultivo');
    }

  ngOnInit() { }

  clickEditar() {
    console.log('Se oprimio editar');
    this.popoverCtrl.dismiss({
      item: 'Editar'
    });
  }

  clickBorrar() {

    this.cultivosService.deleteCultivos(this.cultivo)
    .then(response => {
      console.log(response);
    });

    console.log('Se oprimio borrar');
    this.popoverCtrl.dismiss({
      item: 'Borrar'
    });
  }

  clickFertilizacion(){
   
  }
}
