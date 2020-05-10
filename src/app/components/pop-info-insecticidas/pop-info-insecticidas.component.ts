import { NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-info-insecticidas',
  templateUrl: './pop-info-insecticidas.component.html',
  styleUrls: ['./pop-info-insecticidas.component.scss'],
})
export class PopInfoInsecticidasComponent implements OnInit {

  insecticida:any;

  constructor(
    private navParams:NavParams,
  ) { 
    this.insecticida = this.navParams.get('insecticida');
  }

  ngOnInit() {}

}
