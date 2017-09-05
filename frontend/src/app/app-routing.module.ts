import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SamplesComponent } from './moneyforward/samples.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/samples', pathMatch: 'full'
  },
  {
    path: 'samples', component: SamplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule{}
