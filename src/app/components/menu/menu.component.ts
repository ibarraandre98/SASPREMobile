import { HomePage } from './../../pages/home/home.page';
import { AppComponent } from './../../app.component';
import { User } from './../../models/user';
import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {NavController} from '@ionic/angular';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  image = new Image();
  imgPerfil = new Image();
  homePage:HomePage;
  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private location:Location,
    public menuController:MenuController,
  ) 
  {
    this.image.src = '../../assets/icon/logo.png';
    this.imgPerfil.src = '../../assets/icon/user.svg';
    
  }

  ngOnInit() { }

  menu() {
    this.router.navigate(['/menu']);
  }
  fertilizaciones() {
    this.router.navigate(['/fertilizaciones']);
  }

  fertilizantes() {
    this.router.navigate(['/fertilizantes']);
  }

  mapa() {
    this.router.navigate(['/mapa']);
  }

  openAlarmas() {
    this.router.navigate(['/alarmas']);
  }

  openCalendarioActividades() {
    this.router.navigate(['/calendario-actividades']);
  }

  openCostos() {
    this.router.navigate(['/costos']);
  }

  cosechas() {
    this.router.navigateByUrl('/administrar-cosechas');
  }
  usuarios() {
    this.router.navigateByUrl('/administrar-usuarios');
  }

  irLogin() {
    this.menuController.close();
    setTimeout(() => 
      {
        this.appComponent.menuActivo = false;
        this.router.navigateByUrl('/home');
      },1000);
    this.limpiarEnvironment();
  }

  limpiarEnvironment() {
    environment.nombreUsuario = '';
    environment.idUsuario = '';
    environment.idCargo = '';
    environment.idEmpresa = '';
    environment.nombre = '';
    environment.apellidos = '';
    environment.correo = '';
  }

  openInsecticidas(){
  this.router.navigate(['/insecticidas']);
  }
  openHistorialplagas(){
  this.router.navigate(['/historialplagas']);
  }
}
