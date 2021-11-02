const div =dom.create('<div><span>我的名字叫创建</span></div>');
dom.after(test, div);
dom.before(div, dom.create('<div>我在创建的前面</div>'));
dom.append(test, dom.create('<p>我是p标签，test新增的子节点</p>'));
dom.wrap(dom.create('<div>我是test新增的父节点</div>'),test);
// dom.remove(div);
// dom.empty(test);
dom.attr(test, 'title', '我是value值');
console.log(dom.text(test)+'  这是读取的值');

// dom.html(test,'<p>我是修改的p标签</p>');
dom.style(test, 'background-color', 'red');//设置某个节点的样式属性
console.log('这个节点的样式是' + dom.style(test, 'background-color'))//读取某个节点的样式属性

dom.class.add(test, 'try');//添加类
dom.class.remove(test, 'try');//删除类

let fn = function () {
    alert('我是点击事件');
}
dom.on(test, 'click', fn);
// dom.off(test, 'click', fn);
let testli = dom.find('li')[3];//第一个小li
console.log(testli);
console.log(dom.parent(testli));
console.log(dom.parent(testli).children);
console.log(dom.Siblings(testli));
console.log(dom.next(testli));
console.log(dom.previous(testli));
// console.log(dom.siblings());
console.log('我是老'+dom.index(testli));


const div1 = dom.find('#try>.red')[0] // 获取对应的元素
dom.style(div1, 'color', 'red') // 设置 div1.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素



