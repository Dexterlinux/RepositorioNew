import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebanuevoPageRoutingModule } from './pruebanuevo-routing.module';

import { PruebanuevoPage } from './pruebanuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebanuevoPageRoutingModule
  ],
  declarations: [PruebanuevoPage]
})
export class PruebanuevoPageModule {}
