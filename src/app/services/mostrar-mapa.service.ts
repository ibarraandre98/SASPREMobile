import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { global } from './global';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MostrarMapaService {
  url: string;
  constructor(
    public http: HTTP,
  ) {
    this.url = global.url;
  }

  mostrarMapa(): Promise<any> {
    // let headers = new HttpHeaders().set('Content-Type', 'applicaction/x-www-form-urllencoded');
    return this.http.post(this.url + 'mapa.php', {}, {});

    // return this.http.post(this.url + "alarmas.php", {}, { headers: headers });
  }

  insertarMapa(): Promise<any> {
    // let headers = new HttpHeaders().set('Content-Type', 'applicaction/x-www-form-urllencoded');
    return this.http.post(this.url + 'mapa.php', {}, {});

    // return this.http.post(this.url + "alarmas.php", {}, { headers: headers });
  }

  borrarMapa(): Promise<any> {
    // let headers = new HttpHeaders().set('Content-Type', 'applicaction/x-www-form-urllencoded');
    return this.http.post(this.url + 'mapa.php', {}, {});

    // return this.http.post(this.url + "alarmas.php", {}, { headers: headers });
  }

  editarMapa(): Promise<any> {
    // let headers = new HttpHeaders().set('Content-Type', 'applicaction/x-www-form-urllencoded');
    return this.http.post(this.url + 'mapa.php', {}, {});

    // return this.http.post(this.url + "alarmas.php", {}, { headers: headers });
  }
}
