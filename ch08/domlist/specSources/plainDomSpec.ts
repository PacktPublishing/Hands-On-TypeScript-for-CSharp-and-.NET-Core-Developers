import * as DOMLIST  from  "../dist/index"
import * as VDOM from "jsdom"



describe("plain list specifications", () =>{
    let dom: VDOM.JSDOM;
    let listRoot: HTMLElement;
    let list: DOMLIST.plainList<string>;
    let childId: string|null;

    beforeAll(()=>{
        dom = new VDOM.JSDOM("<div id='me'></div>");
        listRoot = dom.window.document.getElementById('me') as HTMLElement;
        list = new DOMLIST.plainList<string>(listRoot);
        list.itemTemplate = s => {
            var res = dom.window.document.createElement("div");
            
            if(childId != null) res.setAttribute("id", childId)
            res.appendChild(dom.window.document.createTextNode(s));
            return res;
        };    
    });
    beforeEach(()=>{
        listRoot.innerHTML="";
    });
    it("addition", () =>{
        childId="child1";
        list.appendItem("test");
        var added = dom.window.document
            .getElementById(childId) as HTMLElement;

        expect(added).not.toBeNull();
        expect(added.innerHTML).toBe("test");
        expect(listRoot.childNodes.length).toBe(1);
        
    });
    it("addition and delete", () =>{
        childId="child1";
        list.appendItem("test");
        var added = dom.window.document
            .getElementById(childId) as HTMLElement;

       list.removeItem(added);
       expect(listRoot.childNodes.length).toBe(0);
        
    });
});