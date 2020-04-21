import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { global } from './global';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarioActividadesService {
  url: string;
  constructor(
    public http: HTTP,
  ) { 
    this.url = global.url;
  }

  mostrarCalendarioActividades(): Promise<any>{
    return this.http.post(this.url+"calendario-actividades.php",{},{});
  }

  insertCalendarioActividades(datos: any): Promise<any> {
    return this.http.post(this.url + 'calendario-actividades-insert.php', datos, {});
  }

  updateCalendarioActividades(datos: any): Promise<any> {
    return this.http.post(this.url + 'calendario-actividades-update.php', datos, {});
  }

  deleteCalendarioActividades(datos: any): Promise<any> {
    return this.http.post(this.url + 'calendario-actividades-delete.php', datos, {});
  }
}
