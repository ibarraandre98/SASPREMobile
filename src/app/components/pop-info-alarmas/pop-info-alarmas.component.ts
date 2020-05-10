import { NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-info-alarmas',
  templateUrl: './pop-info-alarmas.component.html',
  styleUrls: ['./pop-info-alarmas.component.scss'],
})
export class PopInfoAlarmasComponent implements OnInit {

  alarma:any;

  constructor(
    private navParams: NavParams,
  ) { 
    this.alarma = this.navParams.get('alarma');
  }

  ngOnInit() {}

}
