var k=1
var cop=[]
var stop=0
var stop2=0
var width=$(".track div").width()

function copyTrack(){
    var len = $(".track div").length
    for(var i=0;i<len;i++){
        cop[i]=$(".track div").eq(i).clone()
    }
}
function append(k){
    k=k%7
    var track= cop[k].appendTo(".track")
    return track
}

function slide(){
        track =append(k-1)
        var len =$(".track div").length

        for(var i=0;i<len;i++){
            $(".track div").eq(i).animate({left:-width*k},2000)
        }
    k++

    if(k==8){
        clearInterval(stop)
        for(var i=0;i<6;i++){
            $(".track div").eq(0).remove()
        }
        k=0
        slide()
    }else{
        stop=setInterval(slide,2000)
    }
}
copyTrack()
slide()