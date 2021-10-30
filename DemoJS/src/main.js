let html = document.querySelector('#html');
let style = document.querySelector('#style');
let strings = `
/*你好，我是叫蒙帅
我想给你展示以下我的前端技术
首先我们先准备一个div
*/
#div1{
    border: 1px solid gray;
    width: 300px;
    height: 300px;
}
/*
接着我要将这个div变成太极八卦
首先将div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
八卦是阴阳形成的，一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加上两个神秘的小球*/
#div1::before{
    content:'';
    width:150px;
    height: 150px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius:50%;
    background-color:black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

#div1::after{
    content:'';
    width:150px;
    height: 150px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius:50%;
    background-color:white;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let n = 0;
let strings2 = '';
//将strings里面的换行替换成html标签的<br>
// strings=strings.replace( /\n/g,"<br>");
let step = () => {
    setTimeout(() => {
        if (strings[n] === '\n') {
            strings2 += '<br>';
        } else if (strings[n] === ' ') {
            strings2 +="&nbsp;";
        } else {
            strings2 += strings[n];
        }
        
        html.innerHTML = strings2;
        style.innerHTML = strings.substring(0, n);
        window.scroll(0, 999999);
        html.scrollTo(0, 99999);
        n = n + 1;  
        if (n<strings.length) {
            step();
        } 
    }, 10);
}

step();










