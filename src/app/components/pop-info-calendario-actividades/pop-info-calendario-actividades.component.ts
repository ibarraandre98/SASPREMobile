import { NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pop-info-calendario-actividades',
  templateUrl: './pop-info-calendario-actividades.component.html',
  styleUrls: ['./pop-info-calendario-actividades.component.scss'],
})
export class PopInfoCalendarioActividadesComponent implements OnInit {

  actividad:any;

  constructor(
    private navParams:NavParams,
  ) {
    this.actividad = this.navParams.get('actividad');
   }

  ngOnInit() {}

}
