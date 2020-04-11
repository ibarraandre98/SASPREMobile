import { environment } from './../../../environments/environment';
import { HistorialplagasService } from '../../services/historialplagas.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historialplagas',
  templateUrl: './historialplagas.page.html',
  styleUrls: ['./historialplagas.page.scss'],
  providers: [HistorialplagasService]
})
export class HistorialplagasPage implements OnInit {

  constructor( public historialplagasServices:HistorialplagasService,
    private router: Router,
    private alertController:AlertController) { }

    mostrarHistorialplagas() {
    console.log('uno');
    this.historialplagasServices.mostrarHistorialplagas()
      .then(response => {
        console.log('dos');
        console.log('Response recived');
        console.log('tres');
        console.log(response);

        let data = JSON.parse(response.data);
        if(data.result == 'failed'){
          console.log('plagas no mostradas');
          this.showAlert('Error', 'plagas no mostradas');
        }else if(data.result=='success'){
          console.log('plagas mostradas');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }


  ngOnInit() {
    this.mostrarHistorialplagas();
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
