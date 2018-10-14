import * as Abstracts from "./AbstractLists";
export default class DOMList<T> implements Abstracts.ItemList<T> {
    readonly itemsParent: HTMLElement;
    itemTemplate: (x: T) => HTMLElement;
    constructor(itemsParent: HTMLElement);
    removeItem(node: HTMLElement): void;
    appendItem(itemData: T): void;
    prependItem(itemData: any): void;
    appendBefore(node: HTMLElement, itemData: T): void;
    appendAfter(node: HTMLElement, itemData: T): void;
}
