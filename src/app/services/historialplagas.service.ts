import { HTTP } from '@ionic-native/http/ngx';
import { global } from './global';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistorialplagasService {
  url: string;
  constructor(
    public http: HTTP,
  ) {
    this.url = global.url;
  }

  historialplagasSelect(): Promise<any> {
    return this.http.post(this.url+"historialplagas-select.php",{},{});
    
  }
  insertHistorialplagas(datos: any): Promise<any> {
    return this.http.post(this.url + 'insecticidas-insert.php', datos, {});
  }

  updateHistorialplagas(datos: any): Promise<any> {
    return this.http.post(this.url + 'insecticidas-update.php', datos, {});
  }

  deleteHistorialplagas(datos: any): Promise<any> {
    return this.http.post(this.url + 'insecticidas-delete.php', datos, {});
  }

}