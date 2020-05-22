import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CultivosService } from 'src/app/services/cultivos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrar-cultivos-agregar',
  templateUrl: './administrar-cultivos-agregar.page.html',
  styleUrls: ['./administrar-cultivos-agregar.page.scss'],
})
export class AdministrarCultivosAgregarPage implements OnInit {

  constructor(private modalCtrl: ModalController,
    public administrarCultivosService: CultivosService,
    private router: Router,
  ) { }

  datos = {
    idSemillas: '',
    idUSuario: '',
    fechaPlantado: '',
    fechaCosecha: '',
    cantidad: '',
    estado: '',
    cosechado: '',

  }
  ngOnInit() {
  }

  onSubmitCultivos() {
    this.administrarCultivosService.insertCultivos(this.datos).then(Response => {
      let data = JSON.parse(Response.data);
      let datosCostos = data.result;
      if (datosCostos == 'success') {
        console.log("Se ha insertado con exito");
      } else {
        console.log("No se ha insertado con exito");
      }
    });
    this.salirSinArgumentos();
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();

    //this.router.navigate(['/administrar-cultivos']);

    console.log("SALIENDO")
  }

 
}
