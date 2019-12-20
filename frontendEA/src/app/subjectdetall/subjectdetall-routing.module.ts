import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectdetallPage } from './subjectdetall.page';

const routes: Routes = [
  {
    path: '',
    component: SubjectdetallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectdetallPageRoutingModule {}
