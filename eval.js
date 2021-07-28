var stop=0;
var mainover=0
function slide(){
    $(".mainWrap .item").eq(0).animate({left:-800},5000,function(){
        $(".mainWrap .item").eq(0).appendTo(".mainWrap .track")
        var who1 = $(".mainWrap .item").eq(0)
        
    })
    // $(".dot div").eq(0).animate({left:-800},5000,function(){
    //     $(this).siblings().next().children("i")
    //     $(".dot div").eq(0).appendTo(".dot")
    // })
}
//mainslider function
$(".mainWrap img").mouseover(function(){
    clearInterval(stop)
    $(".mainbtn").stop().fadeIn("fast")
    stop=0
})
$(".mainWrap img").mouseleave(function(){
    stop = setInterval(slide,5000)
    $(".mainbtn").stop().fadeOut("fast")
})
$(".mainbtn").mouseover(function(){
    $(this).stop().show()
})
// main mouseover leave
$(".mainbtn .left").click(function(){
    $(".mainWrap .item").first().stop().appendTo(".mainWrap .track")
    $(".mainWrap .item").first().stop().animate({left:-800},1000)
})
$(".mainbtn .right").click(function(){
    $(".mainWrap .item").last().stop().prependTo(".mainWrap .track")
    $(".mainWrap .item").last().stop().animate({left:800},1000)
})
//mainslide click nxt prev 

$(".dotBox .stop").click(function(){
    clearInterval(stop)
    $(this).stop().hide().siblings("button").show()
    stop=0
})
$(".dotBox .play").click(function(){
    $(this).stop().hide().siblings("button").show()
    clearInterval(stop)
    stop=setInterval(slide,5000)
})


// other slides mouseover leave
$("img").mouseover(function(){
    $(this).parents().siblings(".btn").stop().fadeIn("fast")
})
$("img").mouseleave(function(){
    $(this).parents().siblings(".btn").stop().fadeOut("fast")
})
$(".btn").mouseover(function(){
    $(this).stop().show()
})
$(".btn").mouseleave(function(){
    $(this).stop().hide()
})
// other slides mouseover leave

// other slides click event
$(".btn .left").click(function(){
    var s =$(this).parents().siblings(".s_track")
    var t= s.children(".box")
    var w =t.width()

    t.first().stop().appendTo(s)
    t.first().stop().animate({left:-w},1000)
})
$(".btn .right").click(function(){
    var s =$(this).parents().siblings(".s_track")
    var t= s.children(".box")
    var w =t.width()

    t.last().stop().prependTo(s)
    t.first().stop().last().animate({left:w},1000)
})
// other slides click event

// submenu slideDown Up
$(".nav .category").mouseover(function(){
    $(this).children(".sub").slideDown("fast")
})
$(".nav .category").mouseleave(function(){
    $(this).children(".sub").slideUp("fast")
})
// submenu slideDown Up

// inputbox modal  click
$(".bottom .input").click(function(){
    $("#modal").stop().fadeIn("fast")
})
$(".clx").click(function(){
    $("#modal").stop().fadeOut("fast")
})
// inputbox modal  click 


// footer notice
var l=$("footer .contents p").length
var c = $("footer .contents p")
var k=0
var stop2=1
function notice(){
    k=k%l
    c.siblings().css({top:70})
    c.eq(k).animate({top:0})
    c.eq(k).addClass("on").siblings().removeClass("on")
    k++
}


$(".notice button").eq(0).click(function(){
    var idx= $("footer .on").index()
    if(idx!=0){
        c.eq(idx-1).siblings().css("top",70)
        c.eq(idx-1).animate({top:0},function(){
            c.eq(idx-1).addClass("on").siblings().removeClass("on")
        })
    }else{
        $(this).css("opacity","0.2")
    }
    stop2=0
})
$(".notice button").eq(1).click(function(){
    var idx= $("footer .on").index()
    if(idx!==l-1){
        c.eq(idx+1).siblings().css("top",70)
        c.eq(idx+1).animate({top:0},function(){
            c.eq(idx+1).addClass("on").siblings().removeClass("on")
        })
    }else{
        $(this).css("opacity","0.2")
    }
    stop2=0
})
$(".notice button").mouseover(function(){
    clearInterval(stop2)
})
$(".notice button").mouseleave(function(){
    stop2=setInterval(notice,3000)
    $(".notice button").css("opacity","1")
})
// footer noitce

// popup
$(".popInt input").click(function(){
    $("#popup").stop().fadeOut("fast")
})
$(".popClx").click(function(){
    $("#popup").stop().fadeOut("fast")
})
// popup


stop=setInterval(slide,5000)// main 
stop2 =setInterval(notice,3000) // footer notice