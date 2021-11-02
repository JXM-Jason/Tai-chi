window.dom = {
    //创建节点
    create(string){
        const container = document.createElement('template');
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    //在某个节点后增加节点
    after(node, newnode) {
        return node.parentNode.insertBefore(newnode,node.nextSibling);
    },
    //在某个节点前增加节点
    before(node, newnode) {
        return node.parentNode.insertBefore(newnode, node);
    },
    //新增子节点
    append(parent, child) {
        return parent.appendChild(child); 
    },
    //新增父节点
    wrap(parent, node) {
        dom.before(node, parent);
        dom.append(parent, node);
    },

    //删除节点
    remove(node) {
        node.parentNode.removeChild(node);
        return node;
    },
    //删除后代
    empty(node) {
        const array = [];
        let x = node.firstChild;
        while (x) {
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        // console.log(array);
        return array;
    },

    //读写属性
    attr(node,name,value) {
        if (arguments.length===3) {
            node.setAttribute(name, value);
        } else if (arguments.length === 2) {
            return node.getAttribute(name);
        }
    },
    //用于读写文本内容
    text(node,string) {
        if (arguments.length === 2) {
            if ('innerText'in node) {
                node.innerText = string;
            } else {
                node.textContent = string;
            }
        } else if (arguments.length === 1) {
            if ('innerText'in node) {
                return node.innerText;
            } else {
                return node.textContent;
            }
        }
    },
    //读写HTML的内容
    html(node,string) { 
        if (arguments.length === 2) {
            node.innerHTML = string;
        } else {
            return node.innerHTML;
        }
    },
    //用于修改样式
    style(node, name,value) {
        if (arguments.length === 3) {
            // dom.style(div, 'color', 'red')
            node.style[name] =value;
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                // dom.style(div, 'color')
                return node.style[name];
            } else if (name instanceof Object) {
                // dom.style(div, {color: 'red'})
                for (const key in name) {
                    node.style[key] = Object[key];
                }
            }
            
        } 
        
    },

    class: {
        add(node, className) {
            //添加类
            node.classList.add(className);
        },
        remove(node, className) {
            //删除类
            node.classList.remove(className);
        },
        has(node, className) {
            //判断是否拥有某个类
            return node.classList.contains(className);
        }
    },
    //添加监听事件
    on(node, eventname,fn) {
        node.addEventListener(eventname, fn);
    },
    //删除监听事件
    off(node,eventname,fn) {
        node.removeEventListener(eventname, fn);
    },

    //获取标签或者标签们 
    find(selector,scope) {//在某个范围内寻找则有scope参数
        return (document||scope).querySelectorAll(selector);
    },
    //获取父元素
    parent(node) {
        return node.parentNode;
    },
    //获取子元素
    children(node) {
        return node.children;
    },
    //获取兄弟姊妹元素
    Siblings(node) {
        return Array.from(node.parentNode.children).filter(n => n !== node);
    },
    //获取弟弟
    next(node) {
        let x = node.nextSibling;
        while (x && x.nodeType===3) {
           x= x.nextSibling;
        }
        return x;
    },
    //获取哥哥
    previous(node) {
        let x = node.previousSibling;
        while (x && x.nodeType === 3) {
            x = x.previousSibling;
        } 
        return x;
    },
    //遍历所有节点
    each(nodeList,fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null,nodeList[i]);
        }
    },
    //用于获取排行老几
    index(node) {
        let list = dom.children(node.parentNode);
        let i;
        for (i = 0; i < list.length; i++) {
            if (list[i]===node) {
                break;
            }
        }
        return i+1;
    }

}
