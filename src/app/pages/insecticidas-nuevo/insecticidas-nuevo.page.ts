import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-insecticidas-nuevo',
  templateUrl: './insecticidas-nuevo.page.html',
  styleUrls: ['./insecticidas-nuevo.page.scss'],
})
export class InsecticidasNuevoPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

      /*Para enviar datos del padre al hijo (modal) */
      @Input() nombre;
      @Input() precio;

  ngOnInit() {
  }

  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }

  salirConArgumentos(){
    this.modalCtrl.dismiss({
      nombre:'nombre desde hijo',
      precio:'precio desde hijo'
    });
  }

}
