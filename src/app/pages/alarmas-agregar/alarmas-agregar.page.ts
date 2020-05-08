import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-alarmas-agregar",
  templateUrl: "./alarmas-agregar.page.html",
  styleUrls: ["./alarmas-agregar.page.scss"],
})
export class AlarmasAgregarPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  @Input() semilla;
  @Input() nombre;
  @Input() descripcion;
  @Input() lapso;
  @Input() temperatura_min;
  @Input() temperatura_max;

  ngOnInit() {}

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
      semilla: "semilla desde hijo",
      nombre: "nombre desde hijo",
      descripcion: "descripcion desde hijo",
      lapso: "lapso desde hijo",
      temperatura_min: "temperatura minima desde hijo",
      temperatura_max: "temperatura maxima desde hijo",
    });
  }
}
