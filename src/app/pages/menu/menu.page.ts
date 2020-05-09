import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AppComponent} from './../../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  date;
  clima;
  temperatura;
  humedad;
  descripcion;
  temperaturaMax;
  temperaturaMin;
  sensacion;
  icono;
  descripcionMain;
  ciudad;
  logoIcono = new Image();

  constructor(
    private appcomponent:AppComponent,
    public router:Router,
  ) { 
    this.date = new Date();
  }

  ngOnInit() {
    this.actualizarFechaHora();
    this.obtenerDatosClima();
  }


  kelvin_celsius(entrada) {
    var temp_entrada=Math.round(parseFloat(entrada)-273.15);
    return temp_entrada;
   }

   obtenerDatosClima(){
    this.appcomponent.DatosAtmosfericos()
    .subscribe(res => {
    console.log(res);
     this.clima=res;
     this.ciudad = this.clima.name;
     console.log(this.ciudad);
     this.temperatura = this.kelvin_celsius(this.clima.main.temp);
     this.temperaturaMax = this.kelvin_celsius(this.clima.main.temp_max);
     this.temperaturaMin = this.kelvin_celsius(this.clima.main.temp_min);
     this.sensacion = this.kelvin_celsius(this.clima.main.feels_like);
     this.humedad=this.clima.main.humidity;
     for(let dat of this.clima.weather){
       this.descripcion =  dat.description;
       this.descripcionMain = dat.main;
       this.icono = dat.icon;
     }
     if(this.descripcion=='broken clouds' || this.descripcion == 'overcast clouds')
      this.logoIcono.src = "../../assets/icon/vectores/nubladoBlanco.png";
     if(this.descripcion == 'scattered clouds')
      this.logoIcono.src = "../../assets/icon/vectores/parcialmenteNubladoBlanco.png";
   },
   err => console.log(err));
   }

   actualizarFechaHora(){
    setInterval(function(){
      this.date = new Date();
    }.bind(this), 1000);
   }

}
