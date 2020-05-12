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
    return this.http.post(this.url + 'fertilizantes.php', {}, {});
  }

  insertarFertilizantes( fertilizante:any): Promise<any> {
    return this.http.post(this.url + 'fertilizantes-insert.php', fertilizante, {});
  }

  borrarFertilizantes(fertilizante:any): Promise<any> {
    return this.http.post(this.url + 'fertilizantes-delete.php', fertilizante, {});
  }

  editarFertilizantes(fertilizante:any): Promise<any> {
    return this.http.post(this.url + 'fertilizantes-update.php', fertilizante, {});
  }

}
