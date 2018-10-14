var Invoice = /** @class */ (function () {
    function Invoice(amount, description, reference) {
        this.amount = amount;
        this.description = description;
        this.reference = reference;
    }
    return Invoice;
}());
var testInvoices = [
    new Invoice(600, "computer", "i1"),
    new Invoice(100, "printer", "i2"),
    new Invoice(500, "installation service", "i3")
];
var invoicesTotal = aggregate(testInvoices, function (x, y) {
    return x === undefined ? y.amount : x + y.amount;
});
alert(invoicesTotal);
//# sourceMappingURL=invoices.js.map