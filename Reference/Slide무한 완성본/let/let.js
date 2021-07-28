var l0=$(".track div").length
cop=[]
var j=0
function setting(){
    j++
    $(".track div").eq(j).animate({left:0},1000)
    cop[j]=$(".track div").eq(j).clone()
    cop[j].appendTo(".track")
}

function s(){
    j++
    $(".track div").eq(j).animate({left:0},1000)
    cop[j]=$(".track div").eq(j).clone()
    cop[j].appendTo(".track")
    $(".track div").eq(j-2).remove()
    j--
}
$(".track div").eq(j).animate({left:0},1000)
cop[j]=$(".track div").eq(j).clone()
cop[j].appendTo(".track")

setting()
var stop=setInterval(s,2000)