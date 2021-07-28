$(".track .box").mouseover(function(){
    $(".prev").stop().fadeIn()
    $(".next").stop().fadeIn()
})
$(".slideWrap").mouseleave(function(){
    $(this).children(".prev").stop().fadeOut()
    $(this).children(".next").stop().fadeOut()

})

$(".slideWrap .next").click(function(){
    $(".track div").eq(0).animate({left:"-=250"},"fast",function(){
        $(".track div").eq(0).appendTo(".track")
    })
})
$(".slideWrap .prev").click(function(){
    $(".track div").eq(0).animate({left:"-=250"},"fast",function(){
        $(".track div").eq(9).prependTo(".track")
    })
})