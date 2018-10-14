(function () {
    //class Person {  
    //    public readonly name: string;
    //    public readonly surname: string;
    //    public readonly secondName?: string;
    //    constructor(name: string, surname: string, secondName?: string) {
    //        this.name = name;
    //        this.surname = surname;
    //        this.secondName = secondName;
    //    }
    //    public fullname(): string {
    //        return this.secondName !== undefined ?
    //            this.name + " " + this.secondName + " " + this.surname :
    //            this.name + " " + this.surname;
    //    }
    //}
    
    //class Person{
    //    static administrator: Person = new Person("John", "Smith");
    //    constructor(readonly name: string, readonly surname: string,
    //        readonly secondName?: string) {  
    //    }
    //    public fullname(): string {
    //        return this.secondName !== undefined ?
    //            this.name + " " + this.secondName + " " + this.surname :
    //            this.name + " " + this.surname;
    //    }
        
    //}
    

    //class Person {
    //    constructor(readonly name: string, readonly surname: string,
    //        readonly secondName?: string) {
    //    }
    //    get fullname(): string {
    //        return this.secondName !== undefined ?
    //            this.name + " " + this.secondName + " " + this.surname :
    //            this.name + " " + this.surname;
    //    }
    //}
    //class Person {
    //    constructor(public name: string, public surname: string,
    //        public secondName?: string) {
    //    }
    //    get fullname(): string {
    //        return this.secondName !== undefined ?
    //            this.name + " " + this.secondName + " " + this.surname :
    //            this.name + " " + this.surname;
    //    }
    //    set fullname(value: string) {
    //        var arr=value.replace(/\s\s+/g, ' ').split(' ');
    //        if (arr.length == 2) {
    //            this.name = arr[0];
    //            this.surname = arr[1];
    //            this.secondName = undefined;
    //        }
    //        else if (arr.length == 3) {
    //            this.name = arr[0];
    //            this.surname = arr[1];
    //            this.secondName = arr[2];
    //        }
    //        else throw "wrong fullname assignement";
    //    }
    //}
    //class Person {

    //    public name: string;
    //    public surname: string;
    //    public secondName?: string;
    //    constructor(name: string, surname: string, secondName?: string) {
    //        this.name = name;
    //        this.surname = surname;
    //        this.secondName = secondName;
    //    }
    //    private titleCase(x: string): string  {
    //        return x.substr(0, 1).toUpperCase() + x.substr(1);
    //    }
    //    public fullname(): string {
    //        return this.secondName !== undefined ?
    //            this.titleCase(this.name) + " " + this.titleCase(this.secondName)
    //                + " " + this.titleCase(this.surname) :
    //            this.titleCase(this.name) + " " + this.titleCase(this.surname);
    //    }
    //}
    interface IPrintable {
        getString(): string;
    }

    class Person implements IPrintable {
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
    var myPerson: Person = new Person("John", "Smith");
    var anotherPerson = new Person("George", "Smith", "Carl");

    var fname = myPerson.fullname();
    var name = myPerson.name;

    //interface Employed extends Person
    //{
    //    department: string;
    //    code: string;
    //}

    type interface<T> =
    {
        [P in keyof T]: T[P]
    }

    interface Employed extends interface<Person>
    {
        department: string;
        code: string;
    }
    
    //var x: Employed = {
    //    name: "Frank",
    //    surname: "Abbruzzese",
    //    department: "marketing",
    //    code: "1254",
    //    fullname: () => "Frank Abbruzzese"
    //}

    let personMaker = Person;
    let aPerson = new personMaker("Frank", "Smith");

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
    let humanReadable = myPrintable.getString();

abstract class Product {
    constructor(public availability: number) {
    }
    abstract unitPrice(): number;
    totalPrice(quantity: number): [number, number] {
        if (quantity > this.availability) quantity = this.availability;
        let unitPrice = this.unitPrice();
        if (quantity >= 5) unitPrice *= 0.95;
        else if (quantity >= 10) unitPrice *= 0.90;
        else if (quantity >= 20) unitPrice *= 0.80;
        else if (quantity >= 100) unitPrice *= 0.65;
        return [quantity, quantity * unitPrice];
    }
    buy(quantity: number): [number, number] {
        let result = this.totalPrice(quantity);
        this.availability -= result[0];
        return result;
    }
    }
    let aTeacherOrPerson: Person = new Teacher("TypeScript", "Francesco", "Abbruzzese");
    
    let myCourse: string | null;
    if (aTeacherOrPerson instanceof Teacher)
        myCourse = aTeacherOrPerson.course;
    else
        myCourse = null;
    let mixedArray1 =
        [new Teacher("TypeScript", "Francesco", "Abbruzzese"),
         new Person("John", "Smith"),
         "simple string"  
        ];

})();