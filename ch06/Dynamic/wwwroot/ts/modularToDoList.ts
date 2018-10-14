// this modularToDoList.ts module

import * as Abstracts from "./lib/AbstractLists.js"


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
            `<li class="list-group-item">
                <button type="button" class="btn btn-sm" title="remove">
                    <span class="glyphicon glyphicon-minus" aria-hidden="true">
                    </span>
                </button>
                <span>${str}</span>
            </li>`;
            let temp = document.createElement('ul');
            temp.innerHTML = toAdd;
            return temp.firstChild as HTMLElement;
        }
}

//import("./lib/plainList.js")
//    .then(x => {
//        var mainList = new x.default(
//            document.getElementById('main_list') as HTMLElement);
//        var addButton =
//            document.getElementById('main_add') as HTMLElement;
//        var addInput =
//            document.getElementById('main_input') as HTMLElement;

//        var mainGrid = new MyULAppendGrid(mainList, addButton,
//            "li", addInput);
//    })
//    .catch(reason => {
//        alert("an error occurred");
//    });

import((window as any).jQuery ? "./lib/jQueryList.js" : "./lib/plainList.js")
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




    
