import { Injectable } from '@angular/core';
import { global } from './global';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  
  url:string;

  constructor(
    private http:HTTP,
  ) 
  {
    this.url = global.url;
  }

  insertarInfo(user:any):Promise<any>{
    return this.http.post(this.url+"usuario-info.php",user,{});
  }

}
