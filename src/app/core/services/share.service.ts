import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Offer} from "../../modules/offer/models/offer.model";
import {Car} from "../../modules/car/models/car.model";

@Injectable()
export class ShareService {
  private currentOffer$: BehaviorSubject<Offer | null> = new BehaviorSubject<Offer | null>(null);
  private currentCar$:  BehaviorSubject<Car | null> = new BehaviorSubject<Car | null>(null);

  get currentOffer(): Offer | null{
    return this.currentOffer$.getValue()
  }

  setCurrentOffer(value: Offer | null){
    this.currentOffer$.next(value);
  }

  get currentCar(): Car | null{
    return this.currentCar$.getValue()
  }

  setCurrentCar(value: Car | null){
    this.currentCar$.next(value);
  }
}
