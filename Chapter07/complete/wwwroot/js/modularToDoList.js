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
// this modularToDoList.ts module
import * as Abstracts from "./lib/AbstractLists";
//import DOMList from "./lib/plainList"
import 'bootstrap';
import "../css/site.css";
var banner = require("../images/banner2.svg");
var template = require("../html/item_template.html");
var MyULAppendGrid = /** @class */ (function (_super) {
    __extends(MyULAppendGrid, _super);
    function MyULAppendGrid(list, addButton, itemRootselector, addItemDataRoot, addBeforeButton) {
        return _super.call(this, list, addButton, itemRootselector, addItemDataRoot, addBeforeButton) || this;
    }
    MyULAppendGrid.prototype.extractDataToAdd = function () {
        return this.addItemDataRoot.value;
    };
    MyULAppendGrid.prototype.itemTemplate = function (str) {
        var toAdd = template.replace("-par0-", str);
        var temp = document.createElement('ul');
        temp.innerHTML = toAdd;
        return temp.firstChild;
    };
    return MyULAppendGrid;
}(Abstracts.AppendGrid));
document.getElementById("banner").src = banner;
import(/* webpackChunkName: "plainList" */ "./lib/plainList")
    .then(function (x) {
    var mainList = new x.default(document.getElementById('main_list'));
    var addButton = document.getElementById('main_add');
    var addInput = document.getElementById('main_input');
    var mainGrid = new MyULAppendGrid(mainList, addButton, "li", addInput);
})
    .catch(function (reason) {
    alert("an error occurred");
});
/*
    var mainList = new DOMList(
        document.getElementById('main_list') as HTMLElement);
    var addButton =
        document.getElementById('main_add') as HTMLElement;
    var addInput =
        document.getElementById('main_input') as HTMLElement;

    var mainGrid = new MyULAppendGrid(mainList, addButton,
        "li", addInput);

if (module.hot) {
    module.hot.accept("./lib/plainList", () => {
        var mainList = new DOMList(
            document.getElementById('main_list') as HTMLElement);
        var mainGrid.replaceList(mainList);
    });
}*/
//# sourceMappingURL=modularToDoList.js.map