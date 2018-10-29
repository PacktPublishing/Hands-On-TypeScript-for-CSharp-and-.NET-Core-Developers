import DOMList from  "./sources/plainList"
import * as VDOM from "jsdom"

let dom = new VDOM.JSDOM("<div id='me'></div>");

let node = dom.window.document.getElementById('me') as HTMLElement;


let list = new DOMList<string>(node);

let currId: string|null="child1"; 

list.itemTemplate = s => {
    var res = dom.window.document.createElement("div");
    
    if(currId != null) res.setAttribute("id", currId)
    res.appendChild(dom.window.document.createTextNode(s));
    return res;
};

list.appendItem("test");
var added = dom.window.document.getElementById('child1') as HTMLElement;
list.removeItem(added);