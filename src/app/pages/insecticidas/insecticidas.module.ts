import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsecticidasPageRoutingModule } from './insecticidas-routing.module';

import { InsecticidasPage } from './insecticidas.page';
import { InsecticidasEditarPage } from '../insecticidas-editar/insecticidas-editar.page';
import { InsecticidasNuevoPage } from '../insecticidas-nuevo/insecticidas-nuevo.page';
import { InsecticidasEditarPageModule } from '../insecticidas-editar/insecticidas-editar.module';
import { InsecticidasNuevoPageModule } from '../insecticidas-nuevo/insecticidas-nuevo.module';
import { PopInsecticidasComponent } from 'src/app/components/pop-insecticidas/pop-insecticidas.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  entryComponents:[ //Aquí va todos los modals y pop -Cualquier comp de forma dinamica
    InsecticidasNuevoPage, 
    InsecticidasEditarPage,
    PopInsecticidasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsecticidasPageRoutingModule,
    //Tambien se debe agregar el module de los modals
    InsecticidasEditarPageModule,
    InsecticidasNuevoPageModule,
    //Tambien se debe agregar el modulo del POP
    ComponentsModule,
    //Se debe importar el pipe para poder usar el Pipe de filtro de la busqueda.
    PipesModule
  ],
  declarations: [InsecticidasPage]
})
export class InsecticidasPageModule {}
