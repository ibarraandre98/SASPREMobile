import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlarmasEditarPageRoutingModule } from './alarmas-editar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlarmasEditarPage } from './alarmas-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AlarmasEditarPageRoutingModule
  ],
  declarations: [AlarmasEditarPage]
})
export class AlarmasEditarPageModule {}
