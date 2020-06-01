
import { environment } from "./../../../environments/environment";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, PopoverController } from "@ionic/angular";
import { MostrarCosechasService } from "src/app/services/mostrar-cosechas.service";
import { async } from "@angular/core/testing";
import { PopCosechasComponent } from 'src/app/components/pop-cosechas/pop-cosechas.component';
import { PopInfoCosechasComponent } from 'src/app/components/pop-info-cosechas/pop-info-cosechas.component';

@Component({
  selector: "app-administrar-cosechas",
  templateUrl: "./administrar-cosechas.page.html",
  styleUrls: ["./administrar-cosechas.page.scss"],
  providers: [MostrarCosechasService],
})
export class AdministrarCosechasPage {

  arrayCosechas:any;
  textoBuscar = '';
  image;

  constructor(
    public mostrarCosechasService: MostrarCosechasService,
    private router: Router,
    private alertController: AlertController,
    private popCtrl: PopoverController
  ) {
    this.image = 'maíz';
    this.mostrarCosechas();
    
  }

  ngOnInit() {

  }

  mostrarCosechas() {
    this.mostrarCosechasService
      .mostrarCosechas()
      .then((response) => {
        console.log("Response recieved:");
        console.log(response);

        let data = JSON.parse(response.data);
        console.log(data);
        let datosCosecha = data.data;
        if (data.resultado == "failed") {
          console.log("Cosechas no mostradas");
          this.showAlert("Error", "Cosechas no mostradas");
        } else if (data.resultado == "success") {
          this.arrayCosechas = datosCosecha;
        }
      })
      .catch((error) => {
        this.showAlert("Error", JSON.stringify(error));
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

  private datosinsert = {
    idCultivos: "",
  };

  private datosupdate = {
    idCosechas: "",
    idCultivos: "",
  };
  private datosdelete = {
    idCosechas: "",
  };

  buscar( event ){
    //this.textoBuscar = evento.detail.value;
    console.log('Se esta buscando en el filtro:');
    console.log(event.detail.value);
    this.textoBuscar = event.detail.value;
  }


  async mostrarPop( evento,cosecha ){
    const popover = await this.popCtrl.create({
      component: PopCosechasComponent,
      componentProps:{
        cosecha,
      },
      event: evento,
      mode: 'ios',
      backdropDismiss: true,
      translucent: true
    });

    

    const {data} = await popover.onDidDismiss(); //Para recibir los datos cuando se cierre el pop
    // const {data} = await popover.onWillDismiss();  Para que se dispare rápido sin esperar que e cierre el pop
    for (var clave in data){
      // Controlando que json realmente tenga esa propiedad
      if (data.hasOwnProperty(clave)) {
        // Mostrando en pantalla la clave junto a su valor
        /* console.log("La clave es " + clave+ " y el valor es " + data[clave]);
        
        if( data[clave] ==  "Editar"){
          console.log("Se oprimio eliminar")
        } */
          this.mostrarCosechas();

      }

    }

    console.log('Padre:', data);
    return await popover.present();
  }


  async mostrarPopInfo(cosecha:any) {
    const popover = await this.popCtrl.create({
      component: PopInfoCosechasComponent,
      componentProps:{
        cosecha,
      },
      mode: 'md',
      backdropDismiss: true,
      translucent: true
      
    });
    return await popover.present();
  }

  insertCosechas() {
    this.mostrarCosechasService
      .insertcosechas(this.datosinsert)
      .then((response) => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == "success") {
          this.datosinsert.idCultivos = "";

          this.router.navigateByUrl("/menu");
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        this.showAlert("Error", "Ha ocurrido un error " + error);
      });
  }

  updateCosechas() {
    this.mostrarCosechasService
      .updateCosechas(this.datosupdate)
      .then((response) => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == "success") {
          this.datosupdate.idCosechas = "";
          this.datosupdate.idCultivos = "";

          this.router.navigateByUrl("/menu");
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        this.showAlert("Error", "Ha ocurrido un error " + error);
      });
  }

  deleteCosechas() {
    this.mostrarCosechasService
      .deleteCosechas(this.datosdelete)
      .then((response) => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == "success") {
          this.datosdelete.idCosechas = "";

          this.router.navigateByUrl("/menu");
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        this.showAlert("Error", "Ha ocurrido un error " + error);
      });
  }

  refreshCosechas(event){
    this.mostrarCosechas();
    setTimeout(()=>{
      event.target.complete();
    },2000);
  }
  
}
