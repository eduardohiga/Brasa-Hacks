import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EfPageRoutingModule } from './ef-routing.module';

import { EfPage } from './ef.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EfPageRoutingModule
  ],
  declarations: [EfPage]
})
export class EfPageModule {}
