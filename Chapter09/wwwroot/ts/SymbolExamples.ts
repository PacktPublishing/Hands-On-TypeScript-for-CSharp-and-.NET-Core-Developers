namespace SymbolExample {
    let unNamedSymbol = Symbol(); //symbol without a description
    let namedSymbol = Symbol("I am a named symbol"); //symbol with a description

    let s1 = Symbol("s");
    let s2 = Symbol("s");
    alert(s1 == s2); //display false
    
    //symbol used as object property
    let o1: any = {};
    o1[s1] = 1;
    alert(o1[s1]);

    export let className = Symbol("className");
    export let toString = Symbol("toString");
    export class Person {
        constructor(public name: string, public surname: string) {
        }
        [Symbol.toPrimitive](hint: string) {
            if (hint == 'string') {
                return this.name + " " + this.surname;
            }
            else return null;
        }
        get [Symbol.toStringTag]() {
            return "Person";
        }
        [Symbol.search](stringTosearch: string) {
            return stringTosearch
                .indexOf(this.name + " " + this.surname)
        }
        [Symbol.replace](stringTosearch: string, replacer: any) {
            var fullName = this.name + " " + this.surname;
            var index = stringTosearch.indexOf(fullName);
            if (index === -1) {
                return stringTosearch;
            }
            if (typeof replacer === 'function') {
                replacer = replacer.call(undefined,
                    fullName, stringTosearch);
            }
            return stringTosearch.slice(0, index)+
                replacer +
                stringTosearch.slice(index + fullName.length);
        }
        [Symbol.split](string: string) {
            var fullName = this.name + " " + this.surname;
            var index = string.indexOf(fullName);
            if (index === -1) {
                return string;
            }
            return [string.substr(0, index),
                string.substr(index + fullName.length)];
        }
        //symbol used as method name
        [toString]() {
            return this.name + " " + this.surname;
        }
        //symbol used as computed property name
        get [className]() {
            return "Person";
        }
       
    }

    let anObject: any = new Person("Francesco", "Abbruzzese");

    //alert(anObject[className]);

    //alert(anObject[toString]());
    alert(anObject);

    //string defining member
    let string1 = "aProperty";
    let objectWithStrings: any = {
        [string1] : 1
    };
    
    let string2 = "aProperty";

    //both display 1
    alert(objectWithStrings[string1])
    alert(objectWithStrings[string2])

    //symbol defining member
    let symbol1 = Symbol("aProperty");
    let objectWithSymbols: any = {
        [symbol1]:1
    };

    let symbol2 = Symbol("aProperty");

    //displays 1
    alert(objectWithSymbols[symbol1])
    //displays undefined 
    alert(objectWithSymbols[symbol2])
    let toSearch =
        "This book was written by Francesco Abbruzzese";
    //should display 25
    alert(toSearch.search(anObject));
    //should display: This book was written by its author
    alert(toSearch.replace(anObject, "its author"));
    let toSplit =
        "This string will be split in two parts" +
        " by Francesco Abbruzzese, isn't it?";
    //should display 2
    alert(toSplit.split(anObject).length);
}