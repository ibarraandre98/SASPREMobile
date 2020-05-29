import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { Alerts } from './../../models/alerts';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Form, Validators} from '@angular/forms';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
  providers: [UserService],
})
export class RecuperarPassPage implements OnInit {
  image = new Image();
  correo:string;
  alertas:Alerts;
  disableButton:Boolean;
  regexp:RegExp;
  recoverForm = this.formBuilder.group({
    correo: ['',
      [
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      ]
    ],
  });
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private toastController:ToastController,
    private alertController:AlertController,
    private router:Router,
  ) {
    this.image.src = "../../assets/icon/logo.png";
    this.alertas = new Alerts(toastController,alertController);
    this.disableButton=false;
   }

  ngOnInit() {
  }

  recuperar(){
    if(this.recoverForm.value.correo==''){
      this.alertas.toast('Error','Debe llenar el campo');
      return;
    }
    if(this.esCorreo(this.recoverForm.value.correo) == false){
      this.alertas.toast('No es un correo','Ingrese correo valido');
      return;
    }
      this.disableButton = true;
      this.correoDisponible();
    
  }

  get email(){
    return this.recoverForm.get('correo');
  }

  public errorMessages = {
    correo:[
      {type: 'required', message:'Correo es necesario'},
      {type: 'pattern', message: 'Ingrese una dirección de correo válida'}
    ]
  }

  esCorreo(search:string):boolean
    {
        var serchfind:boolean;
        this.regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        serchfind = this.regexp.test(search);
        return serchfind
    }

  correoDisponible(){
    this.userService.correoDisponible(this.recoverForm.value)
    .then(
      response =>
      {
        let data = JSON.parse(response.data);
        let correo = data.result;
        let datos = data.data;
        console.log(datos);
        if(datos == null){
          this.alertas.toast('Cuenta no existente','No existe un correo asociado a esta cuenta')
          this.disableButton = false;
          return;
        }
        else
        {
          this.userService.recuperarContraseña(this.recoverForm.value)
          .then(
          response => 
          {
            let data = JSON.parse(response.data);
            let resultado = data.result;
            this.alertas.toast('Exito',resultado);
            this.recoverForm.setValue({
              correo:'',
            });
            
            this.disableButton = false;
            this.router.navigate(['/home']);
          }).catch(
            error =>
            {
              this.alertas.showAlert('Error','Ha ocurrido un error '+error);
            });
          }
    }
    ).
    catch(error=>{
        this.alertas.showAlert('Error','Ha ocurrido un error '+error);
      return;
    });
  }

}
