import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CalendarioActividadesService } from 'src/app/services/calendario-actividades.service';

@Component({
  selector: 'app-calendario-actividades',
  templateUrl: './calendario-actividades.page.html',
  styleUrls: ['./calendario-actividades.page.scss'],
  providers: [CalendarioActividadesService]
})
export class CalendarioActividadesPage implements OnInit {

  constructor(
    public calendarioActividadesService: CalendarioActividadesService,
    private router: Router,
    private alertController: AlertController
  ) { }

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