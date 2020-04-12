$(function () {
    // 导航
    $(window).scroll(function () {
        var os = $(document).scrollTop();
        if (os > 50) {
            $("#nav").css({
                background: "#fff",
                height:"80px"
            })
        } else {
            $("#nav").css({
                background: "transparent",
                height:"200px",
            })
        }
    });
})

// 切换按钮
$(function () {
    $("#profile .sub-titles>a").click(function () {
        var id = $(this).attr("data-id");
        $(this).addClass("active").siblings().removeClass("active");
        if (id == -1) {
            $("#profile .content>div").fadeIn();
        } else {
            $("#profile .content>div").each(function (i, ele) {
                if (ele.dataset.cateId == id) {
                    $(ele).fadeIn();
                } else {
                    $(ele).fadeOut();
                }
            })
        }
    })
})
// 鼠标移入特效
$(function () {
    $("#profile .col-content").hover(function () {
        $(this).find(".mask").stop().animate({
            opacity: 0.9
        }, 200);
    }, function () {
        $(this).find(".mask").stop().animate({
            opacity: 0
        }, 200);
    })
})
// 图片预览
$(function(){
    $("#profile .col-content .circle .amplification").click(function(){
        var index=$(this).parents(".col-md-3").index();
        $("#fadeMask").fadeIn();
        var swiper1=new Swiper("#img-preview",{
            loop:true,
            initialSlide:index
        });
    });
    $("#fadeMask").click(function(){
        $(this).fadeOut();
    })
})

// 轮播图
// $(function(){
//     var index=0;
//     var len=$("#head-portrait>Brief").length;
//     var timer=null;
//     $(".Brief").mouseenter(function(){
//         index=$(this).index();
//         tabs(index);
//     });
//     $(".next").click(next);
//     $(".prev").click(function(){
//         index--;
//         if(index<0){
//             index=len-1;
//         }
//         tabs(index);
//     });
//     timer=setInterval(next,2000);
//     $(".Brief").hover(function(){
//         clearInterval(timer);
//     },function(){
//         timer=setInterval(next,2000);
//     }).trigger("mouseleave");
//     function next(){
//         index++;
//         index%=len;
//         tabs(index);
//     }
//     function tabs(index){
//         $("#head-portrait>Brief").eq(index).stop().fadeIn().siblings().stop().fadeOut();
//     }
// })


// 回到顶部
$(function(){
    $(window).scroll(function(){
        var oTop=$(document).scrollTop();
        if(oTop>100){
            $("#x .tajik").fadeIn();
        }else{
            $("#x .tajik").fadeOut();
        }
    });
    $("#x .tajik").click(function(){
        $("html,body").animate({
            scrollTop:0
        },200);
    });
})

