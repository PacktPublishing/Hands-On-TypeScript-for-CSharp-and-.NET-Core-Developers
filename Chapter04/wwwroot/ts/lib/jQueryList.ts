class JQueryList implements ItemList {
    itemTemplate: (x: any) => HTMLElement;
    constructor(readonly itemsParent: HTMLElement) {
    }
    removeItem(node: HTMLElement): void {
        $(this.itemsParent).remove();
    }
    appendItem(itemData: any): void {
        $(this.itemsParent)
            .append(this.itemTemplate(itemData));
    }
    prependItem(itemData: any): void {
        $(this.itemsParent)
            .prepend(this.itemTemplate(itemData));
    }
    appendBefore(node: HTMLElement, itemData: any): void {
        $(node).before(this.itemTemplate(itemData));
        
    }
    appendAfter(node: HTMLElement, itemData: any): void {
        $(node).after(this.itemTemplate(itemData));
    }
}