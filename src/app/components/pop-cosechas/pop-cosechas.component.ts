import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-cosechas',
  templateUrl: './pop-cosechas.component.html',
  styleUrls: ['./pop-cosechas.component.scss'],
})
export class PopCosechasComponent implements OnInit {

  constructor(public popoverCtrl:PopoverController) { }

  ngOnInit() {}

  clickEliminar(){
    console.log('Se oprimio borrar');
    this.popoverCtrl.dismiss({
      item: 'Borrar'
    });
  }
}
