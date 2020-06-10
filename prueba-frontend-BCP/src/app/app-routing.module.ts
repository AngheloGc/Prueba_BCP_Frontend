import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingComponent } from './loading/loading.component'
import { AgenciesComponent } from './agencies/agencies.component'

const routes: Routes = [
  {path: '', component: LoadingComponent},
  {path: 'agencies', component: AgenciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
