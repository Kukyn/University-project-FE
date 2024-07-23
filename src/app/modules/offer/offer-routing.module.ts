import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {OfferListComponent} from "./pages/offer-listings-page/offer-list.component";
import {OfferDetailComponent} from "./pages/offer-detail-page/offer-detail.component";
import {OfferDetailEditComponent} from "./pages/offer-detail-edit-page/offer-detail-edit.component";

const routes: Routes = [
  {
    path: '',
    component: OfferListComponent,
  },
  {
    path: ':id',
    component: OfferDetailComponent,
  },
  {
    path: ':id/edit',
    component: OfferDetailEditComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferRoutingModule {}
