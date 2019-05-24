export class User{
    constructor(
        public _id: string,
        public email: string,
        public password: string,
        public image: string,
        public status: Status
    ){}
}

export enum Status{
    Active = 'ACTIVE',
    Inactive = 'INACTIVE',
}
