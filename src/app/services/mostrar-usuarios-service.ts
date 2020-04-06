import { global } from './global';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class MostrarUsuariosService {
  url:string;
  constructor(
    public http:HTTP,
  ) {
    this.url = global.url;
   }

   mostrarUsuarios():Promise<any>{
    return this.http.post(this.url+"usuario.php",{},{});
  }


}