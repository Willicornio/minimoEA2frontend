import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralPageRoutingModule } from './general-routing.module';

import { GeneralComponent } from './general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralPageRoutingModule
  ],
  declarations: [GeneralComponent]
})
export class GeneralPageModule {}
