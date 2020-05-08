import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-calendario-actividades-editar",
  templateUrl: "./calendario-actividades-editar.page.html",
  styleUrls: ["./calendario-actividades-editar.page.scss"],
})
export class CalendarioActividadesEditarPage implements OnInit {
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
      nombre: "ac1",
      descripcion: "dasdbnawbn",
      fecha_inicio: "23 04 2020",
      fecha_fin: "25 05 2020",
    });
  }
}
