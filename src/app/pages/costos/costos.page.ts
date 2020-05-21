import { CostosService } from '../../services/costos.service';
import { Router } from '@angular/router';
import { AlertController, PopoverController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Alerts } from './../../models/alerts';
import { ToastController } from '@ionic/angular';
import { PopCostosComponent } from 'src/app/components/pop-costos/pop-costos.component';
import { PopInfoCostosComponent } from 'src/app/components/pop-info-costos/pop-info-costos.component';
import { CostosEditarPage } from '../costos-editar/costos-editar.page';
import { CostosAgregarPage } from '../costos-agregar/costos-agregar.page';

@Component({
  selector: 'app-costos',
  templateUrl: './costos.page.html',
  styleUrls: ['./costos.page.scss'],
  providers: [CostosService]

})
export class CostosPage implements OnInit {
  alertas: Alerts;
  arrayCostos:any;

  constructor(
    public costosService: CostosService,
    private router: Router,
    private alertController: AlertController,
    public toastController: ToastController,
    private popCtrl: PopoverController,
    private modalCtrl: ModalController

  ) {
    this.alertas = new Alerts(toastController, alertController);
    this.mostrarCostos();
  }

  mostrarCostos() {
    console.log('uno');
    this.costosService.mostrarCostos()
      .then(response => {
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.resultado == 'failed') {
          console.log('Costos no mostrados');
          this.showAlert('Error', 'Costos no mostrados');
        } else if (data.resultado == 'success') {
          let datosCostos = data.data;
          this.arrayCostos = datosCostos;
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  private datos = {
    idSemillas: '1',
    precio: '20',
    descripcion: 'Prueba uno'
  }

  private datos2 = {
    idCostos: '4',
    idSemillas: '1',
    precio: '100',
    descripcion: 'Se ha actualizado'
  }

  private datos3 = {
    idCostos: '4',
  }

  insertCostos() {
    this.costosService.insertCostos(this.datos)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos.idSemillas = '';
          this.datos.precio = '';
          this.datos.descripcion = '';

          this.alertas.toast('Exito', 'Costo registrado con exito');
          this.router.navigateByUrl('/menu');
        } else {
          console.log(data.message);
        }
      }
      )
      .catch(error => {
        this.alertas.showAlert('Error', 'Ha ocurrido un error ' + error);
      })
  }

  updateCostos() {
    this.costosService.updateCostos(this.datos2)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos2.idCostos = '';
          this.datos2.idSemillas = '';
          this.datos2.precio = '';
          this.datos2.descripcion = '';

          this.alertas.toast('Exito', 'Costos actualizados con exito');
          this.router.navigateByUrl('/menu');
        } else {
          console.log(data.message);
        }
      }
      )
      .catch(error => {
        this.alertas.showAlert('Error', 'Ha ocurrido un error ' + error);
      })
  }

  deleteCostos() {
    this.costosService.deleteCostos(this.datos3)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.datos3.idCostos = '';

          this.alertas.toast('Exito', 'Costos eliminados con exito');
          this.router.navigateByUrl('/menu');
        } else {
          console.log(data.message);
        }
      }
      )
      .catch(error => {
        this.alertas.showAlert('Error', 'Ha ocurrido un error ' + error);
      })
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

  async mostrarPop( evento, costo ) {
    const popover = await this.popCtrl.create({
      component: PopCostosComponent,
      componentProps:{
        costo,
      },
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
          this.editarCosto(costo);
        }else if( data [clave] == "Borrar"){
          this.borrarCosto();
        }

      }

    }
    this.mostrarCostos();
    console.log('Padre:', data);


  }

  borrarCosto(){
    console.log("Se borro costo");
  }

  async nuevoCosto(){
      const modal = await this.modalCtrl.create({
        component: CostosAgregarPage,
        componentProps:{
          semilla: 'maiz',
          descripcion: 'descripcion',
        }
      });

      await modal.present();

      const {data} = await modal.onDidDismiss();
      this.mostrarCostos();
      console.log("Retorno del modal", data);

  }

  async editarCosto(costo:any){

    const modal = await this.modalCtrl.create({
      component: CostosEditarPage,
      componentProps:{
        costo,
      }
    });

    await modal.present();


    const {data} = await modal.onDidDismiss();

    console.log("Retorno del modal", data);
  }

  clickFab(){
    this.nuevoCosto();
  }

  async mostrarPopInfo(costo:any) {
    const popover = await this.popCtrl.create({
      component: PopInfoCostosComponent,
      componentProps:{
        costo,
      },
      mode: "md",
      backdropDismiss: true,
      translucent: true,
    });
    return await popover.present();
  }

  buscar( event ){
    //this.textoBuscar = evento.detail.value;
    console.log('Se esta buscando en el filtro:');
    console.log(event.detail.value);
  }

  refreshCostos(event){
    this.mostrarCostos();
    setTimeout(()=>{
      event.target.complete();
    },2000);
  }

}