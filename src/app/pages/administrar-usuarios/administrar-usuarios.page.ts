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

  constructor(
    public mostrarCosechasService:MostrarUsuariosService,
    private router:Router,
    private alertController:AlertController,
    private popCtrl: PopoverController,
    private modalCtrl: ModalController
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


   async mostrarPopInfo() {
    const popover = await this.popCtrl.create({
      component: PopUsuariosComponent,
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

  buscar( event ){
    //this.textoBuscar = evento.detail.value;
    console.log('Se esta buscando en el filtro:');
    console.log(event.detail.value);
  }

  async mostrarPop( evento ) {
    const popover = await this.popCtrl.create({
      component: PopInsecticidasComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: true,
      translucent: true
    });
    await popover.present();

    const {data} = await popover.onDidDismiss(); //Para recibir los datos cuando se cierre el pop
    // const {data} = await popover.onWillDismiss();  Para que se dispare rápido sin esperar que e cierre el pop

    for (var clave in data){
      // Controlando que json realmente tenga esa propiedad
      if (data.hasOwnProperty(clave)) {
        // Mostrando en pantalla la clave junto a su valor
        console.log("La clave es " + clave+ " y el valor es " + data[clave]);

        if( data[clave] ==  "Editar"){
          this.editarUsuario();
        }else if( data [clave] == "Borrar"){
          this.borrarUsuario();
        }

      }

    }

    console.log('Padre:', data);

  }


  async editarUsuario(){
    const modal = await this.modalCtrl.create({
      component: AdministrarUsuariosEditarPage,
      componentProps:{
        nombre: 'nombre',
        apellidos: 'apellidos',
        usuario: 'usuario',
        correo: 'correo',
        contraseña:'contraseña',
        cargo:'cargo',
        empresa: 'empresa'
      }
    });

    await modal.present();


    const {data} = await modal.onDidDismiss();

    console.log("Retorno del modal", data);
  }

  borrarUsuario(){
    console.log("Se ha borrado un usuario");
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