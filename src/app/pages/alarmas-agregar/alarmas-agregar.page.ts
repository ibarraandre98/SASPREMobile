import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AlarmasService } from "../../services/alarmas.service";

import {SemillasService} from '../../services/semillas.service';

@Component({
  selector: "app-alarmas-agregar",
  templateUrl: "./alarmas-agregar.page.html",
  styleUrls: ["./alarmas-agregar.page.scss"],
})
export class AlarmasAgregarPage implements OnInit {

  
  data:any[]=[];
  arrayAlarmas:any;
  constructor(private modalCtrl: ModalController,
    
    private semillasservices:SemillasService,
    public alarmasService: AlarmasService,
  ) { 
    this.mostrarSemillas();

  }

  datos = {
    idSemillas: '',
    nombreAlarma: '',
    tempMaxAlarma: '',
    tempMinAlarma: '',
    lapsoDias: '',
    descripcion: '',
  };


  ngOnInit() { }
  onChange(event){
    //alert("tu seleccionaste id= "+event.target.value);
    this.datos.idSemillas=event.target.value;
    console.log(event.target.value);
  }
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
  mostrarSemillas() {
    console.log("uno");
    this.semillasservices
    .mostrarIdSemillas()
      .then((response) => {
        console.log(response);
        let data = JSON.parse(response.data);
        if (data.resultado == "failed") {
          console.log("Alarmas no mostradas");
          //this.showAlert("Error", "Alarmas no mostradas");
        } else if (data.resultado == "success") {
          let datosAlarmas = data.data;
        //  this.arrayAlarmas = datosAlarmas;
          this.data =datosAlarmas;
        }
      })
      .catch((error) => {
       // this.showAlert("Error", JSON.stringify(error));
      });
      console.log(this.arrayAlarmas);
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
