import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MostrarMapaService } from '../../services/mostrar-mapa.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  providers: [ MostrarMapaService ]
})
export class MapaPage implements OnInit {

  constructor(
    public mapaService: MostrarMapaService,
    private router: Router,
    private alertController: AlertController
  ) { }

  mostrarMapa() {
    this.mapaService.mostrarMapa()
      .then(response => {
        console.log('Response recived');
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.result == 'failed'){
          console.log('Mapa no mostradas');
          this.showAlert('Error', 'Mapa no mostradas');
        } else if (data.result=='success'){
          console.log('Mapa mostradas');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  ngOnInit() {
    this.mostrarMapa();
  }

  async showAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['Ok'],
    });

    await alert.present();
  }

}
