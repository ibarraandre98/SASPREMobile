import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopInsecticidasComponent } from './pop-insecticidas/pop-insecticidas.component';
import { IonicModule } from '@ionic/angular';
import { PopInfoInsecticidasComponent } from './pop-info-insecticidas/pop-info-insecticidas.component';
import { PopInfoHistorialComponent } from './pop-info-historial/pop-info-historial.component';
import { PopCosechasComponent } from './pop-cosechas/pop-cosechas.component';
import { PopInfoCosechasComponent } from './pop-info-cosechas/pop-info-cosechas.component';
import { PopUsuariosComponent } from './pop-usuarios/pop-usuarios.component';



@NgModule({
  declarations: [PopInsecticidasComponent, PopInfoInsecticidasComponent,PopInfoHistorialComponent,PopCosechasComponent,PopInfoCosechasComponent,PopUsuariosComponent],
  exports:[PopInsecticidasComponent, PopInfoInsecticidasComponent,PopInfoHistorialComponent,PopCosechasComponent,PopInfoCosechasComponent,PopUsuariosComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
