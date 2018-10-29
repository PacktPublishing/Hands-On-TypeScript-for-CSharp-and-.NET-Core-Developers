//this is module AnagraphicImporter.ts

import * as Anagraphic from "./Anagraphic"

let aPrintable: Anagraphic.IPrintable =
    new Anagraphic.Person("John", "Smith");

alert(Anagraphic.humanReadable);

var teacher =
    new Anagraphic.Tutor("Francesco", "Abbruzzese", "TypeScript");


