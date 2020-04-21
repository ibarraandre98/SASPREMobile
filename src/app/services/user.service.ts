import { global } from './global';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string;
  constructor(
    public http:HTTP,
  ) {
    this.url = global.url;
   }

   login(user:any):Promise<any>{
    return this.http.post(this.url+"login.php",user,{});
  }

  correoDisponible(user:any):Promise<any>{
    return this.http.post(this.url+"correoDisponible.php",user,{});
  }

  usuarioDisponible(user:any):Promise<any>{
    return this.http.post(this.url+"usuarioDisponible.php",user,{});
  }

  registro(user:any):Promise<any>{
    return this.http.post(this.url+'registro.php',user,{});
  }

  recuperarContraseña(email:any):Promise<any>{
    return this.http.post(this.url+'mail.php',email,{});
  }


}
