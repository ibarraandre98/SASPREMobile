import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-cultivos',
  templateUrl: './pop-cultivos.component.html',
  styleUrls: ['./pop-cultivos.component.scss'],
})
export class PopCultivosComponent implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() { }

  clickEditar() {
    console.log('Se oprimio editar');
    this.popoverCtrl.dismiss({
      item: 'Editar'
    });
  }

  clickBorrar() {
    console.log('Se oprimio borrar');
    this.popoverCtrl.dismiss({
      item: 'Borrar'
    });
  } f
}
