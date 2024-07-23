import {Component, inject} from '@angular/core';
import {SimplePageComponent} from "../../../../core/components/simple-page/simple-page.component";
import {ActivatedRoute} from "@angular/router";
import { Observable} from "rxjs";
import {Offer} from "../../models/offer.model";
import {OfferApiService} from "../../services/data-access/offer-api.service";
import {FormBuilder} from "@angular/forms";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'sf-offer-detail-edit',
  templateUrl: './offer-detail-edit.component.html',
  styleUrl: './offer-detail-edit.component.scss',
})
export class OfferDetailEditComponent extends SimplePageComponent{
  private route: ActivatedRoute = inject(ActivatedRoute);
  private offerApiService: OfferApiService = inject(OfferApiService);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  offerId!: number;
  offer$!: Observable<Offer>

  form = this.formBuilder.group({
    from: [''],
    to: [''],
    price: [''],
    passengers: [''],
    maxPassengers: [''],
  });

  submitForm(): void {
    this.editOffer();
  }

  private editOffer():void {
    this.offerApiService.update({
      ...(this.form.controls.from.value ? {from: this.form.controls.to.value}: {}),
      ...(this.form.controls.to.value ? {to: this.form.controls.to.value}: {}),
      ...(this.form.controls.price.value ? {price: this.form.controls.price.value}: {}),
      ...(this.form.controls.passengers.value ? {passengers: this.form.controls.passengers.value}: {}),
      ...(this.form.controls.maxPassengers.value ? {max_passengers: this.form.controls.maxPassengers.value}: {}),
    } as any, this.offerId).pipe(untilDestroyed(this)).subscribe(isPatched => {
        if(!isPatched){
          return;
        }
        this.router.navigate(["/offer", this.offerId]);
      }
    );
  }

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
    this.offer$ = this.offerApiService.getSingle({id: this.offerId});
  }
}
