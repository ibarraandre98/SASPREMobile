import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { MostrarFertilizantesService } from '../../services/mostrar-fertilizantes.service';
import { PopInfoFertilizanteComponent } from '../../components/pop-info-fertilizante/pop-info-fertilizante.component';
import { PopOpcionesFertilizanteComponent } from '../../components/pop-opciones-fertilizante/pop-opciones-fertilizante.component';
import { FertilizantesEditarPage } from '../fertilizantes-editar/fertilizantes-editar.page';
import { FertilizantesAgregarPage } from '../fertilizantes-agregar/fertilizantes-agregar.page';

@Component({
  selector: 'app-fertilizantes',
  templateUrl: './fertilizantes.page.html',
  styleUrls: ['./fertilizantes.page.scss'],
  providers: [ MostrarFertilizantesService ]
})
export class FertilizantesPage implements OnInit {

  arrayFertilizantes:any;

  constructor(
    public fertilizantesService: MostrarFertilizantesService,
    private router: Router,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private popCtrl: PopoverController
  ) {
    this.mostrarFertilizantes();
   }

  buscar( event ){
    //this.textoBuscar = evento.detail.value;
    console.log('Se esta buscando en el filtro:');
    console.log(event.detail.value);
  }

  async mostrarPopInfo(fertilizante:any) {
    const popover = await this.popCtrl.create({
      component: PopInfoFertilizanteComponent,
      componentProps:{
        fertilizante,
      },
      mode: 'md',
      backdropDismiss: true,
      translucent: true
    });
    return await popover.present();
  }

  async mostrarPop( evento, fertilizante ) {
    const popover = await this.popCtrl.create({
      component: PopOpcionesFertilizanteComponent,
      componentProps:{
        fertilizante,
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
          this.popEditarFertilizantes(fertilizante);
        }else if( data [clave] == "Borrar"){
          this.popBorrarFertilizaciones();
        }

      }

    }

    console.log('Padre:', data);
  }

  async popEditarFertilizantes(fertilizante:any){
    const modal = await this.modalCtrl.create({
      component: FertilizantesEditarPage,
      componentProps:{
        fertilizante,
      }
    });

    await modal.present();


    const {data} = await modal.onDidDismiss();

    console.log("Retorno del modal", data);
  }



  popBorrarFertilizaciones(){
    console.log("Se ha borrado una fertilizacion");
  }

  clickFab(){
    this.nuevoFertizante();
  }

  async nuevoFertizante(){
    const modal = await this.modalCtrl.create({
      component: FertilizantesAgregarPage
    });

    await modal.present();

    const {data} = await modal.onDidDismiss();

    console.log("Retorno del modal", data);

  }

  mostrarFertilizantes() {
    this.fertilizantesService.mostrarFertilizantes()
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);
        if (data.resultado == 'failed'){
          console.log('fertilizantes no mostradas');
          this.showAlert('Error', 'fertilizantes no mostradas');
        } else if (data.resultado =='success'){
          let datosFertilizantes = data.data;
          this.arrayFertilizantes = datosFertilizantes;
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  insertarFertilizantes() {
    this.fertilizantesService.insertarFertilizantes( null )
      .then(response => {
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
