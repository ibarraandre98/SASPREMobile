import { InsecticidasService } from './../../services/insecticidas.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-pop-insecticidas',
  templateUrl: './pop-insecticidas.component.html',
  styleUrls: ['./pop-insecticidas.component.scss'],
})
export class PopInsecticidasComponent implements OnInit {

  insecticida:any;

  constructor(
    private popoverCtrl:PopoverController,
    private navParams:NavParams,
    private insecticidasService:InsecticidasService,
    ) 
    { 
      this.insecticida = this.navParams.get('insecticida');
    }

  ngOnInit() {}


  clickEditar(){
    console.log('Se oprimio editar');
    this.popoverCtrl.dismiss({
      item: 'Editar'
    });
  }

  clickBorrar(){
    this.insecticidasService.deleteInsecticidas(this.insecticida)
    .then(response =>{
      console.log(response);
    });
    this.popoverCtrl.dismiss({
      item: 'Borrar'
    });
  }
}
