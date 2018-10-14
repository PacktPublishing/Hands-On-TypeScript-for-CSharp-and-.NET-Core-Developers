interface Person {
    readonly name: string;
    readonly secondName?: string;
    readonly surname: string;
}

interface PhysicalObject {
    weight: number;
    height: number;
    width: number;
    length: number;
}

type PhysicalPerson = Person & PhysicalObject;

let myIntersectionObject = {
    name: "John",
    surname: "Smith",
    weight: 80,
    width: 50,
    height: 170,
    length: 30
};

let myPhysicalPerson: PhysicalPerson = myIntersectionObject;

//interface PhysicalPerson extends Person, PhysicalObject {
//};

interface Employed extends Person, PhysicalObject {
    code: string;
    department: string;
    role: string;
}
let myEmployed: Employed =
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
myPhysicalPerson = myEmployed;

function showErrors(x: string | string[]): void{
    if (typeof x == "string") {
        alert(x);
    }
    else {
        for(let s of x) alert(s);
    }
}

interface Company {
    name: string;
    vat?: string;
    registration: string;
}
type Customer = Company | Person;
function isCompany(x: Customer): x is Company
{
    return (<Company>x).registration !== undefined;
}
function swowCustomer(x: Customer) {
    if (isCompany(x)) alert(x.name);
    else alert(x.name + " " + x.surname);
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
interface Triangle {
    kind: "triangle";
    side1: number;
    side2: number;
    side3: number;
}

type SimpleShape = Triangle | Rectangle | Circle;

function simpleShapeArea(s: SimpleShape): number {
    switch (s.kind) {
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        case "triangle": //Heron's formula 
            return Math.sqrt((s.side1 + s.side2 + s.side3) +
                (-s.side1 + s.side2 + s.side3) +
                (s.side1 - s.side2 + s.side3) +
                (s.side1 + s.side2 - s.side3)
            ) / 4;
    }
}








