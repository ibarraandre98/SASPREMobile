import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { global } from './global';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MostrarFertilizantesService {
  url: string;
  constructor(
    public http: HTTP,
  ) {
    this.url = global.url;
  }

  mostrarFertilizantes(): Promise<any> {
    // let headers = new HttpHeaders().set('Content-Type', 'applicaction/x-www-form-urllencoded');
    return this.http.post(this.url + 'fertilizantes.php', {}, {});

    // return this.http.post(this.url + "alarmas.php", {}, { headers: headers });
}}
