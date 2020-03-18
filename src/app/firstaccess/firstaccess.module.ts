import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstaccessPageRoutingModule } from './firstaccess-routing.module';

import { FirstaccessPage } from './firstaccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstaccessPageRoutingModule
  ],
  declarations: [FirstaccessPage]
})
export class FirstaccessPageModule {}
