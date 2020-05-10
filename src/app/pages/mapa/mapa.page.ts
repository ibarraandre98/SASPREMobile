import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ViewChild, ElementRef } from '@angular/core';
import { MostrarMapaService } from '../../services/mostrar-mapa.service';

declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  providers: [ MostrarMapaService ]
})
export class MapaPage implements OnInit {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef:ElementRef;

  infoWindows: any = [];
  markers: any = [
    {
      id:"Prueba de render",
      lat:  "22.705968",
      lng:  "-99.006415"
    }
  ];

  constructor(
    public mapaService: MostrarMapaService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ionViewDidEnter(){
    this.showMap();
  }

  addMarkersToMap( markers ){
    for(let marker of markers){
      let position = new google.maps.LatLng(marker.lat, marker.lng);
      let mapMarker = new  google.maps.Marker({
        position:position,
        title: marker.id,
        latitude: marker.lat,
        longitude: marker.lng
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker){
    let infoWindowContent = '<div id="content">'+
                            '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>'+
                            '<p>Lat: '+ marker.latitude + '</p>'+
                            '<p>Lng: '+ marker.longitude + '</p>'+
                            '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click',()=>{
      this.closeAllInfoWindows();
      infoWindow.open(this.map,marker);
    });
    this.infoWindows.push(infoWindow);
    console.log("Oprimiendo marca");
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows){
      window.close();
    }
  }


  showMap(){
    const location = new google.maps.LatLng(22.705968,-99.006415);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);


    this.addMarkersToMap(this.markers);
  }

  mostrarMapa() {
    this.mapaService.mostrarMapa()
      .then(response => {
        console.log('Response recived');
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.result == 'failed'){
          console.log('Mapa no mostradas');
          this.showAlert('Error', 'Mapa no mostradas');
        } else if (data.result=='success'){
          console.log('Mapa mostradas');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  insertarMapa(){
    this.mapaService.insertarMapa()
      .then(response => {
        console.log('Response recived');
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.result == 'failed'){
          console.log('Mapa no mostradas');
          this.showAlert('Error', 'Mapa no mostradas');
        } else if (data.result=='success'){
          console.log('Mapa mostradas');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  editarMapa(){
    this.mapaService.editarMapa()
      .then(response => {
        console.log('Response recived');
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.result == 'failed'){
          console.log('Mapa no mostradas');
          this.showAlert('Error', 'Mapa no mostradas');
        } else if (data.result=='success'){
          console.log('Mapa mostradas');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  borrarMapa(){
    this.mapaService.borrarMapa()
      .then(response => {
        console.log('Response recived');
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.result == 'failed'){
          console.log('Mapa no mostradas');
          this.showAlert('Error', 'Mapa no mostradas');
        } else if (data.result=='success'){
          console.log('Mapa mostradas');
        }
      }
      ).catch(error => {
        this.showAlert('Error', JSON.stringify(error));
      });
  }

  ngOnInit() {
   // this.mostrarMapa();
  }

  async showAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['Ok'],
    });

    await alert.present();
  }

}
