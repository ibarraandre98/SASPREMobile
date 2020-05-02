import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopInsecticidasComponent } from './pop-insecticidas/pop-insecticidas.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PopInsecticidasComponent],
  exports:[PopInsecticidasComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
