/**
 * Created by sudarshan on 13/11/17.
 */

var Key = null;

var elementStack = {
    'lion' : s_div,
    'cat' : s_anchor,
    'tiger' : s_input,
    'dog' : s_h1
};


    function parser(obj, parent) {

        for(key in obj){
                if(!elementStack[key] && key !='@attributes' ){
                    continue;
                } else if(key === '@attributes'){
                    for(attr in obj[key]){
                        // if(attr.indexOf('m-') != -1)
                           // parent.methods[attr] = obj[key][attr];
                        // else
                            parent.attrs[attr] = obj[key][attr];
                    }

                } else {

                    if(!obj[key].length)
                        obj[key] = [obj[key]];

                    var len = obj[key].length;

                    for(var i=0;i<len;i++){

                        var instance = null;

                        (function (obj , key, i) {
                            if(key == '@attributes'){
                                key = Key;
                            }
                            Key = key;
                            instance = new elementStack[key]();
                            parent && parent.childNodes.push(instance);
                            parser(obj[key][i], instance);

                        })(obj, key,i);
                    }

                }
        }

        if(!parent){
            return instance;
        }

    }

    function render(dom, parentDom) {
        if(!dom)
            return;

        var ele = document.createElement(dom.UI);
       for(key in dom.attrs){
          dom.applyAttributes(ele);
       }

        // for(key in dom.methods){
        //    if(dom.applyMethods)
        //        dom.applyMethods(ele);
        // }

        ele['parentNode'] = parentDom;
        ele['parentElement'] = parentDom;
        for(var i=0;i<dom.childNodes.length;i++){
            var child = render(dom.childNodes[i], ele);
            if(child)
                ele.appendChild(child);
        }

        if(parentDom){
            parentDom.appendChild(ele);
        }

       return ele;

    }

function startBrowserFlow() {
    var xml = StringToXML(str);
    var json = xmlToJson(xml);

    var parseTree = parser(json);

    render(parseTree, document.body);

}