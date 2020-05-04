import { environment } from './../../../environments/environment';
import { InsecticidasService } from '../../services/insecticidas.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { InsecticidasNuevoPage } from '../insecticidas-nuevo/insecticidas-nuevo.page';
import { InsecticidasEditarPage } from '../insecticidas-editar/insecticidas-editar.page';
import { PopInsecticidasComponent } from 'src/app/components/pop-insecticidas/pop-insecticidas.component';
import { PopInfoInsecticidasComponent } from 'src/app/components/pop-info-insecticidas/pop-info-insecticidas.component';

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
    private alertController:AlertController,
    private modalCtrl:ModalController,
    private popCtrl:PopoverController) { }

  private datos = {
    idInsecticidas: '3',
    nombreInsecticida: 'prueba1',
    precio: '200',
    descripcion: 'te mueres'
  }

  async mostrarPop( evento ) {
    const popover = await this.popCtrl.create({
      component: PopInsecticidasComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: true,
      translucent: true
    });
    await popover.present();

    const {data} = await popover.onDidDismiss(); //Para recibir los datos cuando se cierre el pop
    // const {data} = await popover.onWillDismiss();  Para que se dispare rápido sin esperar que e cierre el pop

    for (var clave in data){
      // Controlando que json realmente tenga esa propiedad
      if (data.hasOwnProperty(clave)) {
        // Mostrando en pantalla la clave junto a su valor
        console.log("La clave es " + clave+ " y el valor es " + data[clave]);

        if( data[clave] ==  "Editar"){
          this.editarInsecticida();
        }else if( data [clave] == "Borrar"){
          this.borrarInsecticida();
        }

      }

    }

    console.log('Padre:', data);


  }

  borrarInsecticida(){
    console.log("Se borro insecticidad");
  }

  async nuevoInsecticida(){
      const modal = await this.modalCtrl.create({
        component: InsecticidasNuevoPage,
        componentProps:{
          nombre: 'nombre',
          precio: 100,
          descripcion: 'descripcion'
        }
      });

      await modal.present();

      const {data} = await modal.onDidDismiss();

      console.log("Retorno del modal", data);

  }

  async editarInsecticida(){

    const modal = await this.modalCtrl.create({
      component: InsecticidasEditarPage,
      componentProps:{
        nombre: 'nombre',
        precio: 100
      }
    });

    await modal.present();


    const {data} = await modal.onDidDismiss();

    console.log("Retorno del modal", data);
  }

  async mostrarPopInfo() {
    const popover = await this.popCtrl.create({
      component: PopInfoInsecticidasComponent,
      mode: 'md',
      backdropDismiss: true,
      translucent: true
    });
    return await popover.present();


  }

  clickFab(){
    this.nuevoInsecticida();
  }

  //textoBuscar = '';

  buscar( event ){
    //this.textoBuscar = evento.detail.value;
    console.log('Se esta buscando en el filtro:');
    console.log(event.detail.value);
  }



  insertInsecticidas() {
    this.insecticidasService.insertInsecticidas(this.datos)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos.idInsecticidas = '';
          this.datos.nombreInsecticida = '';
          this.datos.precio = '';
          this.datos.descripcion = '';

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

  deleteInsecticidas() {
    this.insecticidasService.deleteInsecticidas(this.datos)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos.idInsecticidas = '';

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

  updateInsecticidas() {
    this.insecticidasService.updateInsecticidas(this.datos)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos.idInsecticidas = '';
          this.datos.nombreInsecticida = '';
          this.datos.precio = '';
          this.datos.descripcion = '';

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

  mostrarInsecticidas() {
    console.log('uno');
    this.insecticidasService.selectInsecticidas()
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
    //this.updateInsecticidas();
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