export interface ItemList<T> {
    appendItem(itemData: T): void;
    prependItem(itemData: any): void;
    appendBefore(node: HTMLElement, itemData: T): void;
    appendAfter(node: HTMLElement, itemData: T): void;
    removeItem(node: HTMLElement): void;
    itemTemplate: (x: T) => HTMLElement;
    readonly itemsParent: HTMLElement;
}
export declare abstract class AppendGrid<T> {
    protected list: ItemList<T>;
    protected addButton: HTMLElement;
    protected itemRootSelector: string;
    protected addItemDataRoot: HTMLElement;
    protected addBeforeButton?: HTMLElement | undefined;
    constructor(list: ItemList<T>, addButton: HTMLElement, itemRootSelector: string, addItemDataRoot: HTMLElement, addBeforeButton?: HTMLElement | undefined);
    replaceList(list: ItemList<T>): void;
    protected abstract itemTemplate(x: T): HTMLElement;
    protected abstract extractDataToAdd(): T;
    private static findAncestor;
}
