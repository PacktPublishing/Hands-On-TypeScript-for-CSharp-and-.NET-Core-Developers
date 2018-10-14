///<reference path="../../node_modules/reflect-metadata/standalone.d.ts" />
namespace Decorators {
    //export function logClass(target: any) {
    //    //store original constructor
    //    var original = target;

    //    // new constructor that
    //    //will replace original constructor
    //    let newConstructor: any = function (...args:any[]) {
    //        if ((window as any)["_DEBUG"])
    //            console.log("New: " + original.name + " " + args);
    //        //wrap apply-call of original constructor 
    //        //inside a function, because apply
    //        // can't be invoked with new
    //        var caller: any = function () {
    //            return original.apply(this, args);
    //        }
    //        caller.prototype = original.prototype;
    //        return new caller();
    //    }
    //    // copy prototype 
    //    newConstructor.prototype = original.prototype;
    //    // return new constructor
    //    return newConstructor;
    //}
    export function logClass(production?: any)  {
        if (production) return () => { };
        return function(target: any) {
            //store original constructor
            var original = target;

            // new constructor that
            //will replace original constructor
            let newConstructor: any = function (...args: any[]) {
                //if ((window as any)["_DEBUG"])
                    console.log("New: " + original.name + " " + args);
                //wrap apply-call of original constructor 
                //inside a function, because apply
                // can't be invoked with new
                var caller: any = function () {
                    original.apply(this, args);
                }
                caller.prototype = original.prototype;
                return new caller();
            }
            // copy prototype 
            newConstructor.prototype = original.prototype;
            // return new constructor
            return newConstructor;
        }
    }
    export function logMethod(production?: any) {
        if (production) return () => { };
        return function (target: any, propertyKey: string | symbol,
            descriptor: PropertyDescriptor) {
            //store original method
            var original = descriptor.value;

            // new constructor that
            //will replace original constructor
            let newMethod: any = function (...args: any[]) {
                console.log(propertyKey as any + " " + args);
                return original.apply(this, args);
            }
            descriptor.value = newMethod;
        }
    }
    interface stringLengthConstraint {
        index: number,
        limit: number
    }
    const maxStringLengthMetadataKey = Symbol("maxStringLength");
    export function maxStringLength(limit: number) {
        return function (target: any, propertyKey: string | symbol,
            parameterIndex: number ) {
            //retrieve exixting constraints if any
            let previousConstraints: stringLengthConstraint[] =
             Reflect.getOwnMetadata(
                    maxStringLengthMetadataKey,
                    target, propertyKey) || [];
            //add new constraints
            previousConstraints.push({
                index: parameterIndex,
                limit: limit
            });
            //save updated constraints
            Reflect.defineMetadata(
                maxStringLengthMetadataKey,
                previousConstraints, target, propertyKey);
        }
    }
    export function normalizeStrings(production?: any) {
        if (production) return () => { };
        return function (target: any, propertyKey: string | symbol,
            descriptor: PropertyDescriptor) {
            //store original method
            var original = descriptor.value;

            // new method that
            //will replace original one
            let newMethod: any = function (...args: any[]) {
                let constraints: stringLengthConstraint[] =
                    Reflect.getOwnMetadata(
                        maxStringLengthMetadataKey,
                        target, propertyKey) || [];
                for (let item of constraints) {
                    let par = args[item.index];
                    if (typeof par === "string" &&
                        par.length > item.limit)
                        args[item.index] =
                            par.substr(0, item.limit);
                }
                return original.apply(this, args);
            }
            descriptor.value = newMethod;
        }
    }
}