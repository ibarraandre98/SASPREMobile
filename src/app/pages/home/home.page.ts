import { environment } from './../../../environments/environment';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [UserService]
})
export class HomePage {
  image = new Image();
  user: User;
  constructor(
    public userService:UserService,
    private router:Router,
    private alertController:AlertController,
  ) {
    this.image.src = "../../assets/icon/logo.png";
    this.user = new User('','');
  }

  login(){
    this.userService.login(this.user)
    .then(response => {

        console.log('Response recieved:');
        console.log(response);

        let data = JSON.parse(response.data)
        console.log(data);
        let datosUsuario = data.data;
        if(data.result == 'failed'){
          console.log('Error contraseña o usuario incorrecto');
          this.showAlert('Error','Usuario o contraseña incorrecta');
        }else if(data.result=='success'){
          console.log('Login exitoso');
          environment.idUsuario = datosUsuario.idUsuario;
          environment.idCargo = datosUsuario.idCargo;
          environment.idEmpresa = datosUsuario.idEmpresa;
          environment.nombre = datosUsuario.nombre;
          environment.apellidos = datosUsuario.apellidos;
          environment.nombreUsuario = datosUsuario.nickname;
          environment.correo = datosUsuario.correo;
          console.log(environment);
          this.router.navigateByUrl('/menu');
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
