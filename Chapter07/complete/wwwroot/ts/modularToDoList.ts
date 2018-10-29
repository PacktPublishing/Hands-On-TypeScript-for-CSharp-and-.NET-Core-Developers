// this modularToDoList.ts module
import * as Abstracts from "./lib/AbstractLists"
//import DOMList from "./lib/plainList"
import 'bootstrap';
import "../css/site.css";
var banner = require("../images/banner2.svg");
var template = require("../html/item_template.html");

class MyULAppendGrid extends Abstracts.AppendGrid<string> {
    constructor(list: Abstracts.ItemList<string>,
            addButton: HTMLElement,
            itemRootselector: string,
            addItemDataRoot: HTMLElement,
            addBeforeButton?: HTMLElement) {
            super(list, addButton,
                itemRootselector,
                 addItemDataRoot,
                addBeforeButton);
        }
        extractDataToAdd(): string {
            return (this.addItemDataRoot as HTMLInputElement).value;
        }
        itemTemplate(str: string): HTMLElement {
            let toAdd =
                (template as string).replace("-par0-", str);
            let temp = document.createElement('ul');
            temp.innerHTML = toAdd;
            return temp.firstChild as HTMLElement;
        }
}
(document.getElementById("banner") as HTMLImageElement).src = banner as string;
import(/* webpackChunkName: "plainList" */ "./lib/plainList")
    .then(x => {
        var mainList: Abstracts.ItemList<string> = new x.default(
            document.getElementById('main_list') as HTMLElement);
        var addButton =
            document.getElementById('main_add') as HTMLElement;
        var addInput =
            document.getElementById('main_input') as HTMLElement;

        var mainGrid = new MyULAppendGrid(mainList, addButton,
            "li", addInput);
    })
    .catch(reason => {
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
    
