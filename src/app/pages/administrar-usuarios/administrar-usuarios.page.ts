import { environment } from './../../../environments/environment';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MostrarUsuariosService } from 'src/app/services/mostrar-usuarios-service';


@Component({
  selector: 'app-administrar-usuarios',
  templateUrl: './administrar-usuarios.page.html',
  styleUrls: ['./administrar-usuarios.page.scss'],
  providers:[MostrarUsuariosService]
})
export class AdministrarUsuariosPage  {

  constructor(
    public mostrarCosechasService:MostrarUsuariosService,
    private router:Router,
    private alertController:AlertController,
  ) {

  }
  ngOnInit()
   {
    this.mostrarUsuarios();
  }

  private usuario={
    idCargo:'1',
    idEmpresa:'1',
    nombre:'miguel',
    apellido:'gonzalez',
    contra:'miguel12',
    nickname:'perros123',
    correo:'migueglez98@gmail.com'
  }
  

  private usuarioupdate={
    idUsuario:'6',
    idCargo:'1',
    idEmpresa:'1',
    nombre:'miguel',
    apellido:'gonzalez',
    contra:'miguel12',
    nickname:'perros123',
    correo:'migueglez98@gmail.com'
  }

  private usuariodelete={
    idUsuario:'6'   
  }

  mostrarUsuarios(){
    this.mostrarCosechasService.mostrarUsuarios()
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

  
  insertUsuarios() {
    this.mostrarCosechasService.insertusuarios(this.usuario)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.usuario.idCargo = '';
          this.usuario.idEmpresa = '';
          this.usuario.nombre='';
          this.usuario.apellido = '';
          this.usuario.contra ='';
          this.usuario.nickname ='';
          this.usuario.correo ='';

         
          this.router.navigateByUrl('/menu');
        } else {
          console.log(data.message);
        }
      }
      )
      .catch(error => {
        this.showAlert('Error', 'Ha ocurrido un error ' + error);
      })
  }

  updateCostos() {
    this.mostrarCosechasService.updateUsuarios(this.usuarioupdate)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.usuarioupdate.idUsuario = '';
          this.usuarioupdate.idCargo = '';
          this.usuarioupdate.idEmpresa = '';
          this.usuarioupdate.nombre='';
          this.usuarioupdate.apellido = '';
          this.usuarioupdate.contra ='';
          this.usuarioupdate.nickname ='';
          this.usuarioupdate.correo ='';

          this.router.navigateByUrl('/menu');
        } else {
          console.log(data.message);
        }
      }
      )
      .catch(error => {
        this.showAlert('Error', 'Ha ocurrido un error ' + error);
      })
  }

  deleteCostos() {
    this.mostrarCosechasService.deleteUsuarios(this.usuariodelete)
      .then(response => {
        console.log(response);
        let data = JSON.parse(response.data);

        if (data.result == 'success') {
          this.usuariodelete.idUsuario = '';

          this.router.navigateByUrl('/menu');
        } else {
          console.log(data.message);
        }
      }
      )
      .catch(error => {
        this.showAlert('Error', 'Ha ocurrido un error ' + error);
      })
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