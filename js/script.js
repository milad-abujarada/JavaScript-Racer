document.addEventListener('DOMContentLoaded', function(){console.log("JS works!!");
	let movingDistance = initialPosition("orangeTank");
	document.addEventListener('keypress', function(){ console.log(event.keyCode);
		if ((event.keyCode === 108) || (event.keyCode === 76) ||(event.keyCode === 97) || (event.keyCode === 65)){
			if ((event.keyCode === 97) || (event.keyCode === 65)){
				newPosition(movingDistance, "greenTank");
			} else {
				newPosition(movingDistance, "orangeTank");
			}
		}
	});
});

function initialPosition(tank){
	return parseInt(window.getComputedStyle(document.getElementById(tank), null).getPropertyValue("left"));
};

function newPosition(movingDistance, tank){
	let movingTank = document.getElementById(tank);
	if(movingTank.style.left){
		movingTank.style.left = String(parseInt(movingTank.style.left) + movingDistance) + "px";
	} else {
		movingTank.style.left = String(movingDistance * 2) + "px";
	}; 

}
