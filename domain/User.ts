interface IUser {
  id: number;
  name: string;
}

export class User {
  userId!: number;
  userName!: string;
  constructor(initObj: IUser) {
    this.userId = initObj.id;
    this.userName = initObj.name;
  }
}
