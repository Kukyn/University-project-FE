import {SimpleApi} from "../../../../core";
import {Injectable, Type} from "@angular/core";
import {Offer} from "../../models/offer.model";

@Injectable()
export class OfferApiService extends SimpleApi<Offer>{
  override endpoint: string = "offer";
  override model: Type<Offer> = Offer;
}
