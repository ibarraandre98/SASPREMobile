import { Alerts } from './../../models/alerts';
import { SemillasService } from './../../services/semillas.service';
import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CostosService } from '../../services/costos.service';

@Component({
  selector: "app-costos-agregar",
  templateUrl: "./costos-agregar.page.html",
  styleUrls: ["./costos-agregar.page.scss"],
})
export class CostosAgregarPage implements OnInit {

  arraySemillas;

  constructor(private modalCtrl: ModalController,
    public costosService: CostosService,
    private semillasService:SemillasService,
    private alerts:Alerts,
  ) {
    this.semillasService.mostrarIdSemillas()
      .then(response =>{
        let data = JSON.parse(response.data);
        if (data.resultado == 'failed') {
          console.log('Costos no mostrados');

        } else if (data.resultado == 'success') {
          let datosSemillas = data.data;
          this.arraySemillas = datosSemillas;
          console.log(this.arraySemillas);
        }
        
      });
   }

  datos = {
    idSemillas: '',
    precio: '',
    descripcion: ''
  }


  ngOnInit() { }

  onSubmitCostos() {
    if(this.datos.idSemillas == '' || this.datos.precio == '' || this.datos.descripcion == ''){
        this.alerts.showAlert('Error','Faltan campos por rellenar');
        return;
      }
    this.costosService.insertCostos(this.datos).then(Response => {
      let data = JSON.parse(Response.data);
      let datosCostos = data.result;
      if (datosCostos == 'success') {
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
      precio: this.datos.precio,
      descripcion: this.datos.descripcion,
    });
  }
}
