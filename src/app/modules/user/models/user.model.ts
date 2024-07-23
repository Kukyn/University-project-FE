import {BaseEntity} from "../../../core/models/base-entity.model";
import {Car} from "../../car/models/car.model";
import {Type} from "@angular/core";

export class User extends BaseEntity {
  private carModel: Type<Car> = Car;
  //TODO: we can maybe get rid of ModelReferenceType for user
  id!: number;
  ulid!: string;
  first_name!: string;
  last_name!: string;
  phone_number!: string;
  email!:string;
  is_admin!: boolean;
  //TODO: create models
  cars!: Car[];
  //offers!: Offer[];
  created_at!: Date;
  updated_at!: Date;

  password!: string;

  user_id!:number;

  get fullName(): string {
    return this.first_name + ' ' + this.last_name;
  }

  constructor(data:any) {
    super();
    Object.assign(this,data);
    this.user_id = this.id;
    this.created_at = new Date(data["created_at"]);
    this.updated_at = new Date(data["updated_at"]);
  }

}
