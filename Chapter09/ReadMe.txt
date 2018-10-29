Add the file tree to an Asp.net core project.
Put each file in the same Asp.net core folder it is here.

The first time you open project in visual studio
Right Click on the npm folder under the Dependencies node in
Solution Explorer and then select "Restore Packages".


To test Symbols in the debugger, add the code below to
the bottom of Views/Home/Index.cshtml:
@section Scripts{ 
    <script src="~/js/SymbolExamples.js"></script>
}


To test Iterable in the debugger, add the code below to
the bottom of Views/Home/Index.cshtml:
@section Scripts{ 
<script src="~/js/Iterables.js"></script>
}


To test built-in iterables in the debugger, add the code below to
the bottom of Views/Home/Index.cshtml:
@section Scripts{ 
    <script src="~/js/BuiltInIterables.js"></script>
}


To test fetch and Promises in the debugger, add the code below to
the bottom of Views/Home/Index.cshtml:
@section Scripts{ 
<script src="~/js/ApiCall.js"></script>
}

To test decorators and reflection in the debugger, add the code below to
the bottom of Views/Home/Index.cshtml:

@section Scripts{ 
<script src="~/js/Reflect.js"></script>
<script src="~/js/Decorators.js"></script>
<script src="~/js/DecoratorsTests.js"></script>
}


