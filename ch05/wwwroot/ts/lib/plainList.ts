
class PlainList<T> implements ItemList<T> {
    itemTemplate: (x: T) => HTMLElement;
    constructor(readonly itemsParent: HTMLElement) {
    }
    removeItem(node: HTMLElement): void {
        this.itemsParent.removeChild(node);
    }
    appendItem(itemData: T): void {
        this.itemsParent.appendChild(this.itemTemplate(itemData));
    }
    prependItem(itemData: any): void {
        if (this.itemsParent.childElementCount === 0)
            this.appendItem(itemData);
        else
            this.itemsParent.insertBefore(
                this.itemTemplate(itemData),
                (this.itemsParent.firstChild as HTMLElement));
    }
    appendBefore(node: HTMLElement, itemData: T): void {
        this.itemsParent.insertBefore(
            this.itemTemplate(itemData),
            node);
    }
    appendAfter(node: HTMLElement, itemData: T): void {
        if (node.nextSibling)
            this.itemsParent.insertBefore(
                this.itemTemplate(itemData),
                node.nextSibling);
        else this.appendItem(itemData);
    }
}