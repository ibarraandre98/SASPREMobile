import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, PopoverController, ModalController } from "@ionic/angular";
import { CalendarioActividadesService } from "src/app/services/calendario-actividades.service";
import { Alerts } from "./../../models/alerts";
import { ToastController } from "@ionic/angular";
import { PopCalendarioActividadesComponent } from "src/app/components/pop-calendario-actividades/pop-calendario-actividades.component";
import { PopInfoCalendarioActividadesComponent } from "src/app/components/pop-info-calendario-actividades/pop-info-calendario-actividades.component";
import { CalendarioActividadesAgregarPage } from '../calendario-actividades-agregar/calendario-actividades-agregar.page';
import { CalendarioActividadesEditarPage } from '../calendario-actividades-editar/calendario-actividades-editar.page';

@Component({
  selector: "app-calendario-actividades",
  templateUrl: "./calendario-actividades.page.html",
  styleUrls: ["./calendario-actividades.page.scss"],
  providers: [CalendarioActividadesService],
})
export class CalendarioActividadesPage implements OnInit {
  
  alertas: Alerts;
  arrayCalendario:any;

  constructor(
    public calendarioActividadesService: CalendarioActividadesService,
    private router: Router,
    private alertController: AlertController,
    public toastController: ToastController,
    private popCtrl: PopoverController,
    private modalCtrl:ModalController,
  ) {
    this.alertas = new Alerts(toastController, alertController);
    this.mostrarCalendarioActividades();
  }

  mostrarCalendarioActividades() {
    console.log("uno");
    this.calendarioActividadesService
      .mostrarCalendarioActividades()
      .then((response) => {
        console.log(response);
        let data = JSON.parse(response.data);
        if (data.resultado == "failed") {
          console.log("Calendario Actividades no mostradas");
          this.showAlert("Error", "Calendario Actividades no mostradas");
        } else if (data.resultado == "success") {
          let datosCalendario = data.data;
          this.arrayCalendario = datosCalendario;
        }
      })
      .catch((error) => {
        this.showAlert("Error", JSON.stringify(error));
      });
  }

  private datos = {
    idUsuario: "1",
    nombreActividad: "activiada1",
    descripcion: "registrado",
    fechaInicio: "2020-11-11",
    fechaFin: "2023-11-11",
  };

  private datos2 = {
    idCalendarioActividades: "1",
    idUsuario: "1",
    nombreActividad: "actividad 1",
    descripcion: "Se ha actualizado",
    fechaInicio: "5",
    fechaFin: "3",
  };

  private datos3 = {
    idCalendarioActividades: "1",
  };

  insertCalendarioActividades() {
    this.calendarioActividadesService
      .insertCalendarioActividades(this.datos)
      .then((response) => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == "success") {
          this.datos.idUsuario = "";
          this.datos.nombreActividad = "";
          this.datos.descripcion = "";
          this.datos.fechaInicio = "";
          this.datos.fechaFin = "";

          this.alertas.toast(
            "Exito",
            "Calendario de actividades registrado con exito"
          );
          this.router.navigateByUrl("/menu");
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        this.alertas.showAlert("Error", "Ha ocurrido un error " + error);
      });
  }

  updateCalendarioActividades() {
    this.calendarioActividadesService
      .updateCalendarioActividades(this.datos2)
      .then((response) => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == "success") {
          this.datos2.idCalendarioActividades = "";
          this.datos2.idUsuario = "";
          this.datos2.nombreActividad = "";
          this.datos2.descripcion = "";
          this.datos2.fechaInicio = "";
          this.datos2.fechaFin = "";

          this.alertas.toast(
            "Exito",
            "Calendario de actividades actualizado con exito"
          );
          this.router.navigateByUrl("/menu");
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        this.alertas.showAlert("Error", "Ha ocurrido un error " + error);
      });
  }

  deleteCalendarioActividades() {
    this.calendarioActividadesService
      .deleteCalendarioActividades(this.datos3)
      .then((response) => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == "success") {
          this.datos3.idCalendarioActividades = "";

          this.alertas.toast(
            "Exito",
            "Calendario de actividades eliminado con exito"
          );
          this.router.navigateByUrl("/menu");
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        this.alertas.showAlert("Error", "Ha ocurrido un error " + error);
      });
  }

  ngOnInit() {
    this.mostrarCalendarioActividades();
  }

  async showAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ["Ok"],
    });
    await alert.present();
  }

  async mostrarPop( evento,actividad ) {
    const popover = await this.popCtrl.create({
      component: PopCalendarioActividadesComponent,
      componentProps:{
        actividad,
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
          this.editarCalendarioActividades(actividad);
        }else if( data [clave] == "Borrar"){
          this.borrarCalendarioActividades();
        }

      }

    }
    this.mostrarCalendarioActividades();
    console.log('Padre:', data);


  }

  borrarCalendarioActividades() {
    console.log("Se borro calendario actividades");
  }

  async nuevoCalendarioActividades() {
    const modal = await this.modalCtrl.create({
      component: CalendarioActividadesAgregarPage,
      componentProps: {
        nombre: "ac1",
        descripcion: "dasdbnawbn",
        fecha_inicio: "23 04 2020",
        fecha_fin: "25 05 2020",
      },
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    this.mostrarCalendarioActividades();
    console.log("Retorno del modal", data);
  }

  async editarCalendarioActividades(actividad:any) {
    const modal = await this.modalCtrl.create({
      component: CalendarioActividadesEditarPage,
      componentProps: {
        actividad,
      },
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    this.mostrarCalendarioActividades();
    console.log("Retorno del modal", data);
  }

  clickFab() {
    this.nuevoCalendarioActividades();
  }

  async mostrarPopInfo(actividad:any) {
    const popover = await this.popCtrl.create({
      component: PopInfoCalendarioActividadesComponent,
      componentProps:{
        actividad,
      },
      mode: "md",
      backdropDismiss: true,
      translucent: true,
    });
    return await popover.present();
  }

  textoBuscar = '';

  buscar( event ){
    //this.textoBuscar = evento.detail.value;
    console.log('Se esta buscando en el filtro:');
    console.log(event.detail.value);
    this.textoBuscar = event.detail.value;
  }

  refreshCalendarioActividades(event){
    this.mostrarCalendarioActividades();
    setTimeout(()=>{
      event.target.complete();
    },2000);
  }

}
