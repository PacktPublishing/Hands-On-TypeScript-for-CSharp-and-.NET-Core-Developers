
class Invoice {
    constructor(readonly amount: number,
        readonly description: string,
        readonly reference: string) {
    }
}

let testInvoices: Invoice[] =
    [
        new Invoice(600, "computer", "i1"),
        new Invoice(100, "printer", "i2"),
        new Invoice(500, "installation service", "i3")
    ];

let invoicesTotal =
    aggregate(testInvoices,
        (x: number | undefined, y: Invoice) =>
            x === undefined ? y.amount : x + y.amount);

alert(invoicesTotal);

