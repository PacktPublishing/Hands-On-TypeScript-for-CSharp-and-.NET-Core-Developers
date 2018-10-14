function aggregate(items, rule) {
    var partialResult;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var y = items_1[_i];
        partialResult = rule(partialResult, y);
    }
    return partialResult;
}
//# sourceMappingURL=aggregate.js.map