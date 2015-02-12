$(function(){
	var canvas = $("canvas")[0];
	if(!canvas.getContext("2d")){
		$("canvas").html("您的浏览器不支持画布，无法正常显示。请更换更高级浏览器进行尝试。");
		return false;
	}
	var ctx = canvas.getContext("2d");
	ctx.strockStyle = "green";
	ctx.strokeRect(10, 10, 100, 100);

	ctx.fillStyle = "yellow";
	ctx.fillRect(20, 20, 100, 100);

	
});