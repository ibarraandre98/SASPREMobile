import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WheatherService {
  apikey ='eac2ef4fffff88d79e23d7c669cf3c9d';
  URI:string ='';
  constructor(private http:HttpClient) {
   this.URI='https://api.openweathermap.org/data/2.5/weather?q=89800,mx&appid='+this.apikey;

   }
   getWeather(){
   return this.http.get(this.URI);
   }
}
