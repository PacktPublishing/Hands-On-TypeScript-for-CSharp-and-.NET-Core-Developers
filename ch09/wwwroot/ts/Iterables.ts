namespace Iterables {

    function getNumberIterator(x: number): Iterator<number> {
        let i = 0;
        let iterator = {
            next: function (): IteratorResult<number>  {
                
                return {
                    done: i > x,
                    value: i++
                }
                
            }
        };
        return iterator;      
    }
    let iterator5 = getNumberIterator(5);
    let curr: IteratorResult<number>;
    while (!(curr = iterator5.next()).done) alert(curr.value);

    //class NumberIterable implements Iterable<number>
    //{
    //    constructor(readonly x: number) { }
    //    [Symbol.iterator] = () => {
    //        let i = 0;
    //        return {
            
    //            next:  () => {

    //                return {
    //                    done: i > this.x,
    //                    value: i++
    //                }

    //            }
    //        };
    //    };
    //}
    class NumberIterable implements Iterable<number>
    {
        constructor(readonly x: number) { }
        * [Symbol.iterator](){
            for (let i = 0; i <= this.x; i++) yield i;
        };
    }
    let iterable5 = new NumberIterable(5);

    for (let item of iterable5){
        alert(item);
    }
    export class DOMTreeIterable implements Iterable<Element>
    {
        constructor(readonly root: Element) { }
        *[Symbol.iterator](): Iterator<Element> {
            yield this.root;
            for (let child of this.root.children) {
                yield* new DOMTreeIterable(child);
            };
        }
    }
    for (let item of new DOMTreeIterable(document.body)) {
        console.log(item.tagName);
    }
    export class EnhancedArray<T> extends Array<T>
    {
        constructor(x: number);
        constructor(...items: T[])
        constructor(x: Iterable<T>);
        constructor(x?: number | Array<T> | Iterable<T>) {
            if (typeof x === "undefined") super();
            else if (x instanceof Array) super(...x);
            else if (typeof x == "number") super(x)
            else {
                super();
                for (let item of x) this.push(item);
            }
        }
        get [Symbol.isConcatSpreadable]() {
            return false;
        }
    }
    let arrayTest =
        new EnhancedArray(new DOMTreeIterable(document.body));
    
}