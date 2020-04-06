import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MostrarFertilizantesService } from '../../services/mostrar-fertilizantes.service';

@Component({
  selector: 'app-fertilizantes',
  templateUrl: './fertilizantes.page.html',
  styleUrls: ['./fertilizantes.page.scss'],
  providers: [ MostrarFertilizantesService ]
})
export class FertilizantesPage implements OnInit {

  constructor(
    public fertilizantesService: MostrarFertilizantesService,
    private router: Router,
    private alertController: AlertController
  ) { }

  mostrarFertilizantes() {
    this.fertilizantesService.mostrarFertilizantes()
      .then(response => {
        console.log('Response recived');
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.result == 'failed'){
          console.log('fertilizantes no mostradas');
          this.showAlert('Error', 'fertilizantes no mostradas');
        } else if (data.result=='success'){
          console.log('fertilizantes mostradas');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  ngOnInit() {
    this.mostrarFertilizantes();
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
