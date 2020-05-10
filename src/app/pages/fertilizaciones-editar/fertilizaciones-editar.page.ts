import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-fertilizaciones-editar',
  templateUrl: './fertilizaciones-editar.page.html',
  styleUrls: ['./fertilizaciones-editar.page.scss'],
})
export class FertilizacionesEditarPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

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
