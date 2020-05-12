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
    this.closeMenu();
  }
  openFertilizaciones() {
    this.router.navigate(['/fertilizaciones']);
    this.closeMenu();
  }

  openFertilizantes() {
    this.router.navigate(['/fertilizantes']);
    this.closeMenu();
  }

  openMapa() {
    this.router.navigate(['/mapa']);
    this.closeMenu();
  }

  openAlarmas() {
    this.router.navigate(['/alarmas']);
    this.closeMenu();
  }

  openCalendarioActividades() {
    this.router.navigate(['/calendario-actividades']);
    this.closeMenu();
  }

  openCostos() {
    this.router.navigate(['/costos']);
    this.closeMenu();
  }

  openCosechas() {
    this.router.navigate(['/administrar-cosechas']);
    this.closeMenu();
  }
  openUsuarios() {
    this.router.navigate(['/administrar-usuarios']);
    this.closeMenu();
  }

  irLogin() {
    this.menuController.close();
    setTimeout(() => 
      {
        this.appComponent.menuActivo = false;
        this.router.navigate(['/home']);
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
  this.closeMenu();
  }
  openHistorialplagas(){
  this.router.navigate(['/historialplagas']);
  this.closeMenu();
  }

  openCultivos(){
    this.router.navigate(['/administrar-cultivos']);
    this.closeMenu();
  }

  closeMenu(){
    this.menuController.close();
  }
}
