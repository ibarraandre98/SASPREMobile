import { environment } from './../../../environments/environment';
import { InsecticidasService } from '../../services/insecticidas.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insecticidas',
  templateUrl: './insecticidas.page.html',
  styleUrls: ['./insecticidas.page.scss'],
  providers: [InsecticidasService]
})
export class InsecticidasPage implements OnInit {

  constructor(
    public insecticidasService: InsecticidasService,
    private router: Router,
    private alertController:AlertController
  ) { }
  mostrarInsecticidas() {
    console.log('uno');
    this.insecticidasService.mostrarInsecticidas()
      .then(response => {
        console.log('dos');
        console.log('Response recived');
        console.log('tres');
        console.log(response);

        let data = JSON.parse(response.data);
        if(data.result == 'failed'){
          console.log('insecticidas no mostrados');
          this.showAlert('Error', 'insecticidas no mostrados');
        }else if(data.result=='success'){
          console.log('insecticidas mostrados');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }


  ngOnInit() {
    this.mostrarInsecticidas();
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
