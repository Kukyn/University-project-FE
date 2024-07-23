import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import {OfferApiService} from "./services/data-access/offer-api.service";
import {OfferRoutingModule} from "./offer-routing.module";
import {OfferDetailEditComponent} from "./pages/offer-detail-edit-page/offer-detail-edit.component";
import {OfferDetailComponent} from "./pages/offer-detail-page/offer-detail.component";
import {OfferListComponent} from "./pages/offer-listings-page/offer-list.component";
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import {SharedModule} from "../../shared/shared.module";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {CoreModule} from "../../core";
import {NzPageHeaderComponent, NzPageHeaderExtraDirective} from "ng-zorro-antd/page-header";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzFormDirective, NzFormItemComponent} from "ng-zorro-antd/form";
import {NzInputGroupComponent} from "ng-zorro-antd/input";


@NgModule({
  declarations: [OfferComponent, OfferDetailEditComponent, OfferDetailComponent, OfferListComponent, OfferCardComponent],
  imports: [CommonModule, OfferRoutingModule, SharedModule, NzButtonComponent, CoreModule, NzPageHeaderComponent, NzPageHeaderExtraDirective, FormsModule, NzFormDirective, NzFormItemComponent, NzInputGroupComponent, ReactiveFormsModule],
  providers: [OfferApiService],
})
export class OfferModule {}
