import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';
import {CarApiService} from "./services/data-access/car-api.service";


@NgModule({
  declarations: [CarComponent],
  imports: [CommonModule],
  providers: [CarApiService],
})
export class CarModule {}
