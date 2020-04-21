import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CalendarioActividadesService } from 'src/app/services/calendario-actividades.service';
import { Alerts } from './../../models/alerts';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-calendario-actividades',
  templateUrl: './calendario-actividades.page.html',
  styleUrls: ['./calendario-actividades.page.scss'],
  providers: [CalendarioActividadesService]
})
export class CalendarioActividadesPage implements OnInit {
  alertas: Alerts;

  constructor(
    public calendarioActividadesService: CalendarioActividadesService,
    private router: Router,
    private alertController: AlertController,
    public toastController: ToastController

  ) {
    this.alertas = new Alerts(toastController, alertController);

  }

  mostrarCalendarioActividades() {
    console.log('uno');
    this.calendarioActividadesService.mostrarCalendarioActividades()
      .then(response => {
        console.log('dos');
        console.log('Response recived');
        console.log('tres');
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.result == 'failed') {
          console.log('Calendario Actividades no mostradas');
          this.showAlert('Error', 'Calendario Actividades no mostradas');
        } else if (data.result == 'success') {
          console.log('Calendario Actividades mostradas');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  private datos = {
    idUsuario: '1',
    nombreActividad: 'activiada1',
    descripcion: 'registrado',
    fechaInicio: '2020-11-11',
    fechaFin: '2023-11-11'
  }

  private datos2 = {
    idCalendarioActividades: '1',
    idUsuario: '1',
    nombreActividad: 'actividad 1',
    descripcion: 'Se ha actualizado',
    fechaInicio: '5',
    fechaFin: '3'
  }

  private datos3 = {
    idCalendarioActividades: '1',
  }

  insertCalendarioActividades(){
    this.calendarioActividadesService.insertCalendarioActividades(this.datos)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos.idUsuario = '';
          this.datos.nombreActividad = '';
          this.datos.descripcion = '';
          this.datos.fechaInicio = '';
          this.datos.fechaFin = '';

          this.alertas.toast('Exito', 'Calendario de actividades registrado con exito');
          this.router.navigateByUrl('/menu');
        } else {
          console.log(data.message);
        }
      }
      )
      .catch(error => {
        this.alertas.showAlert('Error', 'Ha ocurrido un error ' + error);
      })
  }

  updateCalendarioActividades() {
    this.calendarioActividadesService.updateCalendarioActividades(this.datos2)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos2.idCalendarioActividades = '';
          this.datos2.idUsuario = '';
          this.datos2.nombreActividad = '';
          this.datos2.descripcion = '';
          this.datos2.fechaInicio = '';
          this.datos2.fechaFin = '';

          this.alertas.toast('Exito', 'Calendario de actividades actualizado con exito');
          this.router.navigateByUrl('/menu');
        } else {
          console.log(data.message);
        }
      }
      )
      .catch(error => {
        this.alertas.showAlert('Error', 'Ha ocurrido un error ' + error);
      })
  }

  deleteCalendarioActividades() {
    this.calendarioActividadesService.deleteCalendarioActividades(this.datos3)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos3.idCalendarioActividades = '';

          this.alertas.toast('Exito', 'Calendario de actividades eliminado con exito');
          this.router.navigateByUrl('/menu');
        } else {
          console.log(data.message);
        }
      }
      )
      .catch(error => {
        this.alertas.showAlert('Error', 'Ha ocurrido un error ' + error);
      })
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
}