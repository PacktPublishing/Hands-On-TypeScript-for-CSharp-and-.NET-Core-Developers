interface IConcatenable<T> {
    concat(x: T) : T;
}

function concatenateAll<T extends IConcatenable<T>>(...list: T[]): T|undefined {
    if (list.length == 0) return undefined;
    let curr: T = list[0];
    for (let i = 1; i < list.length; i++)
        curr = curr.concat(list[i]);
    return curr;
}

let stringConcat = concatenateAll<string>("a", "b", "c");
let arrayConcat = concatenateAll<number[]>([1, 2, 3], [4, 5], [6, 7]);

type computerMemory = "4" | "8" | "16" | "32" | "64" | "128";
interface IndexableQuantity {
    [s: string]: number;
}
class computerFamily<K extends computerMemory>
{
    private map: IndexableQuantity = {};
    setAvailable(model: K, quantity: number) {
        this.map[model] = quantity;
    }
    getAvailable(model: K): number {
        return this.map[model] || 0;
    }
    sell(model: K): boolean {
        var av = this.getAvailable(model);
        if (av > 0) {
            this.setAvailable(model, av - 1);
            return true;
        }
        else return false;
    }
}

let myComputerFamily = new computerFamily<"8" | "16">();

myComputerFamily.setAvailable("16", 100); //Correct "16" is in "8" | "16"

//myComputerFamily.setAvailable("32", 100); //Wrong. Visual Studio signals an error

//class OptionCloner<O>{
//    constructor(readonly builder: { new(): O; }) {
//    }
//    clone(x: O): O {
//        let result = new this.builder();
//        for (let att in x) {
//            let p = x[att];
//            if (typeof p !== "function")
//                result[att] = x[att];
//        }
//        return result;
//    }
//    overrideDefaults(defaults: O,
//        overrides: any): O {
//        let result = this.clone(defaults);
//        for (let att in overrides)
//            (result as any)[att] = overrides[att];
//        return result;
//    }
//}

class OptionCloner<O>{
    constructor(readonly builder: { new(): O; }) {
    }
    clone(x: O): O {
        let result = new this.builder();
        for (let att in x) {
            let p = x[att];
            if (typeof p !== "function")
                result[att] = x[att];
        }
        return result;
    }
    overrideDefaults(defaults: O,
        overrides: Partial<O>): O {
        let result = this.clone(defaults);
        for (let att in overrides) {
            let source = overrides[att];
            if(source !== undefined && typeof source != "function")
                (result as any)[att] = source;
        }      
        return result;
    }
}

class GraphicStyle {
    pencilWidth: number;
    pencilType: string;
    foregroundColor: string;
    backgroundColor: string;
    colors(): string {
        return this.foregroundColor + " " + this.backgroundColor;
    }
    pencil(): string {
        return this.pencilWidth + " " + this.backgroundColor;
    }
}

let defaultGraphicStyle = new GraphicStyle();
defaultGraphicStyle.pencilType = "continuous";
defaultGraphicStyle.pencilWidth = 2;
defaultGraphicStyle.foregroundColor = "black";
defaultGraphicStyle.backgroundColor = "white";



var graphicStylecloner = new OptionCloner(GraphicStyle);

let overridenStyle = graphicStylecloner.overrideDefaults(defaultGraphicStyle,
    {
        pencilType: "dotted",
        foregroundColor: "red"

    }).pencil();

type LikeGraphicStyle = {
    [s in keyof GraphicStyle]: GraphicStyle[s];
}

type interface<T> =
{
   [P in keyof T]: T[P]
}















