interface Person {
    readonly name: string;
    readonly secondName?: string;
    readonly surname: string;
}

function fullName(x: Person): string {
    if(x.secondName)
        return x.name + " " + x.secondName + " " + x.surname;
    else
        return x.name + " "  + x.surname;
}

let testObject = {
    name: "John",
    surname: "Smith",
    age: 42
};
alert(fullName(testObject));

//function errorFullName(x: Person): string {
//    if (x.name = "") return x.surname;
//    else if (x.surname == "") return x.name;
//    else return x.name + " " + x.surname;
//}

interface PersonToModify {
    name: string;
    surname: string;
}

function changeName(x: PersonToModify, newName: string): void {
    x.name=newName;
}

let me: Person ={
    name: "francesco",
    surname: "abbruzzese"
}

changeName(me, "frank");
alert(fullName(me));

//alert(fullName({
//    name: "John",
//    surname: "Smith",
//    age: 42
//}));

interface Point {
    x: number;
    y: number;
    Distance(p1: Point, p2: Point): number;
}

let myPoint: Point =
    {
        x:1,
        y:1,
        Distance: function(p1: Point, p2: Point): number{
            return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) +
                (p1.y - p2.y) * (p1.y - p2.y));
        }
    };

interface CombineStrings {
    (string1: string, string2: string): string;
}

let concat: CombineStrings =
    function (string1: string, string2: string) {
        return string1 + string2;
    };
alert(concat("12", "34"));

interface PhoneBook {
    [index: string]: string
}
let myPhoneBook: PhoneBook = {};
myPhoneBook["John smith"] = "3512421934";

interface ContactData {
    name: string;
    tel: string;
    Country: string;
    Address: string;
}
interface ComplexPhoneBook {
    [index: string]: ContactData
}
let myComplexPhoneBook: ComplexPhoneBook = {};
myComplexPhoneBook["John smith"] = {
    name: "John smith",
    tel: "3512421934",
    Country: "United Kingdom",
    Address: "........."
}
interface ToDoList {
    [number: number]: string
}
let myToDoList: ToDoList = ["todo  1", "todo  1"];
myToDoList[3] = "todo  3";

//myToDoList.push("todo  4"); //wrong
(myToDoList as string[]).push("todo  4"); //correct

interface HybridComplexPhoneBook {
    [index: string]: ContactData
    [index: number]: ContactData
}
let myHybridPhoneBook: HybridComplexPhoneBook = {};
myComplexPhoneBook["John smith"] = {
    name: "John smith",
    tel: "3512421934",
    Country: "United Kingdom",
    Address: "........."
}
myComplexPhoneBook[1] = {
    name: "Francesco Abbruzzese",
    tel: "3333333333",
    Country: "United Kingdom",
    Address: "........."
};

//interface WrongComplexPhoneBook {
//    [index: string]: ContactData
//    [index: number]: string //Wrong string not assignable to ContactData
//}

interface ProductDataScheet {
    [index: string]: string;
    name: string;
    code: string;
    description: string;
}

let myProductDataScheet: ProductDataScheet={
    name: "fast trigger",
    code: "trg-101",
    description: "trigger.....",
    responseTime: "10 microS"
}

//let wrongProductDataScheet: ProductDataScheet = {
//    name: "fast trigger",
//    code: "trg-101",
//    description: "trigger.....",
//    availability: 10 //wrong not assignable to string
//}

interface PhysicalObject {
    weight: number;
    height: number;
    width: number;
    length: number;
}

interface Employed extends Person, PhysicalObject {
    code: string;
    department: string;
    role: string;
}
let marketingDirector: Employed =
{
    code: "145",
    department: "marketing",
    role: "director",
    name: "John",
    surname: "Smith",
    weight: 80,
    width: 50,
    height: 170,
    length: 30
}







