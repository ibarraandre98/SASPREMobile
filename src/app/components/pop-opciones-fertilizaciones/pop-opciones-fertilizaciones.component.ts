import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-opciones-fertilizaciones',
  templateUrl: './pop-opciones-fertilizaciones.component.html',
  styleUrls: ['./pop-opciones-fertilizaciones.component.scss'],
})
export class PopOpcionesFertilizacionesComponent implements OnInit {

  constructor(private popoverCtrl:PopoverController) { }

  ngOnInit() {}


  clickEditar() {
    console.log("Se oprimio editar");
    this.popoverCtrl.dismiss({
      item: "Editar",
    });
  }

  clickBorrar() {
    console.log("Se oprimio borrar");
    this.popoverCtrl.dismiss({
      item: "Borrar",
    });
  }
}
