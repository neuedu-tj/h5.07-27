
$(function(){
	
	var count = 1;
	
	$("#menu").click(function(){
		if(count%2!=0){
			$("#header").height(205);
			$("#mobile-items").fadeIn(600)
		}else {
			$("#header").height(40);
			$("#mobile-items").fadeOut(600)
		}
		count++;
	});
	
	
});

