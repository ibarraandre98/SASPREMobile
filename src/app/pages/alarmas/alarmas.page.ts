import { environment } from './../../../environments/environment';
import { AlarmasService } from '../../services/alarmas.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.page.html',
  styleUrls: ['./alarmas.page.scss'],
  providers: [AlarmasService]
})



export class AlarmasPage implements OnInit {
  constructor(
    public alarmasService: AlarmasService,
    private router: Router,
    private alertController:AlertController
  ) {
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
        if(data.result == 'failed'){
          console.log('Alarmas no mostradas');
          this.showAlert('Error', 'Alarmas no mostradas');
        }else if(data.result=='success'){
          console.log('Alarmas mostradas');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
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
