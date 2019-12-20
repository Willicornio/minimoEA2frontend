import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralComponent } from './general.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralPageRoutingModule {}
