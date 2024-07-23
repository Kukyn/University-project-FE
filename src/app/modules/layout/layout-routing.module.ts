import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import {OfferComponent} from "../offer/offer.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'offer',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () => import('../user/user.module').then(m => m.UserModule),
  },
  {
    path: 'offer',
    component: OfferComponent,
    loadChildren: () => import('../offer/offer.module').then(m => m.OfferModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
