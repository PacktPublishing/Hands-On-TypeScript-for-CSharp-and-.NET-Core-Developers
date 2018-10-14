Add the file tree to an Asp.net core project.
Put each file in the same Asp.net core folder it is here.

The first time you open project in visual studio
Right Click on the npm folder under the Dependencies node in
Solution Explorer and then select "Restore Packages".

Then:

1) Use DOMTests.ts to test the various DOM objects
properties with the help of visual studio intellisense as suggested in the book.

2) You may switch between the plain TypeScript implementation of
ToDo list to the Jquery implementation by replacing the JavaScript reference
at the bottom of Views/Home/Index.cshtml:

@section Scripts{
<script src="~/js/<name of chosen implementation>.js"></script>
}