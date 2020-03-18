import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroPage } from './intro.page';

const routes: Routes = [
  {
    path: '',
    component: IntroPage
  },
  {
    path: 'tabs',
    redirectTo: './tabs/ef',
    //pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroPageRoutingModule {}
