import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EfPage } from './ef.page';

const routes: Routes = [
  {
    path: '',
    component: EfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EfPageRoutingModule {}
