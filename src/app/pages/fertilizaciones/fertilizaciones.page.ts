import { Component, OnInit } from '@angular/core';
import { MostrarFertilizacionesService } from '../../services/mostrar-fertilizaciones.service';
import { Router } from '@angular/router';
import { AlertController, PopoverController, ModalController } from '@ionic/angular';
import { PopInfoFertilizacionesComponent } from '../../components/pop-info-fertilizaciones/pop-info-fertilizaciones.component';
import { PopOpcionesFertilizacionesComponent } from '../../components/pop-opciones-fertilizaciones/pop-opciones-fertilizaciones.component';
import { FertilizacionesEditarPage } from '../fertilizaciones-editar/fertilizaciones-editar.page';
import { FertilizacionesAgregarPage } from '../fertilizaciones-agregar/fertilizaciones-agregar.page';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-fertilizaciones',
  templateUrl: './fertilizaciones.page.html',
  styleUrls: ['./fertilizaciones.page.scss'],
  providers: [ MostrarFertilizacionesService ]
})
export class FertilizacionesPage implements OnInit {

  arrayFertilizaciones:any;

  constructor(
    public fertilizacionesService: MostrarFertilizacionesService,
    private router: Router,
    private alertController: AlertController,
    private popCtrl: PopoverController,
    private modalCtrl: ModalController,
    private fB: FormBuilder
  ) {
    this.mostrarFertilizaciones();
   }

  insertarForm = this.fB.group({
    idFertilizaciones:[''],
    idCultivos:[''],
    idFertilizantes:[''],
    idUsuario:[''],
    fecha:[''],
  });


  public submit(){
    console.log(this.insertarForm.value);
  }

  

  buscar( event ){
    //this.textoBuscar = evento.detail.value;
    console.log('Se esta buscando en el filtro:');
    console.log(event.detail.value);
  }

  async mostrarPopInfo(fertilizacion:any) {
    const popover = await this.popCtrl.create({
      component: PopInfoFertilizacionesComponent,
      componentProps:{
        fertilizacion,
      },
      mode: 'md',
      backdropDismiss: true,
      translucent: true
    });
    return await popover.present();
  }

  async mostrarPop( evento, fertilizacion ) {
    const popover = await this.popCtrl.create({
      component: PopOpcionesFertilizacionesComponent,
      componentProps:{
        fertilizacion,
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
          this.popEditarFertilizaciones(fertilizacion);
        }else if( data [clave] == "Borrar"){
          this.popBorrarFertilizaciones();
        }

      }

    }

    console.log('Padre:', data);
  }

  async popEditarFertilizaciones(fertilizacion:any){
    const modal = await this.modalCtrl.create({
      component: FertilizacionesEditarPage,
      componentProps:{
        fertilizacion,
      }
    });

    await modal.present();


    const {data} = await modal.onDidDismiss();

    console.log("Retorno del modal", data);
  }



  popBorrarFertilizaciones(){
    console.log("Se ha borrado un fertilizaciones");
  }

  clickFab(){
    this.nuevoFertilizaciones();
  }

  async nuevoFertilizaciones(){
    const modal = await this.modalCtrl.create({
      component: FertilizacionesAgregarPage
    });

    await modal.present();

    const {data} = await modal.onDidDismiss();

    console.log("Retorno del modal", data);
  }

  mostrarFertilizaciones() {
    this.fertilizacionesService.mostrarFertilizaciones()
      .then(response => {
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.resultado == 'failed'){
          console.log('Fertilizaciones no mostradas');
          this.showAlert('Error', 'Fertilizaciones no mostradas');
        } else if (data.resultado =='success'){
          let datosFertilizaciones = data.data;
          this.arrayFertilizaciones = datosFertilizaciones;
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  insertarFertilizaciones() {
    this.fertilizacionesService.insertarFertilizaciones( null )
      .then(response => {

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
