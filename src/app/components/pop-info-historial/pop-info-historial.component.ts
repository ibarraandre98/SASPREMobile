import { NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-info-historial',
  templateUrl: './pop-info-historial.component.html',
  styleUrls: ['./pop-info-historial.component.scss'],
})
export class PopInfoHistorialComponent implements OnInit {

  plaga:any;

  constructor(
    private navParams:NavParams,
  ) {
    this.plaga = this.navParams.get('plaga');
   }

  ngOnInit() {}

}
