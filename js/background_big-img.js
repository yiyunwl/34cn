window.onload = function () {
    var imgs = ["images/lunbo/47_01.png", "images/lunbo/banner_01.png", "images/lunbo/banner2_01.png"];
    //（设定想要显示的图片）
    var i = 0;
    var head = document.getElementById("background_big-img");
    //获取DIV对象
    head.style.background = "url(images/lunbo/47_01.png)  no-repeat 0 0";
    head.style.backgroundSize = "cover";
    //设置图片的初始图片为该路径的图片
    function time() {
      i++;
      i = i % 3;         // 超过2则取余数，保证循环在0、1、2之间
      head.style.background = "url(" + imgs[i] + ") no-repeat 0 0";
      head.style.backgroundSize = "cover";
    }
    setInterval(time, 4000);//循环调用time1()函数，时间间隔为4000ms
    //setInterval()函数，按照指定的周期（按毫秒计）来调用函数或表达式
  }