export class Person{
    constructor(
        givenName: string,
        middleName: string,
        familyName: string,
        gender: Gender,
        birthdate: Date
    ){}
}

export enum Gender {
    Male = 'MALE',
    Female = 'FEMALE',
}
