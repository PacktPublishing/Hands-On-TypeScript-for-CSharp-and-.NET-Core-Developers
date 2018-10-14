var AppendGrid = /** @class */ (function () {
    function AppendGrid(list, addButton, itemRootSelector, addItemDataRoot, addBeforeButton) {
        var _this = this;
        this.list = list;
        this.addButton = addButton;
        this.itemRootSelector = itemRootSelector;
        this.addItemDataRoot = addItemDataRoot;
        this.addBeforeButton = addBeforeButton;
        this.list.itemTemplate = this.itemTemplate;
        this.list.itemsParent.addEventListener("click", function (evt) {
            var button = AppendGrid.findAncestor(evt.target, "button");
            var target = AppendGrid.findAncestor(button, itemRootSelector);
            if (target != null)
                _this.list.removeItem(target);
        });
        this.addButton.addEventListener("click", function (evt) {
            _this.list.appendItem(_this.extractDataToAdd());
        });
        if (this.addBeforeButton) {
            this.addBeforeButton.addEventListener("click", function (evt) {
                _this.list.prependItem(_this.extractDataToAdd());
            });
        }
    }
    AppendGrid.prototype.replaceList = function (list) {
        this.list = list;
    };
    AppendGrid.findAncestor = function (n, selector) {
        while (n != null && n.tagName != "BODY") {
            if (n.matches && n.matches(selector))
                return n;
            else if (n.msMatchesSelector &&
                n.msMatchesSelector(selector))
                return n;
            else if (n.webkitMatchesSelector
                && n.webkitMatchesSelector(selector))
                return n;
            n = n.parentNode;
        }
        return null;
    };
    return AppendGrid;
}());
export { AppendGrid };
//# sourceMappingURL=AbstractLists.js.map