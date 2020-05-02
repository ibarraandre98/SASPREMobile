import { FormBuilder,Validators } from '@angular/forms';
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
  registerForm = this.formBuilder.group({
    correo:['',[
      Validators.required,
      Validators.email,
      //Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    ]],
    usuario:['',[
      Validators.required,
    ]],
    password:['',[
      Validators.required,
      Validators.pattern(/^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/),
    ]],
    cpassword:['',[
      Validators.required,
    ]],
  });

  constructor(
    private router:Router,
    private alertController:AlertController,
    private userService:UserService,
    public toastController:ToastController,
    private formBuilder:FormBuilder,
  ) { 
    this.image.src = "../../assets/icon/logo.png";
    this.user = new User('','','');
    this.alertas = new Alerts(toastController,alertController);
    
  }

  ngOnInit(){

  }

  get correo(){
    return this.registerForm.get('correo');
  }

  get usuario(){
    return this.registerForm.get('usuario');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get cpassword(){
    return this.registerForm.get('cpassword');
  }

  public errorMessages = {
    correo:[{
      type:'required',
      message:'El correo es requerido',
      },{
        type:'email',
        message:'No es una dirección de correo electrónico válida',
      }],
    usuario:[{
      type:'required',
      message:'El usuario es requerido',
    }],
    password:[{
      type:'required',
      message:'La contraseña es requerida',
    },{
      type:'pattern',
      message:'La contraseña debe tener por lo menos 6 digitos y un número',
    }],
    cpassword:[{
      type:'required',
      message:'Necesita confirmar su contraseña'
    }],
  };

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
    console.log(this.user);
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
    this.user.correo = this.registerForm.value.correo;
    this.user.usuario = this.registerForm.value.usuario;
    this.user.password = this.registerForm.value.password;
/*     if(this.user.correo.trim().length == 0){
      this.alertas.toast('Campo vacío','Ingrese un correo electrónico');
      return;
    }
    
    if(this.esCorreo(this.user.correo) == false){
      this.alertas.toast('No es un correo','Ingrese correo valido');
      return;
    } */
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
    /* if(this.user.password.trim().length < 6){
      this.alertas.toast('Contraseña debil','La contraseña debe tener más de 6 carácteres');
      return;
    } */
    if(this.user.password != this.registerForm.value.cpassword){
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
