import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarreradetaillPageRoutingModule } from './carreradetaill-routing.module';

import { CarreradetaillPage } from './carreradetaill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarreradetaillPageRoutingModule
  ],
  declarations: [CarreradetaillPage]
})
export class CarreradetaillPageModule {}
