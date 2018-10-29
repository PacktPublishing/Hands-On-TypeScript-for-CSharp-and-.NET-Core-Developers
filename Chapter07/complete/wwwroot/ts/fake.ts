import * as Abstracts from "./lib/AbstractLists"
import DOMList from "./lib/plainList"
import 'bootstrap';

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
        mainList = new DOMList(
            document.getElementById('main_list') as HTMLElement);
        mainGrid.replaceList(mainList);
    });
}