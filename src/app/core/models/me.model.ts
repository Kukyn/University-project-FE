import { User } from '../../modules/user/models/user.model';

export class Me extends User {
  constructor(data:any) {
    super(data);
  }
}
