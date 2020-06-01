import { AlarmasService } from "../../services/alarmas.service";
import { Router } from "@angular/router";
import { AlertController, ModalController, PopoverController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { Alerts } from "./../../models/alerts";
import { ToastController } from "@ionic/angular";
import { PopAlarmasComponent } from 'src/app/components/pop-alarmas/pop-alarmas.component';
import { PopInfoAlarmasComponent } from 'src/app/components/pop-info-alarmas/pop-info-alarmas.component';
import { AlarmasAgregarPage } from '../alarmas-agregar/alarmas-agregar.page';
import { AlarmasEditarPage } from '../alarmas-editar/alarmas-editar.page';

@Component({
  selector: "app-alarmas",
  templateUrl: "./alarmas.page.html",
  styleUrls: ["./alarmas.page.scss"],
  providers: [AlarmasService],
})
export class AlarmasPage implements OnInit {
  alertas: Alerts;
  arrayAlarmas:any;
  textoBuscar = '';
  constructor(
    public alarmasService: AlarmasService,
    private router: Router,
    private alertController: AlertController,
    public toastController: ToastController,
    private popCtrl: PopoverController,
    private modalCtrl:ModalController,
  ) {
    this.alertas = new Alerts(toastController, alertController);
    this.mostrarAlarmas();
  }

  mostrarAlarmas() {
    console.log("uno");
    this.alarmasService
      .mostrarAlarmas()
      .then((response) => {
        console.log(response);
        let data = JSON.parse(response.data);
        if (data.resultado == "failed") {
          console.log("Alarmas no mostradas");
          this.showAlert("Error", "Alarmas no mostradas");
        } else if (data.resultado == "success") {
          let datosAlarmas = data.data;
          this.arrayAlarmas = datosAlarmas;
        }
      })
      .catch((error) => {
        this.showAlert("Error", JSON.stringify(error));
      });
  }

  private datos = {
    idSemillas: "1",
    nombreAlarma: "alarma1",
    tempMaxAlarma: "12",
    tempMinAlarma: "5",
    lapsoDias: "3",
    descripcion: "Prueba uno",
  };

  private datos2 = {
    idAlarmas: "1",
    idSemillas: "1",
    nombreAlarma: "alarma1",
    tempMaxAlarma: "12",
    tempMinAlarma: "5",
    lapsoDias: "3",
    descripcion: "Se ha actualizado",
  };

  private datos3 = {
    idAlarmas: "1",
  };

  insertAlarma() {
    this.alarmasService
      .insertAlarma(this.datos)
      .then((response) => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == "success") {
          this.datos.idSemillas = "";
          this.datos.nombreAlarma = "";
          this.datos.tempMaxAlarma = "";
          this.datos.tempMinAlarma = "";
          this.datos.lapsoDias = "";
          this.datos.descripcion = "";

          this.alertas.toast("Exito", "Alerta registrada con exito");
          this.router.navigateByUrl("/menu");
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        this.alertas.showAlert("Error", "Ha ocurrido un error " + error);
      });
  }

  updateAlarma() {
    this.alarmasService
      .updateAlarma(this.datos2)
      .then((response) => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == "success") {
          this.datos2.idAlarmas = "";
          this.datos2.idSemillas = "";
          this.datos2.nombreAlarma = "";
          this.datos2.tempMaxAlarma = "";
          this.datos2.tempMinAlarma = "";
          this.datos2.lapsoDias = "";
          this.datos2.descripcion = "";

          this.alertas.toast("Exito", "Alerta actualizada con exito");
          this.router.navigateByUrl("/menu");
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        this.alertas.showAlert("Error", "Ha ocurrido un error " + error);
      });
  }

  deleteAlarma() {
    this.alarmasService
      .deleteAlarma(this.datos3)
      .then((response) => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == "success") {
          this.datos3.idAlarmas = "";

          this.alertas.toast("Exito", "Alerta eliminada con exito");
          this.router.navigateByUrl("/menu");
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        this.alertas.showAlert("Error", "Ha ocurrido un error " + error);
      });
  }

  async mostrarPop( evento, alarma ) {
    const popover = await this.popCtrl.create({
      component: PopAlarmasComponent,
      componentProps:{
        alarma,
      },
      event: evento,
      mode: 'ios',
      backdropDismiss: true,
      translucent: true
    });
    await popover.present();

    const {data} = await popover.onDidDismiss(); //Para recibir los datos cuando se cierre el pop
    // const {data} = await popover.onWillDismiss();  Para que se dispare rápido sin esperar que e cierre el pop

    for (var clave in data){
      // Controlando que json realmente tenga esa propiedad
      if (data.hasOwnProperty(clave)) {
        // Mostrando en pantalla la clave junto a su valor
        console.log("La clave es " + clave+ " y el valor es " + data[clave]);

        if( data[clave] ==  "Editar"){
          this.editarAlarma(alarma);
        }else if( data [clave] == "Borrar"){
          this.borrarAlarma();
        }

      }

    }
    
    this.mostrarAlarmas();

  }

  borrarAlarma(){
    console.log("Se borro alarma");
  }

  async nuevoAlarma(){
      const modal = await this.modalCtrl.create({
        component: AlarmasAgregarPage,
        componentProps:{
          semilla: 'maiz',
          nombre: 'maiz',
          descripcion: 'descripcion',
          lapso: '2 dias',
          temperatura_min: '23°',
          temperatura_max:  '28°'
        }
      });

      await modal.present();

      const {data} = await modal.onDidDismiss();
      this.mostrarAlarmas();
      console.log("Retorno del modal", data);

  }

  async editarAlarma(alarma:any){

    const modal = await this.modalCtrl.create({
      component: AlarmasEditarPage,
      componentProps:{
        alarma,
      }
    });

    await modal.present();


    const {data} = await modal.onDidDismiss();
    this.mostrarAlarmas();
    console.log("Retorno del modal", data);
  }

  async mostrarPopInfo(alarma:any) {
    const popover = await this.popCtrl.create({
      component: PopInfoAlarmasComponent,
      componentProps:{
        alarma,
      },
      mode: "md",
      backdropDismiss: true,
      translucent: true,
    });
    return await popover.present();
  }

  buscar( event ){
    //this.textoBuscar = evento.detail.value;
    console.log('Se esta buscando en el filtro:');
    console.log(event.detail.value);
    this.textoBuscar = event.detail.value;
  }

  ngOnInit() {
  }

  async showAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ["Ok"],
    });

    await alert.present();
  }

  clickFab(){
    this.nuevoAlarma();
  }

  refreshAlarmas(event){
    this.mostrarAlarmas();
    setTimeout(()=>{
      event.target.complete();
    },2000);
  }
}
