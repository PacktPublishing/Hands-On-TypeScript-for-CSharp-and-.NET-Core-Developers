﻿(function () {
    class MyULAppendGrid extends AppendGrid {
        constructor(list: ItemList,
            addButton: HTMLElement,
            itemRootselector: string,
            addItemDataRoot: HTMLElement,
            addBeforeButton?: HTMLElement) {
            super(list, addButton,
                itemRootselector,
                 addItemDataRoot,
                addBeforeButton);
        }
extractDataToAdd(): any {
    return (this.addItemDataRoot as HTMLInputElement).value;
}
itemTemplate(x: any): HTMLElement {
    let str = x as string;
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

    var mainList = new PlainList(
        document.getElementById('main_list') as HTMLElement);
    var addButton =
        document.getElementById('main_add') as HTMLElement;
    var addInput =
        document.getElementById('main_input') as HTMLElement;

    var mainGrid = new MyULAppendGrid(mainList, addButton,
         "li", addInput);



})();