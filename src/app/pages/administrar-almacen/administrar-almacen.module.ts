import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarAlmacenPageRoutingModule } from './administrar-almacen-routing.module';

import { AdministrarAlmacenPage } from './administrar-almacen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarAlmacenPageRoutingModule
  ],
  declarations: [AdministrarAlmacenPage]
})
export class AdministrarAlmacenPageModule {}
