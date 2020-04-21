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


  private usuarios={
    idUSuario:'',
    idCargo:'',
    idEmpresa:'',
    nombre:'',
    apellidos:'',
    contra:'',
    nickname:'',
    correo:'',
  }

  insertusuarios(usuarios:any):Promise<any>{
    return this.http.post(this.url+"usuarios-insert.php",usuarios,{});
  }

  updateUsuarios(usuarios: any): Promise<any> {
    return this.http.post(this.url + 'usuarios-update.php', usuarios, {});
  }

  deleteUsuarios(usuarios: any): Promise<any> {
    return this.http.post(this.url + 'usuarios-delete.php', usuarios, {});
  }


}