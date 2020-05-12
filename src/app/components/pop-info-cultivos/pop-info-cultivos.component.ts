import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-pop-info-cultivos',
  templateUrl: './pop-info-cultivos.component.html',
  styleUrls: ['./pop-info-cultivos.component.scss'],
})
export class PopInfoCultivosComponent implements OnInit {

  cultivo: any;

  constructor(
    private navParams: NavParams,
  ) {
    this.cultivo = navParams.get('cultivo');
  }

  ngOnInit() { }

}
