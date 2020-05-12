import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { global } from './global';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CultivosService {
  url: string;
  constructor(
    public http: HTTP,
  ) {
    this.url = global.url;
  }

  mostrarCultivos(): Promise<any> {
    return this.http.post(this.url + "cultivos.php", {}, {});
  }

  insertCultivos(datos: any): Promise<any> {
    return this.http.post(this.url + 'cultivos-insert.php', datos, {});
  }

  updateCultivos(datos: any): Promise<any> {
    return this.http.post(this.url + 'cultivos-update.php', datos, {});
  }

  deleteCultivos(datos: any): Promise<any> {
    return this.http.post(this.url + 'cultivos-delete.php', datos, {});
  }
}
