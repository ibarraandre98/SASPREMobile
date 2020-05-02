import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopInsecticidasComponent } from './pop-insecticidas/pop-insecticidas.component';
import { IonicModule } from '@ionic/angular';
import { PopInfoInsecticidasComponent } from './pop-info-insecticidas/pop-info-insecticidas.component';



@NgModule({
  declarations: [PopInsecticidasComponent, PopInfoInsecticidasComponent],
  exports:[PopInsecticidasComponent, PopInfoInsecticidasComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
