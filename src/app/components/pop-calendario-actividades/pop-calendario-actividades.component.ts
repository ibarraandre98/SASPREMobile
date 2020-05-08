import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-calendario-actividades',
  templateUrl: './pop-calendario-actividades.component.html',
  styleUrls: ['./pop-calendario-actividades.component.scss'],
})
export class PopCalendarioActividadesComponent implements OnInit {

  constructor(private popoverCtrl:PopoverController) { }

  ngOnInit() {}

  clickEditar(){
    console.log('Se oprimio editar');
    this.popoverCtrl.dismiss({
      item: 'Editar'
    });
  }

  clickBorrar(){
    console.log('Se oprimio borrar');
    this.popoverCtrl.dismiss({
      item: 'Borrar'
    });
  }
}
