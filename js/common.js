//这是一个通用的函数，所以放在common.js中
function createXhr(){
    var xhr=null;
    //适应不同版本的浏览器
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }
    else{//IE8以上的浏览器
        xhr=new ActiveXObject("Microsoft.XMLHttp");
    }
    return xhr;
}