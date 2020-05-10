import { NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-info-fertilizaciones',
  templateUrl: './pop-info-fertilizaciones.component.html',
  styleUrls: ['./pop-info-fertilizaciones.component.scss'],
})
export class PopInfoFertilizacionesComponent implements OnInit {

  fertilizacion:any;

  constructor(
    private navParams:NavParams,
  ) { 
    this.fertilizacion = this.navParams.get('fertilizacion');
  }

  ngOnInit() {}

}
