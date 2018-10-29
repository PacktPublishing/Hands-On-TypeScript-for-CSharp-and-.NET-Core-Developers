Add the file tree to an Asp.net core project.
Put each file in the same Asp.net core folder it is here.

The first time you open project in visual studio
Right Click on the npm folder under the Dependencies node in
Solution Explorer and then select "Restore Packages".


Use a browser like Chrome that has native support for
JavaScript modules

Then:

1) Use Anagraphic1.ts, AnagraphicImporter.ts, AnagraphicImporter1.ts, AnagraphicImporter2.ts, AnagraphicImporter3.ts 
to test the various modules features
with the help of visual studio debugger and intellisense as suggested in the book.

2) You may switch between the plain TypeScript implementation of
ToDo list to the Jquery implementation by the import statement on the top of
modularToDoList.ts:

import DOMList from "./lib/plainList.js"

or

import DOMList from "./lib/jQueryList.js"


