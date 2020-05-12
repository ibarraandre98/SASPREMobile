import { Component, OnInit } from '@angular/core';
import { CultivosService } from 'src/app/services/cultivos.service';
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
  alertas: Alerts;
  arrayCultivos: any;
  constructor(
    public cultivosService: CultivosService,
    private router: Router,
    private alertController: AlertController,
    public toastController: ToastController,
    private popCtrl: PopoverController,
    private modalCtrl: ModalController
  ) {
    this.alertas = new Alerts(toastController, alertController);
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
          this.showAlert('Error', 'Costos no mostrados');
        } else if (data.resultado == 'success') {
          let datosCultivos = data.data;
          this.arrayCultivos = datosCultivos;
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  async showAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ["Ok"],
    });
    await alert.present();

  }

  clickFab() {
    this.nuevoCultivo();
  }

  async nuevoCultivo() {
    const modal = await this.modalCtrl.create({
      component: AdministrarCultivosAgregarPage,
      componentProps: {
        idSemillas: '',
        idUSuario: '',
        fechaPlantado: '',
        fechaCosecha: '',
        cantidad: '',
        estado: ''
      },
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    console.log("Retorno del modal", data);
  }

  async mostrarPop(evento) {
    const popover = await this.popCtrl.create({
      component: PopCultivosComponent,
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
          this.editarCultivo();
        } else if (data[clave] == "Borrar") {
          this.borrarCultivo();
        }

      }

    }

    console.log('Padre:', data);


  }

  borrarCultivo() {
    console.log("Se borro costo");
  }

  async editarCultivo() {

    const modal = await this.modalCtrl.create({
      component: AdministrarCultivosEditarPage,
      componentProps: {
        semilla: 'maiz',
        descripcion: 'descripcion',
      }
    });

    await modal.present();


    const { data } = await modal.onDidDismiss();

    console.log("Retorno del modal", data);
  }

  async mostrarPopInfo(costo:any) {
    const popover = await this.popCtrl.create({
      component: PopInfoCultivosComponent,
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
}
