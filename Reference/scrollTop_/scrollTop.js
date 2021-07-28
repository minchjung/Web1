$(window).scroll(function(){
    var scr =$(this).scrollTop()
    console.log(scr)
    if(scr>0){
        $(".top").stop().fadeIn();
    }else{
        $(".top").stop().fadeOut();
    }
})
$(".top").click(function(){
    $("body,html").animate({scrollTop:0},"fast")
})