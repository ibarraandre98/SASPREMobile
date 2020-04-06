import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AppComponent} from './../../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  clima;
  temperatura;
  humedad;
  descripcion;
  constructor(
    private appcomponent:AppComponent,
    public router:Router,
  ) { }

  ngOnInit() {
    this.appcomponent.DatosAtmosfericos()
    .subscribe(res => {console.log(res);
     this.clima=res;
     this.temperatura=this.kelvin_celsius(this.clima.main.temp);
     this.humedad=this.clima.main.humidity;
     this.descripcion=this.clima.weather;
     console.log(this.descripcion);
   },err => console.log(err));
  }
  kelvin_celsius(entrada) {
    var temp_entrada=Math.round(parseFloat(entrada)-273.15);
    return temp_entrada;
   }


}
