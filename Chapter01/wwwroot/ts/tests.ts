var firstName: string = "Francesco";





var surName: string = "Abbruzzese";
 
var myDate: Date = new Date(); //a Date is a complex type
var myString: string = "this is a string"; //string is a simple type
var myNumber: number = 10; //number is a simple type
var myBoolean: boolean = true; //boolean is a simple type
/* Correct all types descend from any */
var x: any = myDate;
x = myString;
x = myNumber;
x = myBoolean;

/* Correct all comlex types descend from object */
var myObject: object = myDate; 

/* Wrong! Simple types do not descend from object */

myObject = myString; 
myObject = myNumber; 
myObject = myBoolean; 

/* correct null type may assume just the null value */
var myNull: null = null;

/* correct undefined type may assume just the undefined value */
var myUndefined: undefined = undefined;

/* Wrong! */
myNull = 10;
myUndefined = 10;


/* value is undefined since variable was not initialized */
var notInitialized: number; 

type NullableString = string | null;

type ExtendedString = string | null | undefined;

var nullCheck: NullableString = null;
var undefinedCheck: ExtendedString = undefined;



type fontStype = "Plain" | "Bold" | "Italic" | "Underlined";

var myFontType = "Bold"; //Right

myFontType = "Red"; //Wrong

type dice = 1 | 2 | 3 | 4 | 5 | 6;

var myDice: dice =5; //Right

myDice = 7; //Wrong



/* Both statements are correct */
var stringOrNumber: string | number = "Hellow";
stringOrNumber = 10;


function sayHello(): void {
    alert("Hello world");
}

/* Wrong! */
function sayHelloWrong(): void {
    alert("Hello world");
    return 1;
}
/* Correct! */
function wrongNumer(x: number): number|void {
    if (x > 0) return x;
}

/* never return type is explicitly declared */
function error(message: string): never {
    throw message;
}
/* never return type is inferred by compiler */
function alwaysinError() {
    return error("there was an error");
}

function endlessLoop(x: string): number {
    while (true) {    
        if (x == "stop") return 1;
    }
}


const enum YesNoAnswer { unknown = 1, yes = unknown + 2, no = yes + 2 };

var myAnswer: YesNoAnswer = YesNoAnswer.unknown | YesNoAnswer.yes;

const enum TextTransformation {
    None = 0, Bold = 1,
    Italic = Bold << 1,
    Underline = Italic << 1,
    Overline = Italic << 1,
    LineThrough = Overline << 1,
    HasLine = Underline | Overline | LineThrough
}

function HasBold(x: TextTransformation): boolean {
    return (x & TextTransformation.Bold) == TextTransformation.Bold;
}





var myAnswer: YesNoAnswer = YesNoAnswer.unknown;

/* when the enum is const this is wrong*/ 
var valueName: string = YesNoAnswer[1];


function fullName(x: string, y: string, spaces: number): string {
    return x + Array(spaces+1).join(' ') + y;
}

var label: string = fullName(firstName, surName, 3);

alert(fullName(firstName, surName, 3) + " Hello");

var aString: string = "this is a string",
    aNumber: number,
    anInteger: number = 1;

const aConstString: string = "this is a string",
    aConstNumber: number = 1.5,
    aConstInteger: number = 1;

aConstInteger = 2;

undeclaredVariable = 1;

let untypedVar;

untypedVar = 1.2; 

var test1 = untypedVar + 2;

var thisIsAString = "a string";

function scopeTest(x: number) {
    
    if (x > 0) {
        var result: number = x;
    }
    else {
        result = -x; //correct result is visible within the whole function
    } 
    return result; //correct result is visible within the whole function
}

function scopeTestLet(x: number) {

    if (x > 0) {
        let result: number = x;
    }
    else {
        result = -x; //error result is undefined here
    }
    return result; //error result is undefined here
}



for (let j = 0; i < 5; j++) {
    setTimeout(function () { console.log(j) }, 1000);
}
function tryConvertNumber(x: string): string | number {
    var res = parseFloat(x);
    if (isNaN(res)) return x;
    else return x;
}
let letbumberAsAString: string = "5";


let newNumber: number = tryConvertNumber(letbumberAsAString) as number;

let person = {
    name: "francesco",
    surname: "abbruzzese",
    title: "Mr."
};

let hello: string = `Hello ${person.title + ' ' + person.name} ${person.name}`;


