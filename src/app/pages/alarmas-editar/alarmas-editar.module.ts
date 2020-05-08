import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlarmasEditarPageRoutingModule } from './alarmas-editar-routing.module';

import { AlarmasEditarPage } from './alarmas-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlarmasEditarPageRoutingModule
  ],
  declarations: [AlarmasEditarPage]
})
export class AlarmasEditarPageModule {}
