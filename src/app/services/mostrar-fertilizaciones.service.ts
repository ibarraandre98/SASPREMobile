import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { global } from './global';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MostrarFertilizacionesService {
  url: string;
  constructor(
    public http: HTTP,
  ) {
    this.url = global.url;
  }

  mostrarFertilizaciones(): Promise<any> {
    // let headers = new HttpHeaders().set('Content-Type', 'applicaction/x-www-form-urllencoded');
    return this.http.post(this.url + 'fertilizaciones.php', {}, {});

    // return this.http.post(this.url + "alarmas.php", {}, { headers: headers });
  }

  

  insertarFertilizaciones( fertilizaciones:any): Promise<any> {
    // let headers = new HttpHeaders().set('Content-Type', 'applicaction/x-www-form-urllencoded');
    return this.http.post(this.url + 'fertilizaciones-insert.php', fertilizaciones, {});

    // return this.http.post(this.url + "alarmas.php", {}, { headers: headers });
  }



  borrarFertilizaciones(): Promise<any> {
    // let headers = new HttpHeaders().set('Content-Type', 'applicaction/x-www-form-urllencoded');
    return this.http.post(this.url + 'fertilizaciones-delete.php', {}, {});

    // return this.http.post(this.url + "alarmas.php", {}, { headers: headers });
  }


  editarFertilizaciones(): Promise<any> {
    // let headers = new HttpHeaders().set('Content-Type', 'applicaction/x-www-form-urllencoded');
    return this.http.post(this.url + 'fertilizaciones-update.php', {}, {});

    // return this.http.post(this.url + "alarmas.php", {}, { headers: headers });
  }



}
