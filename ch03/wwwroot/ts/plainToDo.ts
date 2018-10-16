(function () {
    function findAncestor(n: HTMLElement|null, tag: string): HTMLElement | null {
        while (n != null && n.tagName != "BODY") {
            if (n.tagName == tag) return n;
            n = n.parentNode as HTMLElement;
        }
        return null;
    }

    function findAncestorExt(n: HTMLElement | null, selector: string): HTMLElement | null {
        while (n != null && n.tagName != "BODY") {
            if (n.matches && n.matches(selector)) return n;
            else if (n.webkitMatchesSelector && n.webkitMatchesSelector(selector)) return n;
            n = n.parentNode as HTMLElement;
        }
        return null;
    }

    let listRoot = document.getElementById("main_list") as HTMLElement;

    listRoot.addEventListener("click",
    (evt: MouseEvent) =>
    {
        let button = findAncestor(evt.target as HTMLElement, "BUTTON") ;
        let target = findAncestor(button, "LI");
        if (target != null && target.parentNode != null)
            target.parentNode.removeChild(target);
    });

    let mainAdd = document.getElementById("main_add");
    if (mainAdd != null) mainAdd.addEventListener("click",
        (evt: MouseEvent) =>
        {
            let textSpan = document.createElement("span");
            //create span with text
            textSpan.innerText = " "+(document.getElementById("main_input") as HTMLInputElement).value;

            //create span with icon to put inside button
            let iconSpan = document.createElement("span");
            iconSpan.setAttribute("aria-hidden", "true");
            iconSpan.setAttribute("class", "glyphicon glyphicon-minus");

            //create remove button
            let button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("class", "btn btn-sm");
            button.setAttribute("title", "remove");

            //append icon inside button
            button.appendChild(iconSpan);

            //create li
            let liElement = document.createElement("li");
            liElement.setAttribute("class", "list-group-item");

            //append button and tesxt span tu li
            liElement.appendChild(button);
            liElement.appendChild(textSpan);

            //append li to ul
            listRoot.appendChild(liElement);

        });
})();