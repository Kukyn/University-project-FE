import {Component, inject} from '@angular/core';
import {SimplePageComponent} from "../../../../core/components/simple-page/simple-page.component";
import {forkJoin, Observable, shareReplay} from "rxjs";
import {Offer} from "../../models/offer.model";
import {OfferApiService} from "../../services/data-access/offer-api.service";

@Component({
  selector: 'sf-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.scss',
})
export class OfferListComponent extends SimplePageComponent{
  private offerApiService: OfferApiService = inject(OfferApiService);

  offers$!: Observable<Offer[]>;

  override ngOnInit() {
    super.ngOnInit();
  }

  override setupPage() {
    super.setupPage();
    this.offers$ = this.offerApiService.getAll({withRelations:["created_by","car"]});
    forkJoin([this.offers$]).pipe(shareReplay())
  }
}
