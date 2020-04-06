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
    console.log(user);
    return this.http.post(this.url+"login.php",user,{});
  }


}
