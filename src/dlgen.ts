let Soundex: any = require('soundex');

export interface IDLPerson {
	firstName: string;
	lastName: string;
	middleName: string;
	dob: Date;
	gender: string;
}

export class DLPerson implements IDLPerson {
	firstName: string;
	lastName: string;
	middleName: string = "";
	dob: Date;
	gender: string;

	constructor(person: IDLPerson) {
		this.firstName = person.firstName.toUpperCase();
		this.lastName = person.lastName.toUpperCase();
		this.middleName = person.middleName.toUpperCase();
		this.dob = person.dob;
		this.gender = person.gender.charAt(0).toUpperCase();
	}
}

export class DLGenerator {

	dlPerson: DLPerson;
	lastNameSoundexCode: string;


	constructor(person: DLPerson) {
		this.dlPerson = person;
	}

	toString(): string {
		let id: string = 
			this.getLastNameSoundex() +
			this.getEncodedFirstNameAndMiddleInitial() +
			this.getBirthYearCode() +
			this.getBirthCode() +
			this.getLastIDCode();
		return id;
	}

	toFormattedString() {
		let id: string = 
			this.getLastNameSoundex() + "-" +
			this.getEncodedFirstNameAndMiddleInitial() + "-" +
			this.getBirthYearCode() + "-" +
			this.getBirthCode() + "-" +
			this.getLastIDCode();
		return id;
	}

	getLastIDCode(): string {
		return "0";
	}

	getLastNameSoundex(): string {
		let soundexCode: string = Soundex(this.dlPerson.lastName);
		return soundexCode;
	}

	getGenderNumber(): number {
		let genderCode: number = this.dlPerson.gender === "M" ? 0 : 500;
		return genderCode;
	}

	getBirthCode(): string {
		let code: number = (this.getBirthMonthCode() * this.getMonthMultiplier()) + this.getBirthDayCode() + this.getGenderNumber();
		let birthCodeString: string = ("000" + code).slice(-3);
		return birthCodeString;
	}

	getMonthMultiplier(): number {
		return 40;
	}

	getBirthMonthCode(): number {
		let month: number = this.dlPerson.dob.getMonth();
		return month;
	}

	getBirthDayCode(): number {
		let day: number = this.dlPerson.dob.getDate();
		return day;
	}

	getBirthYearCode(): string {
		let lastTwoYearString: string = this.dlPerson.dob.getFullYear().toString().substr(2,2);
		let year: number = parseInt(lastTwoYearString);
		if ( year > 100 ) {
			year -= 100;
		}
		let yearString: string;
		if ( year < 10 ) {
			yearString = "0" + year.toString();
		} else {
			yearString = year.toString();
		}
		return yearString;
	}

	getEncodedFirstNameAndMiddleInitial(): number {
		let FFF: number;
		switch(this.dlPerson.firstName) {
			case "ALBERT":
			case "ALICE":
			FFF = 20;
			break;
			case "ANN":
			case "ANNA":
			case "ANNE":
			case "ANNIE":
			case "ARTHUR":
			FFF = 40;
			break;
			case "BERNARD":
			case "BETTE":
			case "BETTIE":
			case "BETTY":
			FFF = 80;
			break;
			case "CARL":
			case "CATHERINE":
			FFF = 120;
			break;
			case "CHARLES":
			case "CLARA":
			FFF = 140;
			break;
			case "DORTHY":
			case "DONALD":
			FFF = 180;
			break;
			case "EDWARD":
			case "ELIZABETH":
			FFF = 220;
			break;
			case "FLORENCE":
			case "FRANK":
			FFF = 260;
			break;
			case "GEORGE":
			FFF = 300;
			break;
			case "HAROLD":
			case "HARRIET":
			FFF = 340;
			break;
			case "HARRY":
			case "HAZEL":
			FFF = 360;
			break;
			case "HELEN":
			case "HENRY":
			FFF = 380;
			break;
			case "JAMES":
			case "JANE":
			case "JAYNE":
			FFF = 440;
			break;
			case "JEAN":
			case "JOHN":
			FFF = 460;
			break;
			case "JOAN":
			case "JOSEPH":
			FFF = 480;
			break;
			case "MARGARET":
			case "MARTIN":
			FFF = 560;
			break;
			case "MARVIN":
			case "MARY":
			FFF = 580;
			break;
			case "MELVIN":
			case "MILDRED":
			FFF = 600;
			break;
			case "PATRICIA":
			case "PAUL":
			FFF = 680;
			break;
			case "RICHARD":
			case "RUBY":
			FFF = 740;
			break;
			case "ROBERT":
			case "RUTH":
			FFF = 760;
			break;
			case "THELMA":
			case "THOMAS":
			FFF = 820;
			break;
			case "WALTER":
			case "WANDA":
			FFF = 900;
			break;
			case "WILLIAM":
			case "WILMA":
			FFF = 920;
			break;
			default:
			switch(this.dlPerson.firstName.charAt(0)) {
				case "A":
				FFF = 0;
				break;
				case "B":
				FFF = 60;
				break;
				case "C":
				FFF = 100;
				break;
				case "D":
				FFF = 160;
				break;
				case "E":
				FFF = 200;
				break;
				case "F":
				FFF = 240;
				break;
				case "G":
				FFF = 280;
				break;
				case "H":
				FFF = 320;
				break;
				case "I":
				FFF = 400;
				break;
				case "J":
				FFF = 420;
				break;
				case "K":
				FFF = 500;
				break;
				case "L":
				FFF = 520;
				break;
				case "M":
				FFF = 540;
				break;
				case "N":
				FFF = 620;
				break;
				case "O":
				FFF = 640;
				break;
				case "P":
				FFF = 660;
				break;
				case "Q":
				FFF = 700;
				break;
				case "R":
				FFF = 720;
				break;
				case "S":
				FFF = 780;
				break;
				case "T":
				FFF = 800;
				break;
				case "U":
				FFF = 840;
				break;
				case "V":
				FFF = 860;
				break;
				case "W":
				FFF = 880;
				break;
				case "X":
				FFF = 940;
				break;
				case "Y":
				FFF = 960;
				break;
				case "Z":
				FFF = 980;
				break;
				default:
				throw new Error("name must start with a letter from latin alphabet");
			}
			break;
		}

		switch(this.dlPerson.middleName.charAt(0)) {
			case "":
			case undefined:
			case null:
			FFF += 0;
			break;
			case "A":
			FFF += 1;
			break;
			case "B":
			FFF += 2;
			break;
			case "C":
			FFF += 3;
			break;
			case "D":
			FFF += 4;
			break;
			case "E":
			FFF += 5;
			break;
			case "F":
			FFF += 6;
			break;
			case "G":
			FFF += 7;
			break;
			case "H":
			FFF += 8;
			break;
			case "I":
			FFF += 9;
			break;
			case "J":
			FFF += 10;
			break;
			case "K":
			FFF += 11;
			break;
			case "L":
			FFF += 12;
			break;
			case "M":
			FFF += 13;
			break;
			case "N":
			FFF += 14;
			break;
			case "O":
			FFF += 15;
			break;
			case "P":
			FFF += 16;
			break;
			case "Q":
			FFF += 17;
			break;
			case "R":
			case "S":
			case "T":
			case "U":
			case "V":
			FFF += 18;
			break;
			case "W":
			case "X":
			case "Y":
			case "Z":
			FFF += 19;
			break;
			default:
			throw new Error("name must start with a letter from latin alphabet or empty");
		}		
		return FFF;
	}
}