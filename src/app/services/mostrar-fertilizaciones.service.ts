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
    return this.http.post(this.url + 'fertilizaciones.php', {}, {});
  }

  insertarFertilizaciones( fertilizaciones:any): Promise<any> {
    return this.http.post(this.url + 'fertilizaciones-insert.php', fertilizaciones, {});
  }

  borrarFertilizaciones(fertilizaciones:any): Promise<any> {
    return this.http.post(this.url + 'fertilizaciones-delete.php', fertilizaciones, {});
  }

  editarFertilizaciones(fertilizaciones:any): Promise<any> {
    return this.http.post(this.url + 'fertilizaciones-update.php', fertilizaciones, {});
  }



}
