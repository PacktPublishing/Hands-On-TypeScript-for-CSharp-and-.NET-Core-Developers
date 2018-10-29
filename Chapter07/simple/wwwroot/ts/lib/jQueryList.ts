//this is lib/jQueryList.ts module

import * as Abstracts from "./AbstractLists"

export default class DOMList<T> implements Abstracts.ItemList<T> {
    itemTemplate: (x: T) => HTMLElement;
    constructor(readonly itemsParent: HTMLElement) {
    }
    removeItem(node: HTMLElement): void {
        $(this.itemsParent).remove();
    }
    appendItem(itemData: T): void {
        $(this.itemsParent)
            .append(this.itemTemplate(itemData));
    }
    prependItem(itemData: T): void {
        $(this.itemsParent)
            .prepend(this.itemTemplate(itemData));
    }
    appendBefore(node: HTMLElement, itemData: T): void {
        $(node).before(this.itemTemplate(itemData));
        
    }
    appendAfter(node: HTMLElement, itemData: T): void {
        $(node).after(this.itemTemplate(itemData));
    }
}