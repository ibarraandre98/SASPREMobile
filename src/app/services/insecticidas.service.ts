import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { global } from './global';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InsecticidasService {
  url: string;
  constructor(
    public http: HTTP,
  ) {
    this.url = global.url;
  }

  selectInsecticidas(): Promise<any> {
    return this.http.post(this.url+"insecticidas.php",{},{});
    
  }

  insertInsecticidas(datos: any): Promise<any> {
    return this.http.post(this.url + 'insecticidas-insert.php', datos, {});
  }

  updateInsecticidas(datos: any): Promise<any> {
    return this.http.post(this.url + 'insecticidas-update.php', datos, {});
  }

  deleteInsecticidas(datos: any): Promise<any> {
    return this.http.post(this.url + 'insecticidas-delete.php', datos, {});
  }
}