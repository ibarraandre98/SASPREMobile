import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-fertilizaciones-agregar',
  templateUrl: './fertilizaciones-agregar.page.html',
  styleUrls: ['./fertilizaciones-agregar.page.scss'],
})
export class FertilizacionesAgregarPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombre: "ac1",
      descripcion: "dasdbnawbn",
      fecha_inicio: "23 04 2020",
      fecha_fin: "25 05 2020",
    });
  }

}
