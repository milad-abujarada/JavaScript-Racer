document.addEventListener('DOMContentLoaded', function(){console.log("JS works!!");
	let movingDistance = initialPosition("orangeTank");
	let finishLine = initialPosition("finish");
	let winner = "";
	document.addEventListener('keypress', function(){ console.log(event.keyCode);
		if (((event.keyCode === 108) || (event.keyCode === 76) ||(event.keyCode === 97) || (event.keyCode === 65))&& !winner){
			if ((event.keyCode === 97) || (event.keyCode === 65)){
				newPosition(movingDistance, "greenTank");
			} else {
				newPosition(movingDistance, "orangeTank");
			}
		}
		if (winner){
			if (winner === "greenTank"){
				alert("Green Tank wins!");
			} else {
				alert("Orange Tank wins!")
			};
			
		};
	});

	function initialPosition(tankOrFinishLine){
	return parseInt(window.getComputedStyle(document.getElementById(tankOrFinishLine), null).getPropertyValue("left"));
	};

	function newPosition(movingDistance, tank){
	let movingTank = document.getElementById(tank);
	if(movingTank.style.left){
		let currentPosition = parseInt(movingTank.style.left) + movingDistance;
		movingTank.style.left = String(parseInt(movingTank.style.left) + movingDistance) + "px";
		if (checkForWin(finishLine, currentPosition)){
			winner = tank;
		};
	} else {
		movingTank.style.left = String(movingDistance * 2) + "px";
	}; 

	};

	function checkForWin(finishLine, currentMovingTank){
	if(currentMovingTank >= finishLine){
		return true;
	};
	};
});






