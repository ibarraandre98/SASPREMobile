import { global } from './global';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class MostrarCosechasService {
  url:string;
  constructor(
    public http:HTTP,
  ) {
    this.url = global.url;
   }

   mostrarCosechas():Promise<any>{
    return this.http.post(this.url+"cosecha.php",{},{});
  }

  private cosechas = {
    idCosecha:'',
    idCultivos:'',
  }
  insertcosechas(cosechas:any):Promise<any>{
    return this.http.post(this.url+"cosechas-insert.php",cosechas,{});
  }

  updateCosechas(cosechas: any): Promise<any> {
    return this.http.post(this.url + 'cosechas-update.php', cosechas, {});
  }

  deleteCosechas(cosechas: any): Promise<any> {
    return this.http.post(this.url + 'cosechas-delete.php', cosechas, {});
  }


}