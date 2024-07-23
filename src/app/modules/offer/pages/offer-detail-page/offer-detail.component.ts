import {Component, inject} from '@angular/core';
import {SimplePageComponent} from "../../../../core/components/simple-page/simple-page.component";
import {ActivatedRoute} from "@angular/router";
import { Observable, of} from "rxjs";
import {Offer} from "../../models/offer.model";
import {OfferApiService} from "../../services/data-access/offer-api.service";
import {ShareService} from "../../../../core/services/share.service";
import {AuthService} from "../../../../core/services/auth/auth.service";

@Component({
  selector: 'sf-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrl: './offer-detail.component.scss',
})
export class OfferDetailComponent extends SimplePageComponent{
  private route: ActivatedRoute = inject(ActivatedRoute);
  private offerApiService: OfferApiService = inject(OfferApiService);
  private readonly shareService: ShareService = inject(ShareService);
  private readonly authService: AuthService = inject(AuthService);

  offerId!: number;
  offer$!: Observable<Offer>
  canActiveUserEditOffer$!: Observable<boolean>;

  override ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      if (id) {
        //+ before id just parse string to number
        this.offerId = +id;
      }
    });
    super.ngOnInit();
  }

  override setupPage() {
    super.setupPage();
    const offer = this.shareService.currentOffer;
    if(offer){
      this.offer$ = of(offer);
      this.canActiveUserEditOffer$ = this.authService.canActiveEdit$({object: this.offer$});
      return;
    }
    this.offer$ = this.offerApiService.getSingle({id: this.offerId, withRelations:["created_by", "car"]});
    this.canActiveUserEditOffer$ = this.authService.canActiveEdit$({object: this.offer$});
  }

  protected goToEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  override goBack():void{
    this.router.navigate(["/offer"])
  }
}
