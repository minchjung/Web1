
var i = 0;
function dotfunc(){
	i=i%5
	console.log(i)
	$(".dotbox").children().eq(i).css("background-color","red").siblings().css("background-color","#666")
	i++
}

function start(){
	var w = $(".imgs .item").width()

	$(".imgs").animate("left",-w)
	$(".imgs div:first-child").appendTo(".imgs").show()

	dotfunc()
}

start()
setInterval(function(){start()},2500)

// $(".dot").click(functio(){
// 	$(".imgs .item:third-child").
// })
