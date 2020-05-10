import { NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-info-costos',
  templateUrl: './pop-info-costos.component.html',
  styleUrls: ['./pop-info-costos.component.scss'],
})
export class PopInfoCostosComponent implements OnInit {

  costo:any;

  constructor(
    private navParams:NavParams,
  ) {
    this.costo = navParams.get('costo');
   }

  ngOnInit() {}

}
