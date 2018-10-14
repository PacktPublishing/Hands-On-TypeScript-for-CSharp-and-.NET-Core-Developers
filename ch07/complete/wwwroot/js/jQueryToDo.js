(function ($) {
    var listRoot = $("#main_list");
    listRoot.on("click", function (event) {
        var button = $(event.target).closest("BUTTON");
        if (button.length === 0)
            return;
        button.closest("LI").remove();
    });
    var mainAdd = $("#main_add");
    mainAdd.click(function (event) {
        var toAdd = "<li class=\"list-group-item\">\n                <button type=\"button\" class=\"btn btn-sm\" title=\"remove\">\n                    <span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span>\n                </button>\n                <span>" + $("#main_input").val() + "</span>\n            </li>";
        listRoot.append(toAdd);
    });
})(jQuery);
//# sourceMappingURL=jQueryToDo.js.map