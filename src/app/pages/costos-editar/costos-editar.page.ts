import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-costos-editar",
  templateUrl: "./costos-editar.page.html",
  styleUrls: ["./costos-editar.page.scss"],
})
export class CostosEditarPage implements OnInit {
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
