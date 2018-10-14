let names: string[] = ["Francesco", "Mary", "John"];
let ages: number[] = [14, 18, 35, 40];
let outcomes: number[];
outcomes = [];


let someStrings = ["a string", "another string"];

let numbersAndStrings = ["a string", 12];

let cantInferTypes = [];

cantInferTypes.push(3);

var result: [number, boolean];
var resultWithValue: [number, boolean] = [12, true];

var success: boolean = resultWithValue[1];

function stringToNumber(s: string): [number, boolean]
{
    var res = parseFloat(s);
    if (isNaN(res)) return [0, false];
    else return [res, true];
}

result = stringToNumber("5.7")
if (result[1]) console.log(result[0])
else console.log("error")

result = stringToNumber("not a number")
if (result[1]) console.log(result[0])
else console.log("error")
