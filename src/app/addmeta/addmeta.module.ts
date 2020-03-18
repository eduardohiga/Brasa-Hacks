import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmetaPageRoutingModule } from './addmeta-routing.module';

import { AddmetaPage } from './addmeta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmetaPageRoutingModule,
  ],
  declarations: [AddmetaPage]
})
export class AddmetaPageModule {}
