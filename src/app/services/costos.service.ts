import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { global } from './global';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CostosService {
  url: string;
  constructor(
    public http: HTTP,
  ) {
    this.url = global.url;
  }

  mostrarCostos(): Promise<any> {
    return this.http.post(this.url + "costos.php", {}, {});
  }

  insertCostos(datos: any): Promise<any> {
    return this.http.post(this.url + 'costos-insert.php', datos, {});
  }

  updateCostos(datos: any): Promise<any> {
    return this.http.post(this.url + 'costos-update.php', datos, {});
  }

  deleteCostos(datos: any): Promise<any> {
    return this.http.post(this.url + 'costos-delete.php', datos, {});
  }
}
