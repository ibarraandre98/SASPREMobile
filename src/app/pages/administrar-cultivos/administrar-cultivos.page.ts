import { CultivosService } from './../../services/cultivos.service';
import { Component, OnInit } from '@angular/core';
import { Alerts } from 'src/app/models/alerts';
import { Router } from '@angular/router';
import { AlertController, ToastController, PopoverController, ModalController } from '@ionic/angular';
import { AdministrarCultivosAgregarPage } from '../administrar-cultivos-agregar/administrar-cultivos-agregar.page';
import { PopCultivosComponent } from 'src/app/components/pop-cultivos/pop-cultivos.component';
import { AdministrarCultivosEditarPage } from '../administrar-cultivos-editar/administrar-cultivos-editar.page';
import { PopInfoCultivosComponent } from 'src/app/components/pop-info-cultivos/pop-info-cultivos.component';

@Component({
  selector: 'app-administrar-cultivos',
  templateUrl: './administrar-cultivos.page.html',
  styleUrls: ['./administrar-cultivos.page.scss'],
  providers: [CultivosService]
})
export class AdministrarCultivosPage implements OnInit {
  arrayCultivos: any;
  constructor(
    public cultivosService: CultivosService,
    private router: Router,
    private alertController: AlertController,
    public toastController: ToastController,
    private popCtrl: PopoverController,
    private modalCtrl: ModalController,
    private alerts:Alerts,
  ) {
    this.mostrarCultivos();
  }

  ngOnInit() {
  }

  

  mostrarCultivos() {
    console.log('uno');
    this.cultivosService.mostrarCultivos()
      .then(response => {
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.resultado == 'failed') {
          console.log('Costos no mostrados');
          this.alerts.showAlert('Error', 'Costos no mostrados');
        } else if (data.resultado == 'success') {
          let datosCultivos = data.data;
          this.arrayCultivos = datosCultivos;
        }
      }
      ).catch(error => {
        this.alerts.showAlert('Error', JSON.stringify(error));
      });
  }


  clickFab() {
    this.nuevoCultivo();
  }

  async nuevoCultivo() {
    const modal = await this.modalCtrl.create({
      component: AdministrarCultivosAgregarPage,
      
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    this.mostrarCultivos();
    console.log("Retorno del modal", data);
  }

  async mostrarPop(evento,cultivo) {
    const popover = await this.popCtrl.create({
      component: PopCultivosComponent,
      componentProps:{cultivo},
      event: evento,
      mode: 'ios',
      backdropDismiss: true,
      translucent: true
    });
    await popover.present();

    const { data } = await popover.onDidDismiss(); //Para recibir los datos cuando se cierre el pop
    // const {data} = await popover.onWillDismiss();  Para que se dispare rápido sin esperar que e cierre el pop

    for (var clave in data) {
      // Controlando que json realmente tenga esa propiedad
      if (data.hasOwnProperty(clave)) {
        // Mostrando en pantalla la clave junto a su valor
        console.log("La clave es " + clave + " y el valor es " + data[clave]);
        
        if (data[clave] == "Editar") {
          this.editarCultivo(cultivo);
        } else if (data[clave] == "Borrar") {
          this.borrarCultivo();
        }

      }

    }
    this.mostrarCultivos();
    console.log('Padre:', data);


  }

  borrarCultivo() {

  }

  async editarCultivo(cultivo:any) {

    console.log(cultivo);
    const modal = await this.modalCtrl.create({
      component: AdministrarCultivosEditarPage,
      componentProps: {
       cultivo,
      }
    });

    await modal.present();


    const { data } = await modal.onDidDismiss();
    this.mostrarCultivos();
    console.log("Retorno del modal", data);
  }

  async mostrarPopInfo(cultivo:any) {
    const popover = await this.popCtrl.create({
      component: PopInfoCultivosComponent,
      componentProps:{
        cultivo,
      },
      mode: "md",
      backdropDismiss: true,
      translucent: true,
    });
    return await popover.present();
  }

  textoBuscar = '';
  buscar( event ){
    //this.textoBuscar = evento.detail.value;
    console.log('Se esta buscando en el filtro:');
    console.log(event.detail.value);
    this.textoBuscar =  event.detail.value;
  }

  refreshCultivos(event){
    this.mostrarCultivos();
    setTimeout(()=>{
      event.target.complete();
    },2000);
  }

}
