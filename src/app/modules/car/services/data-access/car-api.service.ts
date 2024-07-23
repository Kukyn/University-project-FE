import {SimpleApi} from "../../../../core";
import {Car} from "../../models/car.model";
import {Type} from "@angular/core";

export class CarApiService extends SimpleApi<Car>{
  override endpoint: string = "car";
  override model: Type<Car> = Car;
}
