interface ItemList {
    appendItem(itemData: any): void;
    prependItem(itemData: any): void;
    appendBefore(node: HTMLElement, itemData: any): void;
    appendAfter(node: HTMLElement, itemData: any): void;
    removeItem(node: HTMLElement): void;
    itemTemplate: (x: any) => HTMLElement;
    readonly itemsParent: HTMLElement;
}

abstract class AppendGrid {
    constructor(protected list: ItemList,
        protected addButton: HTMLElement,
        protected itemRootSelector: string,
        protected addItemDataRoot: HTMLElement,
        protected addBeforeButton?: HTMLElement) {
        this.list.itemTemplate = this.itemTemplate;
        this.list.itemsParent.addEventListener("click",
            (evt: MouseEvent) => {
                let button = AppendGrid.findAncestor(
                    evt.target as HTMLElement,
                    "button");
                let target = AppendGrid.findAncestor(
                    button,
                    itemRootSelector);
                if (target != null )
                    list.removeItem(target);
            });
        this.addButton.addEventListener("click",
            (evt: MouseEvent) => {
                list.appendItem(this.extractDataToAdd());
            });
        if (this.addBeforeButton) {
            this.addBeforeButton.addEventListener("click",
                (evt: MouseEvent) => {
                    list.prependItem(this.extractDataToAdd());
                });
        }
        
    }
    protected abstract itemTemplate(x: any): HTMLElement;
    protected abstract extractDataToAdd(): any; 
    private static findAncestor(n: HTMLElement | null,
                   selector: string): HTMLElement | null {
        while (n != null && n.tagName != "BODY") {
            if (n.matches && n.matches(selector)) return n;
            else if (n.webkitMatchesSelector
                && n.webkitMatchesSelector(selector)) return n;
            n = n.parentNode as HTMLElement;
        }
        return null;
    }
}