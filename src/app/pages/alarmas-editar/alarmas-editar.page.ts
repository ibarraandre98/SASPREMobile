import { Component, OnInit,Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-alarmas-editar',
  templateUrl: './alarmas-editar.page.html',
  styleUrls: ['./alarmas-editar.page.scss'],
})
export class AlarmasEditarPage implements OnInit {

  alarma:any;

  constructor(private modalCtrl: ModalController,
    private navParams:NavParams,
    )
    {
      this.alarma = this.navParams.get('alarma');
    }

  ngOnInit() {
  }

  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }

  salirConArgumentos(){
    this.modalCtrl.dismiss({
      semilla: 'semilla desde hijo',
      nombre:'nombre desde hijo',
      descripcion: 'descripcion desde hijo',
      lapso:'lapso desde hijo',
      temperatura_min: 'temperatura minima desde hijo',
      temperatura_max: 'temperatura maxima desde hijo'
    });
  }

}
