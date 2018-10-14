//this is lib/jQueryList.ts module
import * as $ from "jquery";
var DOMList = /** @class */ (function () {
    function DOMList(itemsParent) {
        this.itemsParent = itemsParent;
    }
    DOMList.prototype.removeItem = function (node) {
        $(node).remove();
    };
    DOMList.prototype.appendItem = function (itemData) {
        $(this.itemsParent)
            .append(this.itemTemplate(itemData));
    };
    DOMList.prototype.prependItem = function (itemData) {
        $(this.itemsParent)
            .prepend(this.itemTemplate(itemData));
    };
    DOMList.prototype.appendBefore = function (node, itemData) {
        $(node).before(this.itemTemplate(itemData));
    };
    DOMList.prototype.appendAfter = function (node, itemData) {
        $(node).after(this.itemTemplate(itemData));
    };
    return DOMList;
}());
export default DOMList;
//# sourceMappingURL=jQueryList.js.map