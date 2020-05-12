import { MostrarCosechasService } from 'src/app/services/mostrar-cosechas.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-pop-cosechas',
  templateUrl: './pop-cosechas.component.html',
  styleUrls: ['./pop-cosechas.component.scss'],
})
export class PopCosechasComponent implements OnInit {

  cosecha:any;

  constructor(
    public popoverCtrl:PopoverController,
    private navParams:NavParams,
    private serviceCosechas:MostrarCosechasService,
    ) {
      this.cosecha = this.navParams.get('cosecha');
     }

  ngOnInit() {}

  clickEliminar(){
    this.serviceCosechas.deleteCosechas(this.cosecha)
    .then(response =>{
      console.log(response);
      //this.navParams.get("parentPage").someFnToRefreshParent();
    } );
    console.log('Se oprimio borrar');
    this.popoverCtrl.dismiss({
      
    });
  }
}
