"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DOMLIST = require("../dist/index");
var VDOM = require("jsdom");
describe("plain list specifications", function () {
    var dom;
    var listRoot;
    var list;
    var childId;
    beforeAll(function () {
        dom = new VDOM.JSDOM("<div id='me'></div>");
        listRoot = dom.window.document.getElementById('me');
        list = new DOMLIST.plainList(listRoot);
        list.itemTemplate = function (s) {
            var res = dom.window.document.createElement("div");
            if (childId != null)
                res.setAttribute("id", childId);
            res.appendChild(dom.window.document.createTextNode(s));
            return res;
        };
    });
    beforeEach(function () {
        listRoot.innerHTML = "";
    });
    it("addition", function () {
        childId = "child1";
        list.appendItem("test");
        var added = dom.window.document
            .getElementById(childId);
        expect(added).not.toBeNull();
        expect(added.innerHTML).toBe("test");
        expect(listRoot.childNodes.length).toBe(1);
    });
    it("addition and delete", function () {
        childId = "child1";
        list.appendItem("test");
        var added = dom.window.document
            .getElementById(childId);
        list.removeItem(added);
        expect(listRoot.childNodes.length).toBe(0);
    });
});
//# sourceMappingURL=plainDomSpec.js.map