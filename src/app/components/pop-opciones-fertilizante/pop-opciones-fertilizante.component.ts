import { MostrarFertilizantesService } from './../../services/mostrar-fertilizantes.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-pop-opciones-fertilizante',
  templateUrl: './pop-opciones-fertilizante.component.html',
  styleUrls: ['./pop-opciones-fertilizante.component.scss'],
})
export class PopOpcionesFertilizanteComponent implements OnInit {

  fertilizante:any;

  constructor(
    private popoverCtrl:PopoverController,
    private navParams:NavParams,
    private fertilizantesService: MostrarFertilizantesService,
    ) { 
      this.fertilizante = this.navParams.get('fertilizante');
    }

  ngOnInit() {}

  clickEditar() {
    console.log("Se oprimio editar");
    this.popoverCtrl.dismiss({
      item: "Editar",
    });
  }

  clickBorrar() {
    this.fertilizantesService.borrarFertilizantes(this.fertilizante)
    .then(response =>{
      console.log(response);
    });
    this.popoverCtrl.dismiss({
      item: "Borrar",
    });
  }
}
