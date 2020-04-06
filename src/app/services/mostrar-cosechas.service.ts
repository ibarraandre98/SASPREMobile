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


}