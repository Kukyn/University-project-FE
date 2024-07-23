import {BaseEntity} from "../../../core/models";
import {User} from "../../user/models/user.model";
import {CarType} from "../enums/car-type.enum";

export class Car extends BaseEntity{
  id!: number;
  ulid!: string;
  brand!: string;
  model!: string;
  spz!: string;
  color!: string;
  type!: CarType;
  user_id!:number;
  owner!: User;
  //offers: Offer[];

  get carName():string{
    return `${this.brand} ${this.model}`;
  }

  constructor(data:any) {
    super();
    Object.assign(this,data);
    if(this.owner){
      this.user_id = this.owner.id;
    }
  }
}
