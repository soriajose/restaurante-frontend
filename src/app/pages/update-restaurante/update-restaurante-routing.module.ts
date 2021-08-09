import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateRestaurantePage } from './update-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateRestaurantePageRoutingModule {}
