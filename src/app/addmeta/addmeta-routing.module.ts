import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmetaPage } from './addmeta.page';

const routes: Routes = [
  {
    path: '',
    component: AddmetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmetaPageRoutingModule {}
