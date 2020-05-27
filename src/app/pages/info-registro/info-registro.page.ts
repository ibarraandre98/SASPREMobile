import { AppComponent } from './../../app.component';
import { UserInfoService } from './../../services/user-info.service';
import { AlertController,ToastController } from '@ionic/angular';
import { environment } from './../../../environments/environment';
import { RouterModule } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Alerts } from './../../models/alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-registro',
  templateUrl: './info-registro.page.html',
  styleUrls: ['./info-registro.page.scss'],
})
export class InfoRegistroPage implements OnInit {

  alertas:Alerts;
  infoFormJSON;
  infoForm = this.formBuilder.group({
    idUsuario:[''],
    nombre:['',[
      Validators.required,
    ]],
    apellidos:['',[
      Validators.required,
    ]],
  });

  user = {
    idUsuario:'',
    nombre: '',
    apellidos:'',
  }

  constructor(
    private alertController:AlertController,
    private toastController:ToastController,
    private formBuilder:FormBuilder,
    private router:Router,
    private userInfoService:UserInfoService,
    private appComponent:AppComponent,
  ) {
    this.alertas = new Alerts(this.toastController,this.alertController);
   }
 
   get nombre(){
     return this.infoForm.get('nombre');
   }

   get apellidos(){
     return this.infoForm.get('apellidos');
   }

   public errorMessages = {
    nombre:[{
      type:'required',
      message:'El nombre es requerido',
    }],
    apellidos:[{
      type:'required',
      message:'Los apellidos son requeridos',
    }],
   }

  ngOnInit() {
  }

  registrar(){
    this.infoForm.value.idUsuario = environment.idUsuario;
    this.user.idUsuario = this.infoForm.value.idUsuario;
    this.user.nombre = this.infoForm.value.nombre;
    this.user.apellidos = this.infoForm.value.apellidos;

    console.log(this.user);
    this.userInfoService.insertarInfo(this.user)
    .then(response =>{
      let data = JSON.parse(response.data);
      let datos = data.data_select;
      for(var val of datos){
        environment.idCargo = val.idCargo;
        environment.idEmpresa = val.idEmpresa;
      }
      environment.nombre = this.user.nombre;
      environment.apellidos = this.user.apellidos;
      this.alertas.toast('Exito','Datos agregados exitosamente');
      this.appComponent.menuActivo = true;
      this.router.navigateByUrl('/menu');
    })
    .catch(error =>{
      this.alertas.showAlert('Error',JSON.stringify(error));
    }); 
  }
}
