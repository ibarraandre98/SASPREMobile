import { environment } from './../../../environments/environment';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    private router:Router
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
    );
  }
  
}
