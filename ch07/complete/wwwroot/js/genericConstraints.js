function concatenateAll() {
    var list = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        list[_i] = arguments[_i];
    }
    if (list.length == 0)
        return undefined;
    var curr = list[0];
    for (var i = 1; i < list.length; i++)
        curr = curr.concat(list[i]);
    return curr;
}
var stringConcat = concatenateAll("a", "b", "c");
var arrayConcat = concatenateAll([1, 2, 3], [4, 5], [6, 7]);
var computerFamily = /** @class */ (function () {
    function computerFamily() {
        this.map = {};
    }
    computerFamily.prototype.setAvailable = function (model, quantity) {
        this.map[model] = quantity;
    };
    computerFamily.prototype.getAvailable = function (model) {
        return this.map[model] || 0;
    };
    computerFamily.prototype.sell = function (model) {
        var av = this.getAvailable(model);
        if (av > 0) {
            this.setAvailable(model, av - 1);
            return true;
        }
        else
            return false;
    };
    return computerFamily;
}());
var myComputerFamily = new computerFamily();
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
var OptionCloner = /** @class */ (function () {
    function OptionCloner(builder) {
        this.builder = builder;
    }
    OptionCloner.prototype.clone = function (x) {
        var result = new this.builder();
        for (var att in x) {
            var p = x[att];
            if (typeof p !== "function")
                result[att] = x[att];
        }
        return result;
    };
    OptionCloner.prototype.overrideDefaults = function (defaults, overrides) {
        var result = this.clone(defaults);
        for (var att in overrides) {
            var source = overrides[att];
            if (source !== undefined && typeof source != "function")
                result[att] = source;
        }
        return result;
    };
    return OptionCloner;
}());
var GraphicStyle = /** @class */ (function () {
    function GraphicStyle() {
    }
    GraphicStyle.prototype.colors = function () {
        return this.foregroundColor + " " + this.backgroundColor;
    };
    GraphicStyle.prototype.pencil = function () {
        return this.pencilWidth + " " + this.backgroundColor;
    };
    return GraphicStyle;
}());
var defaultGraphicStyle = new GraphicStyle();
defaultGraphicStyle.pencilType = "continuous";
defaultGraphicStyle.pencilWidth = 2;
defaultGraphicStyle.foregroundColor = "black";
defaultGraphicStyle.backgroundColor = "white";
var graphicStylecloner = new OptionCloner(GraphicStyle);
var overridenStyle = graphicStylecloner.overrideDefaults(defaultGraphicStyle, {
    pencilType: "dotted",
    foregroundColor: "red"
}).pencil();
//# sourceMappingURL=genericConstraints.js.map