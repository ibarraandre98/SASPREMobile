import { AppComponent } from './../../app.component';
import { User } from './../../models/user';
import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';


=======
import {Router} from '@angular/router';
>>>>>>> origin/OscarV3
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(
    private router: Router,
    private appComponent: AppComponent,
  ) {

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

<<<<<<< HEAD
  irLogin() {
    this.appComponent.menuActivo = false;
    this.limpiarEnvironment();
    this.router.navigateByUrl('/home');
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

=======
  constructor(private router:Router) { }

  ngOnInit() {}
openInsecticidas(){
  this.router.navigate(['/insecticidas']);
}
openHistorialplagas(){
  this.router.navigate(['/historialplagas']);
}
>>>>>>> origin/OscarV3
}
