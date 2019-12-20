import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarreradetaillPage } from './carreradetaill.page';

const routes: Routes = [
  {
    path: '',
    component: CarreradetaillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarreradetaillPageRoutingModule {}
