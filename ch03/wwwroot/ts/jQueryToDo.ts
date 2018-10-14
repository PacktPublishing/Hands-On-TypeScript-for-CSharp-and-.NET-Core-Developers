(function ($) {
    let listRoot = $("#main_list");
    listRoot.on("click", (event) => {
        let button = $(event.target).closest("BUTTON");
        if (button.length === 0) return;
        button.closest("LI").remove();
    });

    let mainAdd = $("#main_add");
    mainAdd.click(event => {
        let toAdd =
            `<li class="list-group-item">
                <button type="button" class="btn btn-sm" title="remove">
                    <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
                </button>
                <span>${$("#main_input").val()}</span>
            </li>`;
        listRoot.append(toAdd);
    });  
})(jQuery);