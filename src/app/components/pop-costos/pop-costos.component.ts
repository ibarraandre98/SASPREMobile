import { CostosService } from './../../services/costos.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-pop-costos',
  templateUrl: './pop-costos.component.html',
  styleUrls: ['./pop-costos.component.scss'],
})
export class PopCostosComponent implements OnInit {

  costo:any;

  constructor(
    private popoverCtrl:PopoverController,
    private navParams:NavParams,
    private costosService:CostosService,
    ) 
    {
      this.costo = this.navParams.get('costo');
    }

  ngOnInit() {}

  clickEditar(){
    console.log('Se oprimio editar');
    this.popoverCtrl.dismiss({
      item: 'Editar'
    });
  }

  clickBorrar(){
    this.costosService.deleteCostos(this.costo)
    .then(response =>{
      console.log(response);
    });
    this.popoverCtrl.dismiss({
      item: 'Borrar'
    });
  }
}
