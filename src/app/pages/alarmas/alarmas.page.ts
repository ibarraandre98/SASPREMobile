import { AlarmasService } from '../../services/alarmas.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Alerts } from './../../models/alerts';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.page.html',
  styleUrls: ['./alarmas.page.scss'],
  providers: [AlarmasService]
})



export class AlarmasPage implements OnInit {
  alertas: Alerts;

  constructor(
    public alarmasService: AlarmasService,
    private router: Router,
    private alertController: AlertController,
    public toastController: ToastController

  ) {
    this.alertas = new Alerts(toastController, alertController);
  }

  mostrarAlarmas() {
    console.log('uno');
    this.alarmasService.mostrarAlarmas()
      .then(response => {
        console.log('dos');
        console.log('Response recived');
        console.log('tres');
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.result == 'failed') {
          console.log('Alarmas no mostradas');
          this.showAlert('Error', 'Alarmas no mostradas');
        } else if (data.result == 'success') {
          console.log('Alarmas mostradas');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  private datos = {
    idSemillas: '1',
    nombreAlarma: 'alarma1',
    tempMaxAlarma: '12',
    tempMinAlarma: '5',
    lapsoDias: '3',
    descripcion: 'Prueba uno'
  }

  private datos2 = {
    idAlarmas: '1',
    idSemillas: '1',
    nombreAlarma: 'alarma1',
    tempMaxAlarma: '12',
    tempMinAlarma: '5',
    lapsoDias: '3',
    descripcion: 'Se ha actualizado'
  }

  private datos3 = {
    idAlarmas: '1',
  }

  insertAlarma() {
    this.alarmasService.insertAlarma(this.datos)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos.idSemillas = '';
          this.datos.nombreAlarma = '';
          this.datos.tempMaxAlarma = '';
          this.datos.tempMinAlarma = '';
          this.datos.lapsoDias = '';
          this.datos.descripcion = '';

          this.alertas.toast('Exito', 'Alerta registrada con exito');
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

  updateAlarma() {
    this.alarmasService.updateAlarma(this.datos2)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos2.idAlarmas = '';
          this.datos2.idSemillas = '';
          this.datos2.nombreAlarma = '';
          this.datos2.tempMaxAlarma = '';
          this.datos2.tempMinAlarma = '';
          this.datos2.lapsoDias = '';
          this.datos2.descripcion = '';

          this.alertas.toast('Exito', 'Alerta actualizada con exito');
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

  deleteAlarma() {
    this.alarmasService.deleteAlarma(this.datos3)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos3.idAlarmas = '';

          this.alertas.toast('Exito', 'Alerta eliminada con exito');
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
    this.mostrarAlarmas();
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
