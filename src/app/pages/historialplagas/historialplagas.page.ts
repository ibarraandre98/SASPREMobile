import { environment } from './../../../environments/environment';
import { HistorialplagasService } from '../../services/historialplagas.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PopInfoHistorialComponent } from 'src/app/components/pop-info-historial/pop-info-historial.component';

@Component({
  selector: 'app-historialplagas',
  templateUrl: './historialplagas.page.html',
  styleUrls: ['./historialplagas.page.scss'],
  providers: [HistorialplagasService]
})
export class HistorialplagasPage implements OnInit {

  arrayHistorial:any;

  constructor( 
    public historialplagasServices:HistorialplagasService,
    private router: Router,
    private alertController:AlertController,
    private popCtrl:PopoverController) {
      this.mostrarHistorialplagas();
     }
    
    private datos = {
      idHistorialCultivo: '3',
      idCultivos: '3',
      idPlagas: '4',
      fechaprediccion: '2020-03-03'
    }
    /*$idCultivos = $_POST['idCultivos'];
$idPlagas = $_POST['idPlagas'];
$fechaprediccion = $_POST['fechaprediccion']; */

async mostrarPopHistorial(plaga:any){
  const popover = await this.popCtrl.create({
    component: PopInfoHistorialComponent,
    componentProps:{
      plaga,
    },
    mode: 'md',
    backdropDismiss: true,
    translucent: true
  });
  return await popover.present();
}



//Este es el search bar
buscar( event ){
  //this.textoBuscar = evento.detail.value;
  console.log('Se esta buscando en el filtro:');
  console.log(event.detail.value);
}

insertInsecticidas() {
  this.historialplagasServices.insertHistorialplagas(this.datos)
    .then(response => {
      console.log(response);
      let data = JSON.parse(response.data);

      if (data.result == 'success') {
        this.datos.idCultivos = '';
        this.datos.idPlagas = '';
        this.datos.fechaprediccion = '';

       // this.alertas.toast('Exito', 'Alerta registrada con exito');
        this.router.navigateByUrl('/menu');
      } else {
        console.log(data.message);
      }
    }
    )
    .catch(error => {
    //  this.alertas.showAlert('Error', 'Ha ocurrido un error ' + error);
    })
}


updateInsecticidas() {
  this.historialplagasServices.updateHistorialplagas(this.datos)
    .then(response => {
      console.log(response);
      let data = JSON.parse(response.data);

      if (data.result == 'success') {
        this.datos.idHistorialCultivo = '';
        this.datos.idCultivos = '';
        this.datos.idPlagas = '';
        this.datos.fechaprediccion = '';

       // this.alertas.toast('Exito', 'Alerta actualizada con exito');
        this.router.navigateByUrl('/menu');
      } else {
        console.log(data.message);
      }
    }
    )
    .catch(error => {
    //  this.alertas.showAlert('Error', 'Ha ocurrido un error ' + error);
    })
}

deleteInsecticidas() {
  this.historialplagasServices.deleteHistorialplagas(this.datos)
    .then(response => {
      console.log(response);
      let data = JSON.parse(response.data);

      if (data.result == 'success') {
        this.datos.idHistorialCultivo = '';

       // this.alertas.toast('Exito', 'Alerta eliminada con exito');
        this.router.navigateByUrl('/menu');
      } else {
        console.log(data.message);
      }
    }
    )
    .catch(error => {
   //   this.alertas.showAlert('Error', 'Ha ocurrido un error ' + error);
    })
}

    mostrarHistorialplagas() {
    console.log('uno');
    this.historialplagasServices.historialplagasSelect()
      .then(response => {
        console.log(response);

        let data = JSON.parse(response.data);
        if(data.resultado == 'failed'){
          console.log('plagas no mostradas');
          this.showAlert('Error', 'plagas no mostradas');
        }else if(data.resultado =='success'){
          let datosHistorial = data.data;
          this.arrayHistorial = datosHistorial;
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }
 

  ngOnInit() {
    
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
