Add the file tree to an Asp.net core project.
Put each file in the same Asp.net core folder it is here.

The first time you open project in visual studio
Right Click on the npm folder under the Dependencies node in
Solution Explorer and then select "Restore Packages".


Then:

1) Use ClassTest.ts to test the various class features
with the help of visual studio debugger and intellisense as suggested in the book.

2) You may switch between the plain TypeScript implementation of
ToDo list to the Jquery implementation by replacing the JavaScript reference
at the bottom of Views/Home/Index.cshtml:

@section Scripts{
<script src="~/js/lib/AbstractLists.js"></script>
<script src="~/js/lib/<chosen implementation>.js"></script>
<script src="~/js/modularToDoList.js"></script>
}