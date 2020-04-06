import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

<<<<<<< HEAD

  fertilizaciones() {
    this.router.navigate(['/fertilizaciones']);
  }

  fertilizantes() {
    this.router.navigate(['/fertilizantes']);
  }

  mapa() {
    this.router.navigate(['/mapa']);
  }

=======
  openAlarmas() {
    this.router.navigate(['/alarmas']);
  }

  openCalendarioActividades() {
    this.router.navigate(['/calendario-actividades']);
  }

  openCostos() {
    this.router.navigate(['/costos']);
  }
>>>>>>> origin/OsielV1
}
