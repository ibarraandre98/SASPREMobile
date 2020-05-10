import { Component, OnInit } from '@angular/core';
import {NavParams} from '@ionic/angular';

@Component({
  selector: 'app-pop-info-cosechas',
  templateUrl: './pop-info-cosechas.component.html',
  styleUrls: ['./pop-info-cosechas.component.scss'],
})
export class PopInfoCosechasComponent implements OnInit {

  cosecha:any;

  constructor(
    private navParams:NavParams,
  ) { }
    
  ngOnInit() {
    this.cosecha = this.navParams.get('cosecha');
  }

}
