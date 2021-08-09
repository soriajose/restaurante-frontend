import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRestaurantePageRoutingModule } from './update-restaurante-routing.module';

import { UpdateRestaurantePage } from './update-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateRestaurantePageRoutingModule
  ],
  declarations: [UpdateRestaurantePage]
})
export class UpdateRestaurantePageModule {}
