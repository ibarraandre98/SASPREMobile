import { environment } from './../../../environments/environment';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController, ModalController } from '@ionic/angular';
import { MostrarUsuariosService } from 'src/app/services/mostrar-usuarios-service';
import { PopUsuariosComponent } from 'src/app/components/pop-usuarios/pop-usuarios.component';
import { PopInsecticidasComponent } from 'src/app/components/pop-insecticidas/pop-insecticidas.component';
import { AdministrarUsuariosEditarPage } from '../administrar-usuarios-editar/administrar-usuarios-editar.page';


@Component({
  selector: 'app-administrar-usuarios',
  templateUrl: './administrar-usuarios.page.html',
  styleUrls: ['./administrar-usuarios.page.scss'],
  providers:[MostrarUsuariosService]
})
export class AdministrarUsuariosPage  {

  arrayUsuarios:any;

  constructor(
    public mostrarCosechasService:MostrarUsuariosService,
    private router:Router,
    private alertController:AlertController,
    private popCtrl: PopoverController,
    private modalCtrl: ModalController
  ) {
    this.mostrarUsuarios();
  }
  ngOnInit()
   {

  }

   async mostrarPopInfo(usuario:any) {
    const popover = await this.popCtrl.create({
      component: PopUsuariosComponent,
      componentProps:{
        usuario,
      },
      mode: 'md',
      backdropDismiss: true,
      translucent: true
    });
    return await popover.present();
  }

  mostrarUsuarios(){
    this.mostrarCosechasService.mostrarUsuarios()
    .then(response => {

        console.log('Response recieved:');
        console.log(response);

        let data = JSON.parse(response.data)
        console.log(data);
        let datosUsuario = data.data;
        if(data.resultado == 'failed'){
          console.log('Cosechas no mostradas');
          this.showAlert('Error','Cosechas no mostradas');
        }else if(data.resultado =='success'){
          this.arrayUsuarios = datosUsuario;
        }
      }
    ).catch(error =>{
      this.showAlert('Error',JSON.stringify(error));
    });
  }

  buscar( event ){
    //this.textoBuscar = evento.detail.value;
    console.log('Se esta buscando en el filtro:');
    console.log(event.detail.value);
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