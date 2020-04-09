import { AlertController } from '@ionic/angular';
import { Alerts } from './../../models/alerts';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  providers: [UserService],
})
export class RegistroPage implements OnInit {
  image = new Image();
  user:User;
  alertas:Alerts;
  confirmarContrasena:string;
  regexp:RegExp;

  constructor(
    private router:Router,
    private alertController:AlertController,
    private userService:UserService,
    public toastController:ToastController,
  ) { 
    this.image.src = "../../assets/icon/logo.png";
    this.user = new User('','','');
    this.alertas = new Alerts(toastController,alertController);
    
  }

  ngOnInit() {
  }



  registro(){
    this.userService.registro(this.user)
    .then(response =>{
      console.log(response);
        let data = JSON.parse(response.data);

        if(data.result == 'success'){
          this.user.correo = '';
          this.user.usuario = '';
          this.user.password = '';
          this.confirmarContrasena = '';
          this.alertas.toast('Exito','Usuario registrado con exito');
          this.router.navigateByUrl('/home');
        }else{
          console.log(data.message);
        }
      }
    )
    .catch(error=>{
      this.alertas.showAlert('Error','Ha ocurrido un error '+error);
    })
  }

  correoDisponible(){
    this.userService.correoDisponible(this.user)
    .then(
      response =>
      {
        let data = JSON.parse(response.data);
        let correo = data.result;
        if(correo == 'success'){
          this.alertas.toast('Correo no disponible','Ya existe un correo asociado a una cuenta')
          return;
        }
      }
    ).
    catch(error=>{
        this.alertas.showAlert('Error','Ha ocurrido un error '+error);
      return;
    });
  }

  usuarioDisponible(){
    this.userService.usuarioDisponible(this.user)
    .then(
      response =>
      {
        let data = JSON.parse(response.data);
        let correo = data.result;
        if(correo == 'success'){
          this.alertas.toast('Usuario no disponible','Ya existe un usuario con este nombre')
          return;
        }
      }
    )
    .catch(error=>{
      this.alertas.showAlert('Error','Ha ocurrido un error '+error);
      return;
    });
  }

  esCorreo(search:string):boolean
    {
        var serchfind:boolean;
        this.regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        serchfind = this.regexp.test(search);
        return serchfind
    }

  onSubmitCorreo(){
    if(this.user.correo.trim().length == 0){
      this.alertas.toast('Campo vacío','Ingrese un correo electrónico');
      return;
    }
    
    if(this.esCorreo(this.user.correo) == false){
      this.alertas.toast('No es un correo','Ingrese correo valido');
      return;
    }
    this.correoDisponible();
    if(this.user.usuario.trim().length == 0){
      this.alertas.toast('Campo vacío','Ingrese nombre de usuario');
      return;
    }
    this.usuarioDisponible();
    if(this.user.password.trim().length == 0){
      this.alertas.toast('Campo vacío','Ingrese contraseña');
      return;
    }
    if(this.user.password.trim().length < 6){
      this.alertas.toast('Contraseña debil','La contraseña debe tener más de 6 carácteres');
      return;
    }
    if(this.user.password != this.confirmarContrasena){
      this.alertas.toast('Contraseñas distintas','Las contraseñas no son iguales, compruebe y vuelva a intentar');
      return;
    }
    this.registro();
  }


  irLogin(){
    this.user.usuario='';
    this.user.password='';
    this.user.correo='';
    this.router.navigateByUrl('/home');
  }

  

}
