import { environment } from './../../../environments/environment';
import { CostosService } from '../../services/costos.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costos',
  templateUrl: './costos.page.html',
  styleUrls: ['./costos.page.scss'],
  providers: [CostosService]

})
export class CostosPage implements OnInit {

  constructor(
    public costosService: CostosService,
    private router: Router,
    private alertController: AlertController
  ) {

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