import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { global } from './global';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlarmasService {
  url: string;
  constructor(
    public http: HTTP,
  ) {
    this.url = global.url;
  }

  mostrarAlarmas(): Promise<any> {
    return this.http.post(this.url + "alarma.php", {}, {});
  }

  insertAlarma(datos: any): Promise<any> {
    return this.http.post(this.url + 'alarma-insert.php', datos, {});
  }

  updateAlarma(datos: any): Promise<any> {
    return this.http.post(this.url + 'alarma-update.php', datos, {});
  }

  deleteAlarma(datos: any): Promise<any> {
    return this.http.post(this.url + 'alarma-delete.php', datos, {});
  }
}

