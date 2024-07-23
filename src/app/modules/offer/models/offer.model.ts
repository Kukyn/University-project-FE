import {BaseEntity} from "../../../core/models";
import {User} from "../../user/models/user.model";
import {Car} from "../../car/models/car.model";

export class Offer extends BaseEntity{
  id!: number;
  ulid!: string;
  user_id!: number;
  from!: string;
  to!: string;
  description?: string | null;
  time!: Date;
  is_available!: boolean;
  is_done!: boolean;
  price!: number;
  passengers!: number;
  max_passengers!: number;
  created_by!: User;
  car!: Car;

  get route(): string{
    return `${this.from} -> ${this.to}`
  }

  get passengersCapacity():string{
    return `${this.passengers}/${this.max_passengers}`
  }
  constructor(data:any) {
    super();
    Object.assign(this,data);
    if(data.created_by){
      this.created_by = new User(data.created_by);
      this.user_id = this.created_by.id;
    }
    if(data.car){
      this.car = new Car(data.car);
    }
  }
}
