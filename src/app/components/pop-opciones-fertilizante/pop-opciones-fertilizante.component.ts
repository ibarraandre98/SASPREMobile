import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-opciones-fertilizante',
  templateUrl: './pop-opciones-fertilizante.component.html',
  styleUrls: ['./pop-opciones-fertilizante.component.scss'],
})
export class PopOpcionesFertilizanteComponent implements OnInit {

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
