import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AlarmasService } from "../../services/alarmas.service";

@Component({
  selector: "app-alarmas-agregar",
  templateUrl: "./alarmas-agregar.page.html",
  styleUrls: ["./alarmas-agregar.page.scss"],
})
export class AlarmasAgregarPage implements OnInit {
  constructor(private modalCtrl: ModalController,
    public alarmasService: AlarmasService,
  ) { }

  datos = {
    idSemillas: '',
    nombreAlarma: '',
    tempMaxAlarma: '',
    tempMinAlarma: '',
    lapsoDias: '',
    descripcion: '',
  };


  ngOnInit() { }

  onSubmitAlarmas() {
    this.alarmasService.insertAlarma(this.datos).then(Response => {
      let data = JSON.parse(Response.data);
      let datosAlarmas = data.result;
      if (datosAlarmas == 'success') {
        console.log("Se ha insertado con exito");
      } else {
        console.log("No se ha insertado con exito");
      }
    });
    this.salirSinArgumentos();
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {

    console.log("Form submit");
    console.log(this.datos);

    this.modalCtrl.dismiss({
      semilla: this.datos.idSemillas,
      nombre: this.datos.nombreAlarma,
      descripcion: this.datos.descripcion,
      lapso: this.datos.lapsoDias,
      temperatura_min: this.datos.tempMinAlarma,
      temperatura_max: this.datos.tempMinAlarma,
    });
  }
}
