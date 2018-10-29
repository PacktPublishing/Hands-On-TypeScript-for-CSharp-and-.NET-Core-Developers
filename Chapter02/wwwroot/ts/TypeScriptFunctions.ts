let repeatStringUntyped = function (s: string, n: number): string {
    let result = "";
    for (let i = 1; i < n; i++) result += s;
    return result;
}

let repeatStringTyped: (s: string, n: number) => string = function (s, n): string {
    let result = "";
    for (let i = 1; i < n; i++) result += s;
    return result;
}

type SingleStringAggregator = (s: string, n: number) => string;

interface SingleStringAggregatorInterface {
    (s: string, n: number) : string
}

let repeatStringWithNamedType: SingleStringAggregatorInterface = function (s, n): string {
    let result = "";
    for (let i = 1; i < n; i++) result += s;
    return result;
}

function buildFullName(firstname: string,
    surname: string, secondName?: string): string {
    if (secondName === undefined) return firstname + " " + surname;
    else return firstname + " " + secondname+ " " + surname;
}

alert(buildFullName("Francesco", "Abbruzzese"));

function repeatString(s: string, n: number = 2): string {
    let result = "";
    for (let i = 1; i < n; i++) result += s;
    return result;
}
alert(repeatString("Hello"));

function stringConcat(s1: string, s2: string, ...others: string[]): string {
    let result: string = s1 + s2;
    for (let s of others) result += s;
    return result;
}

//alert(stringConcat("First")); // wrong!
alert(stringConcat("First", "Second"));
alert(stringConcat("First", "Second", "Third"));
alert(stringConcat("First", "Second", "Third", "Fourth"));

interface CompleteName {
    firstname: string;
    secondname?: string;
    surname: string;
}

function PrintCompleteName({ firstname, secondname = "", surname }: CompleteName): string {
    return firstname + " " + secondname + " " + surname;
}
let myName = {
    firstname: "francesco",
    surname: "abbruzzese"
}
alert(PrintCompleteName(myName));

function aggregateStrings(s: string, n: number): string;
function aggregateStrings(s1: string, s2: string, ...others: string[]): string;
function aggregateStrings(s: string, x: string | number, ...others: string[]): string {
    if (typeof x == "number") {
        let result = "";
        for (let i = 1; i < x; i++) result += s;
        return result;
    }
    else {
        let result: string = s + x;
        for (let cs of others) result += cs;
        return result;
    }
}

//aggregateStrings("first", 2, "last");//wrong

let addition = (x: number, y: number) => x + y;

let additions = (x: number, y: number, ...others: number[]) => {
    let result: number = x + y;
    for (let x of others) result += x;
    return result;
}

class Product {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.price = price;
        this.name = name;
    }
    finalPriceProcessor() { return  (n: number) => n * this.price;  }
}
var product = new Product("laptop", 1000);
var priceProcessor = product.finalPriceProcessor();
alert(priceProcessor(2));


