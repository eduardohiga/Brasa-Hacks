import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetasPageRoutingModule } from './metas-routing.module';

import { MetasPage } from './metas.page';

import { ExpandableComponent } from "../components/expandable/expandable.component";

import {ProgressBarModule} from "angular-progress-bar"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetasPageRoutingModule,
    ProgressBarModule,
  ],
  declarations: [MetasPage, ExpandableComponent]
})
export class MetasPageModule {}
