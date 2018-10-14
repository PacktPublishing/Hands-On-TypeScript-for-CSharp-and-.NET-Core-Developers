var DOMList = /** @class */ (function () {
    function DOMList(itemsParent) {
        this.itemsParent = itemsParent;
    }
    DOMList.prototype.removeItem = function (node) {
        this.itemsParent.removeChild(node);
    };
    DOMList.prototype.appendItem = function (itemData) {
        this.itemsParent.appendChild(this.itemTemplate(itemData));
    };
    DOMList.prototype.prependItem = function (itemData) {
        if (this.itemsParent.childElementCount === 0)
            this.appendItem(itemData);
        else
            this.itemsParent.insertBefore(this.itemTemplate(itemData), this.itemsParent.firstChild);
    };
    DOMList.prototype.appendBefore = function (node, itemData) {
        this.itemsParent.insertBefore(this.itemTemplate(itemData), node);
    };
    DOMList.prototype.appendAfter = function (node, itemData) {
        if (node.nextSibling)
            this.itemsParent.insertBefore(this.itemTemplate(itemData), node.nextSibling);
        else
            this.appendItem(itemData);
    };
    return DOMList;
}());
export default DOMList;
//# sourceMappingURL=plainList.js.map