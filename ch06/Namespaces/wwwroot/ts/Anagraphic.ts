namespace Anagraphic {

    export interface IPrintable {
        getString(): string;
    }

    export class Person implements IPrintable {
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
    export namespace Courses {
        export class Teacher extends Person {
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
    }
}
import Teacher = Anagraphic.Courses.Teacher;
let myTeacher = new Teacher("TypeScript", "Francesco", "Abbruzzese");

//import myCourses = Anagraphic.Courses;
//let myTeacher = new myCourses.Teacher("TypeScript", "Francesco", "Abbruzzese");