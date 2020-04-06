import { environment } from './../../../environments/environment';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MostrarCosechasService } from 'src/app/services/mostrar-cosechas.service';


@Component({
  selector: 'app-administrar-cosechas',
  templateUrl: './administrar-cosechas.page.html',
  styleUrls: ['./administrar-cosechas.page.scss'],
  providers:[MostrarCosechasService]
})
export class AdministrarCosechasPage  {

  constructor(
    public mostrarCosechasService:MostrarCosechasService,
    private router:Router,
    private alertController:AlertController,
  ) {

  }
  ngOnInit()
   {
    this.mostrarCosechas();
  }


  mostrarCosechas(){
    this.mostrarCosechasService.mostrarCosechas()
    .then(response => {

        console.log('Response recieved:');
        console.log(response);

        let data = JSON.parse(response.data)
        console.log(data);
        let datosUsuario = data.data;
        if(data.result == 'failed'){
          console.log('Cosechas no mostradas');
          this.showAlert('Error','Cosechas no mostradas');
        }else if(data.result=='success'){
          console.log('Cosechas mostradas');
        }
      }
    ).catch(error =>{
      this.showAlert('Error',JSON.stringify(error));
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


  }