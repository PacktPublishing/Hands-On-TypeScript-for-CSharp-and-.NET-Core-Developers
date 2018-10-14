Add the file tree to an Asp.net core project.
Put each file in the same Asp.net core folder it is here.
Then add the code snippet below at the bottom of
Views/Home/index.cshtml:
@section Scripts{ 
    <script src="~/js/tests.js"></script>
    
}
Then follow instructions in the book