export abstract class BaseEntity {
  abstract id: number;
  abstract user_id:number;
  abstract ulid: string;
  constructor() {
  }
}
