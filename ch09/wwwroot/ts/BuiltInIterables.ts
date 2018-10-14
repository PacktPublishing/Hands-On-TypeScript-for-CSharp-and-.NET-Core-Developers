namespace BuiltInIterables {
    import Person = SymbolExample.Person;
    let friendBook = new Map<string, Person>();
    friendBook.set("John", new Person("John", "Smith"));
    let found = friendBook.get("John");
    if (typeof found !== "undefined")
        alert(found.name + " " + found.surname);
    alert(friendBook.size);
    friendBook
        .forEach((value, key, dict) =>
            { alert(value.surname) })
    friendBook
        .delete("John")
    alert(friendBook.size);

    let mySet = new Set<number>([1, 5, 7, 9]);
    mySet.add(10); 
    alert(mySet.has(10));
    alert(mySet.has(9));
    alert(mySet.has(8));

    alert(mySet.size)

    mySet.forEach((value) => {
        alert(value)
    });

    mySet.delete(9);
    alert(mySet.has(9));
}