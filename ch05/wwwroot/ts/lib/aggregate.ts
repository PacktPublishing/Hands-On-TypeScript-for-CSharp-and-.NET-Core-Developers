function aggregate<M, T>(items: T[],
    rule: (x: M | undefined, t: T) => M): M | undefined {
    var partialResult: M | undefined;
    for (let y of items)
        partialResult = rule(partialResult, y);
    return partialResult;
}