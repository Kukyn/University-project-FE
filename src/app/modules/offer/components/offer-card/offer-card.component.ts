import {Component, inject, Input} from '@angular/core';
import {Offer} from "../../models/offer.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ShareService} from "../../../../core/services/share.service";

@Component({
  selector: 'sf-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.scss'
})
export class OfferCardComponent {
  private readonly router: Router = inject(Router);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly shareService: ShareService = inject(ShareService);
  @Input() offer!: Offer;

  protected goToOfferDetail(){
    this.shareService.setCurrentOffer(this.offer);
    this.router.navigate([this.offer.id], { relativeTo: this.route });
  }
}
