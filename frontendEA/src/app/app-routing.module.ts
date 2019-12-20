import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'carreradetaill/:nameCarre',
    loadChildren: () => import('./carreradetaill/carreradetaill.module').then( m => m.CarreradetaillPageModule)
  },
  // {
  //   path: 'general',
  //   loadChildren: () => import('./general/general.module').then( m => m.GeneralPageModule)
  // },
  {
    path: 'subjectdetaill/:nameAsig',
    loadChildren: () => import('./subjectdetall/subjectdetall.module').then( m => m.SubjectdetallPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
