import { NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-info-fertilizante',
  templateUrl: './pop-info-fertilizante.component.html',
  styleUrls: ['./pop-info-fertilizante.component.scss'],
})
export class PopInfoFertilizanteComponent implements OnInit {

  fertilizante:any;

  constructor(
    private navParams:NavParams,
  ) {
    this.fertilizante = this.navParams.get('fertilizante');
   }

  ngOnInit() {}

}
