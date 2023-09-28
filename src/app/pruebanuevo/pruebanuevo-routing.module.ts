import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebanuevoPage } from './pruebanuevo.page';

const routes: Routes = [
  {
    path: '',
    component: PruebanuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebanuevoPageRoutingModule {}
