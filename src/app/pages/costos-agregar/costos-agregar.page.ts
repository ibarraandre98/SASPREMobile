import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-costos-agregar",
  templateUrl: "./costos-agregar.page.html",
  styleUrls: ["./costos-agregar.page.scss"],
})
export class CostosAgregarPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  @Input() semilla;
  @Input() descripcion;

  ngOnInit() {}

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
      semilla: "semilla desde hijo",
      descripcion: "descripcion desde hijo",
    });
  }
}
