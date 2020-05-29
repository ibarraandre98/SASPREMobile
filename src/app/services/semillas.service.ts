import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { global } from './global';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SemillasService {
  url: string;
  constructor(
    public http: HTTP,) { 
      this.url = global.url;
    }

  mostrarIdSemillas(): Promise<any> {
    return this.http.post(this.url + "select-semillas.php", {}, {});
  }
}
