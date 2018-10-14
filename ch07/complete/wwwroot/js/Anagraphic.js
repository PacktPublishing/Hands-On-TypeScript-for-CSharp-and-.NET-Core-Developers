var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, surname, secondName) {
        this.name = name;
        this.surname = surname;
        this.secondName = secondName;
    }
    Person.prototype.fullname = function () {
        return this.secondName !== undefined ?
            this.name + " " + this.secondName + " " + this.surname :
            this.name + " " + this.surname;
    };
    Person.prototype.getString = function () {
        return "\n" + this.fullname() + "\n";
    };
    Person.administrator = new Person("John", "Smith");
    return Person;
}());
export { Person };
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(course, name, surname, secondName) {
        var _this = _super.call(this, name, surname, secondName) || this;
        _this.course = course;
        return _this;
    }
    Teacher.prototype.getString = function () {
        return _super.prototype.getString.call(this) + "techer of: " +
            this.course + "\n";
    };
    return Teacher;
}(Person));
var myPrintable = new Teacher("TypeScript", "Francesco", "Abbruzzese");
export var humanReadable = myPrintable.getString();
//export {Teacher }
export { Teacher as Tutor };
//# sourceMappingURL=Anagraphic.js.map