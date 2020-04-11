import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialplagasPageRoutingModule } from './historialplagas-routing.module';

import { HistorialplagasPage } from './historialplagas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialplagasPageRoutingModule
  ],
  declarations: [HistorialplagasPage]
})
export class HistorialplagasPageModule {}
