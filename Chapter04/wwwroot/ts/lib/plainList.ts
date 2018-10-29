
class PlainList implements ItemList {
    itemTemplate: (x: any) => HTMLElement;
    constructor(readonly itemsParent: HTMLElement) {
    }
    removeItem(node: HTMLElement): void {
        this.itemsParent.removeChild(node);
    }
    appendItem(itemData: any): void {
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
    appendBefore(node: HTMLElement, itemData: any): void {
        this.itemsParent.insertBefore(
            this.itemTemplate(itemData),
            node);
    }
    appendAfter(node: HTMLElement, itemData: any): void {
        if (node.nextSibling)
            this.itemsParent.insertBefore(
                this.itemTemplate(itemData),
                node.nextSibling);
        else this.appendItem(itemData);
    }
}