//this is module Anagraphic1.ts

export interface IPrintable {
    getString(): string;
}

export default class Person implements IPrintable {
    static administrator: Person = new Person("John", "Smith");
    constructor(readonly name: string, readonly surname: string,
        readonly secondName?: string) {
    }
    public fullname(): string {
        return this.secondName !== undefined ?
            this.name + " " + this.secondName + " " + this.surname :
            this.name + " " + this.surname;
    }
    public getString(): string {
        return "\n" + this.fullname() + "\n";
    }
}
class Teacher extends Person {
    constructor(public course: string, name: string, surname: string,
        secondName?: string) {
        super(name, surname, secondName);
    }
    getString(): string {
        return super.getString() + "techer of: " +
            this.course + "\n";
    }
}
let myPrintable: IPrintable = new Teacher("TypeScript", "Francesco", "Abbruzzese");
export let humanReadable = myPrintable.getString();

//export {Teacher }
export { Teacher as Tutor }