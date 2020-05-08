import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-calendario-actividades-agregar",
  templateUrl: "./calendario-actividades-agregar.page.html",
  styleUrls: ["./calendario-actividades-agregar.page.scss"],
})
export class CalendarioActividadesAgregarPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  @Input() nombre;
  @Input() descripcion;
  @Input() fecha_inicio;
  @Input() fecha_fin;

  ngOnInit() {}

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombre: "nombre desde hijo",
      descripcion: "descripcion desde hijo",
      fecha_inicio: "fecha inicio desde hijo",
      fecha_fin: "fecha fin desde hijo",
    });
  }
}
