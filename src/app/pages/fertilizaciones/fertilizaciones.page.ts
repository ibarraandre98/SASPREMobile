import { Component, OnInit } from '@angular/core';
import { MostrarFertilizacionesService } from '../../services/mostrar-fertilizaciones.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-fertilizaciones',
  templateUrl: './fertilizaciones.page.html',
  styleUrls: ['./fertilizaciones.page.scss'],
  providers: [ MostrarFertilizacionesService ]
})
export class FertilizacionesPage implements OnInit {

  constructor(
    public fertilizacionesService: MostrarFertilizacionesService,
    private router: Router,
    private alertController: AlertController
  ) { }

  mostrarFertilizaciones() {
    this.fertilizacionesService.mostrarFertilizaciones()
      .then(response => {
        console.log('dos');
        console.log('Response recived');
        console.log('tres');
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.result == 'failed'){
          console.log('Fertilizaciones no mostradas');
          this.showAlert('Error', 'Fertilizaciones no mostradas');
        } else if (data.result=='success'){
          console.log('Fertilizaciones mostradas');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  insertarFertilizaciones() {
    this.fertilizacionesService.insertarFertilizaciones()
      .then(response => {
        console.log('dos');
        console.log('Response recived');
        console.log('tres');
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.result == 'failed'){
          console.log('Fertilizaciones no mostradas');
          this.showAlert('Error', 'Fertilizaciones no mostradas');
        } else if (data.result=='success'){
          console.log('Fertilizaciones mostradas');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  editarFertilizaciones() {
    this.fertilizacionesService.editarFertilizaciones()
      .then(response => {
        console.log('dos');
        console.log('Response recived');
        console.log('tres');
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.result == 'failed'){
          console.log('Fertilizaciones no mostradas');
          this.showAlert('Error', 'Fertilizaciones no mostradas');
        } else if (data.result=='success'){
          console.log('Fertilizaciones mostradas');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  borrarFertilizaciones() {
    this.fertilizacionesService.borrarFertilizaciones()
      .then(response => {
        console.log('dos');
        console.log('Response recived');
        console.log('tres');
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.result == 'failed'){
          console.log('Fertilizaciones no mostradas');
          this.showAlert('Error', 'Fertilizaciones no mostradas');
        } else if (data.result=='success'){
          console.log('Fertilizaciones mostradas');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }


  ngOnInit() {
    this.mostrarFertilizaciones();
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
