(function () {
    function findAncestor(n, tag) {
        while (n != null && n.tagName != "BODY") {
            if (n.tagName == tag)
                return n;
            n = n.parentNode;
        }
        return null;
    }
    function findAncestorExt(n, selector) {
        while (n != null && n.tagName != "BODY") {
            if (n.matches && n.matches(selector))
                return n;
            else if (n.msMatchesSelector && n.msMatchesSelector(selector))
                return n;
            else if (n.webkitMatchesSelector && n.webkitMatchesSelector(selector))
                return n;
            n = n.parentNode;
        }
        return null;
    }
    var listRoot = document.getElementById("main_list");
    listRoot.addEventListener("click", function (evt) {
        var button = findAncestor(evt.target, "BUTTON");
        var target = findAncestor(button, "LI");
        if (target != null && target.parentNode != null)
            target.parentNode.removeChild(target);
    });
    var mainAdd = document.getElementById("main_add");
    if (mainAdd != null)
        mainAdd.addEventListener("click", function (evt) {
            var textSpan = document.createElement("span");
            //create span with text
            textSpan.innerText = " " + document.getElementById("main_input").value;
            //create span with icon to put inside button
            var iconSpan = document.createElement("span");
            iconSpan.setAttribute("aria-hidden", "true");
            iconSpan.setAttribute("class", "glyphicon glyphicon-minus");
            //create remove button
            var button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("class", "btn btn-sm");
            button.setAttribute("title", "remove");
            //append icon inside button
            button.appendChild(iconSpan);
            //create li
            var liElement = document.createElement("li");
            liElement.setAttribute("class", "list-group-item");
            //append button and tesxt span tu li
            liElement.appendChild(button);
            liElement.appendChild(textSpan);
            //append li to ul
            listRoot.appendChild(liElement);
        });
})();
//# sourceMappingURL=plainToDo.js.map