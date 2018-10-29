namespace DecoratorsTests {
    (window as any)["_DEBUG"] = true;

    @Decorators.logClass(!(window as any)["_DEBUG"])
    class Product {
        constructor(readonly name: string, readonly model: string)
        { }
        private description: string | null = null;
        @Decorators.normalizeStrings()
        addDescription(
            @Decorators.maxStringLength(20) newName: string) {
            this.description = newName;
        }
        quantity: number=0;
        get fullname(): string {
            
            return (this.description != null ?
                this.description : this.name) + ' ' +
                this.model + ' ';
        }
        @Decorators.logMethod(!(window as any)["_DEBUG"])
        add(x: number): void {
            this.quantity += x;
        }
    }

    let prod = new Product("computer", "32G-1T");
    prod.addDescription(
        "this is a very long, too long description")
    alert(prod.fullname);
    prod.add(1);
    alert(prod.quantity);
}