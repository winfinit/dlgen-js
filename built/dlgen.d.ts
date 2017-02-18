export declare class DLPerson {
    firstName: string;
    lastName: string;
    middleName: string;
    dob: Date;
    gender: string;
    constructor(person: Object<{
        firstName: string;
        lastName: string;
        middleName: string;
        dob: Date;
        gender: string;
    }>);
}
export declare class DLGenerator {
    dlPerson: DLPerson;
    lastNameSoundexCode: string;
    constructor(person: DLPerson);
    toString(): string;
    toFormattedString(): string;
    getLastIDCode(): string;
    getLastNameSoundex(): string;
    getGenderNumber(): number;
    getBirthCode(): string;
    getMonthMultiplier(): number;
    getBirthMonthCode(): number;
    getBirthDayCode(): number;
    getBirthYearCode(): string;
    getEncodedFirstNameAndMiddleInitial(): number;
}
