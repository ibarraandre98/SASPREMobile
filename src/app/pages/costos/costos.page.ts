import { CostosService } from '../../services/costos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Alerts } from './../../models/alerts';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-costos',
  templateUrl: './costos.page.html',
  styleUrls: ['./costos.page.scss'],
  providers: [CostosService]

})
export class CostosPage implements OnInit {
  alertas: Alerts;

  constructor(
    public costosService: CostosService,
    private router: Router,
    private alertController: AlertController,
    public toastController: ToastController

  ) {
    this.alertas = new Alerts(toastController, alertController);

  }

  mostrarCostos() {
    console.log('uno');
    this.costosService.mostrarCostos()
      .then(response => {
        console.log('dos');
        console.log('Response recived');
        console.log('tres');
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.result == 'failed') {
          console.log('Costos no mostrados');
          this.showAlert('Error', 'Costos no mostrados');
        } else if (data.result == 'success') {
          console.log('Costos mostrados');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  private datos = {
    idSemillas: '1',
    precio: '20',
    descripcion: 'Prueba uno'
  }

  private datos2 = {
    idCostos: '4',
    idSemillas: '1',
    precio: '100',
    descripcion: 'Se ha actualizado'
  }

  private datos3 = {
    idCostos: '4',
  }

  insertCostos() {
    this.costosService.insertCostos(this.datos)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos.idSemillas = '';
          this.datos.precio = '';
          this.datos.descripcion = '';

          this.alertas.toast('Exito', 'Costo registrado con exito');
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

  updateCostos() {
    this.costosService.updateCostos(this.datos2)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos2.idCostos = '';
          this.datos2.idSemillas = '';
          this.datos2.precio = '';
          this.datos2.descripcion = '';

          this.alertas.toast('Exito', 'Costos actualizados con exito');
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

  deleteCostos() {
    this.costosService.deleteCostos(this.datos3)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos3.idCostos = '';

          this.alertas.toast('Exito', 'Costos eliminados con exito');
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
    this.mostrarCostos();
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