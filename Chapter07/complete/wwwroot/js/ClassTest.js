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
(function () {
    //class Person {  
    //    public readonly name: string;
    //    public readonly surname: string;
    //    public readonly secondName?: string;
    //    constructor(name: string, surname: string, secondName?: string) {
    //        this.name = name;
    //        this.surname = surname;
    //        this.secondName = secondName;
    //    }
    //    public fullname(): string {
    //        return this.secondName !== undefined ?
    //            this.name + " " + this.secondName + " " + this.surname :
    //            this.name + " " + this.surname;
    //    }
    //}
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
    var myPerson = new Person("John", "Smith");
    var anotherPerson = new Person("George", "Smith", "Carl");
    var fname = myPerson.fullname();
    var name = myPerson.name;
    //var x: Employed = {
    //    name: "Frank",
    //    surname: "Abbruzzese",
    //    department: "marketing",
    //    code: "1254",
    //    fullname: () => "Frank Abbruzzese"
    //}
    var personMaker = Person;
    var aPerson = new personMaker("Frank", "Smith");
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
    var humanReadable = myPrintable.getString();
    var Product = /** @class */ (function () {
        function Product(availability) {
            this.availability = availability;
        }
        Product.prototype.totalPrice = function (quantity) {
            if (quantity > this.availability)
                quantity = this.availability;
            var unitPrice = this.unitPrice();
            if (quantity >= 5)
                unitPrice *= 0.95;
            else if (quantity >= 10)
                unitPrice *= 0.90;
            else if (quantity >= 20)
                unitPrice *= 0.80;
            else if (quantity >= 100)
                unitPrice *= 0.65;
            return [quantity, quantity * unitPrice];
        };
        Product.prototype.buy = function (quantity) {
            var result = this.totalPrice(quantity);
            this.availability -= result[0];
            return result;
        };
        return Product;
    }());
    var aTeacherOrPerson = new Teacher("TypeScript", "Francesco", "Abbruzzese");
    var myCourse;
    if (aTeacherOrPerson instanceof Teacher)
        myCourse = aTeacherOrPerson.course;
    else
        myCourse = null;
    var mixedArray1 = [new Teacher("TypeScript", "Francesco", "Abbruzzese"),
        new Person("John", "Smith"),
        "simple string"
    ];
})();
//# sourceMappingURL=ClassTest.js.map