import { FormBuilder, Validators } from '@angular/forms';
import { Alerts } from './../../models/alerts';
import { AppComponent } from './../../app.component';
import { environment } from './../../../environments/environment';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [UserService]
})
export class HomePage  {
  image = new Image();
  user: User;
  alertas:Alerts;
  clima;
  Temperatura;

  loginForm = this.formBuilder.group({
    usuario:['',[
      Validators.required,
    ]],
    password:['',[
      Validators.required,
    ]],
  });

  constructor(
    public userService:UserService,
    private router:Router,
    private appComponent:AppComponent,
    private alertController:AlertController,
    private toastController:ToastController,
    private formBuilder:FormBuilder,
  ) {
    this.image.src = "../../assets/icon/logo.png";
    this.user = new User('','','');
    this.alertas = new Alerts(toastController,alertController);
  }

  get usuario(){
    return this.loginForm.get('usuario');
  }

  get password(){
    return this.loginForm.get('password');
  }

  public errorMessages = {
    usuario:[ 
      {type:'required',message:'El usuario es requerido'}
    ],
    password:[
      {type:'required',message:'La contraseña es requerida'}
    ]
    
  }
 
  login(){
    this.user.usuario = this.loginForm.value.usuario;
    this.user.password = this.loginForm.value.password;
    if(this.user.usuario==''){
      this.alertas.toast('Campo vacío','Ingrese su usuario');
      return;
    }
    if(this.user.password==''){
      this.alertas.toast('Campo vacío','Ingrese su contraseña');
      return;
    }
    this.userService.login(this.user)
    .then(response => {

        console.log('Response recieved:');
        console.log(response);

        let data = JSON.parse(response.data)
        console.log(data);
        let datosUsuario = data.data;
        if(data.result == 'failed'){
          this.alertas.toast('Error','Usuario o contraseña incorrecta');
        }else if(data.result=='success'){
          this.alertas.toast('Exito','Logueado con exito');
          environment.idUsuario = datosUsuario.idUsuario;
          environment.idCargo = datosUsuario.idCargo;
          environment.idEmpresa = datosUsuario.idEmpresa;
          environment.nombre = datosUsuario.nombre;
          environment.apellidos = datosUsuario.apellidos;
          environment.nombreUsuario = datosUsuario.nickname;
          environment.correo = datosUsuario.correo;
          this.limpiarUsuario();
          this.appComponent.menuActivo = true;
          this.router.navigateByUrl('/menu');
        }
      }
    ).catch(error =>{
      this.alertas.showAlert('Error',JSON.stringify(error));
    });
  }

  irRegistro(){
    this.limpiarUsuario();
    this.router.navigateByUrl('/registro');
  }
  limpiarUsuario(){
    this.user.usuario='';
    this.user.password='';
    this.user.correo='';
  }

  irRecuperarPassword(){
    this.router.navigateByUrl('recuperar-pass');
  }
}
