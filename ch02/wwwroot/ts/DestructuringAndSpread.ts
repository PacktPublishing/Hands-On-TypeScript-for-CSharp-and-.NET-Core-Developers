
let fruits = ["banana", "apple", "pear", "strawberry", "cherry", "peach"];

let first, second, third;

[first, second, third] = fruits;

let [newfirst, newsecond, newthird] = fruits;

let [, , , fourth, , sixth] = fruits;

let rest: string[];

[first, second, , ...rest] = fruits;

function stringToNumber1(s: string): [number, boolean] {
    var res = parseFloat(s);
    if (isNaN(res)) return [0, false];
    else return [res, true];
}

let [toShow, ok] = stringToNumber1("5.7")
if (ok) console.log(toShow)
else console.log("error")

let firstArray: string[] = ["a", "b", "c"];
let secondArray: string[] = ["f", "g", "h"];

let arraySpread = [...firstArray, "d", ...secondArray, "i"];

interface PersonalDetails{
    firstname: string;
    secondname?: string;
    address: string;
    surname: string;
    
}

let mary: PersonalDetails = {
    firstname: "mary",
    surname: "smith",
    address: "....."
    
}

let surname: string, secondname: string | undefined;

({ surname, secondname } = mary);

let marySurname: string, marySecondname: string | undefined;
({ surname: marySurname, secondname: marySecondname } = mary);

let { surname: newMarySurname, secondname: newMarySecondname } = mary;

//let { surname: newMarySurname, secondname: newMarySecondname }:
//    { surname: string, secondname?: string | undefined } = mary;

({ surname: marySurname, secondname: marySecondname = "no second name" } = mary);

let { firstname: maryName, ...maryOthers } = mary;

interface Product {
    name: string;
    price: number;
    description: string
}

let laptop: Product = {
    name: "surface pro",
    price: 400,
    description: "....."
}
let quantity = 2;
let sale = {
    quantity: quantity,
    ...laptop,
    totalPrice: quantity * laptop.price
}

let saleDiscount= 0.8;
let discountedSale = {
    quantity: quantity,
    ...laptop,
    price: laptop.price * saleDiscount,
    totalPrice: quantity * laptop.price * saleDiscount
}

let laptopCloen = { ...laptop };

let optionsDefaults = {
    option1: "default1",
    option2: "default2"
}

let options = {
    ...optionsDefaults,
    option2: "custom value"
}







