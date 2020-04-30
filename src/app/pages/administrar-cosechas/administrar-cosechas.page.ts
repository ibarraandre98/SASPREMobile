import { environment } from "./../../../environments/environment";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, PopoverController } from "@ionic/angular";
import { MostrarCosechasService } from "src/app/services/mostrar-cosechas.service";
import { async } from "@angular/core/testing";

@Component({
  selector: "app-administrar-cosechas",
  templateUrl: "./administrar-cosechas.page.html",
  styleUrls: ["./administrar-cosechas.page.scss"],
  providers: [MostrarCosechasService],
})
export class AdministrarCosechasPage {
  constructor(
    public mostrarCosechasService: MostrarCosechasService,
    private router: Router,
    private alertController: AlertController,
    public popoverController: PopoverController
  ) {}


  ngOnInit() {
    this.mostrarCosechas();
  }

  mostrarCosechas() {
    this.mostrarCosechasService
      .mostrarCosechas()
      .then((response) => {
        console.log("Response recieved:");
        console.log(response);

        let data = JSON.parse(response.data);
        console.log(data);
        let datosUsuario = data.data;
        if (data.result == "failed") {
          console.log("Cosechas no mostradas");
          this.showAlert("Error", "Cosechas no mostradas");
        } else if (data.result == "success") {
          console.log("Cosechas mostradas");
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
}
