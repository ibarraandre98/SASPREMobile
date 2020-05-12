import { CalendarioActividadesService } from './../../services/calendario-actividades.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-pop-calendario-actividades',
  templateUrl: './pop-calendario-actividades.component.html',
  styleUrls: ['./pop-calendario-actividades.component.scss'],
})
export class PopCalendarioActividadesComponent implements OnInit {

  actividad:any;

  constructor(
    private popoverCtrl:PopoverController,
    private navParams:NavParams,
    private calendarioActividadesService:CalendarioActividadesService,
    ) 
    { 
      this.actividad = this.navParams.get('alarma');
    }

  ngOnInit() {}

  clickEditar(){
    console.log('Se oprimio editar');
    this.popoverCtrl.dismiss({
      item: 'Editar'
    });
  }

  clickBorrar(){
    this.calendarioActividadesService.deleteCalendarioActividades(this.actividad)
    .then(response =>{
      console.log(response);
    });
    this.popoverCtrl.dismiss({
      item: 'Borrar'
    });
  }
}
