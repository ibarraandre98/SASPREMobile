import { environment } from './../../../environments/environment';
import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CalendarioActividadesService } from "src/app/services/calendario-actividades.service";

@Component({
  selector: "app-calendario-actividades-agregar",
  templateUrl: "./calendario-actividades-agregar.page.html",
  styleUrls: ["./calendario-actividades-agregar.page.scss"],
})
export class CalendarioActividadesAgregarPage implements OnInit {
  constructor(private modalCtrl: ModalController,
    public calendarioActividadesService: CalendarioActividadesService,
  ) { }

  datos = {
    idUsuario: environment.idUsuario,
    nombreActividad: '',
    descripcion: '',
    fechaInicio: '',
    fechaFin: '',
  };

  ngOnInit() { }

  onSubmitCalendarioActividades() {
    this.calendarioActividadesService.insertCalendarioActividades(this.datos).then(Response => {
      let data = JSON.parse(Response.data);
      let datosCalendarioActividades = data.result;
      if (datosCalendarioActividades == 'success') {
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
    this.modalCtrl.dismiss({
      nombre: this.datos.nombreActividad,
      descripcion: this.datos.descripcion,
      fecha_inicio: this.datos.fechaInicio,
      fecha_fin: this.datos.fechaFin,
    });
  }
}
