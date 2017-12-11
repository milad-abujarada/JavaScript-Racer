//making sure the DOM is ready before starting the DOM manipulation
document.addEventListener("DOMContentLoaded", function(){console.log("JS works!!");
	let movingDistance = initialPosition("orangeTank"); // inital position of the tanks
	//getting the position of the finish line and the subtracting from it the width of the finish line
	//to make sure a tank doesn't have to cross in full in order to be declared a winner
	let finishLine = initialPosition("finish") - parseInt(window.getComputedStyle(document.getElementById("finish"), null).getPropertyValue("width"));
	console.log(finishLine);
	let winner = "";
	//adding event listener that only execut the call back if the pressed keys are either uppercase or lowercase L or A
	document.addEventListener('keypress', function(){ 
		if (((event.keyCode === 108) || (event.keyCode === 76) ||(event.keyCode === 97) || (event.keyCode === 65))&& !winner){
			if ((event.keyCode === 97) || (event.keyCode === 65)){
				newPosition(movingDistance, "orangeTank");
				addGlow("title1", "title2");
			} else {
				newPosition(movingDistance, "greenTank");
				addGlow("title2", "title1");
			}
		}
		if (winner){
			if (winner === "greenTank"){
				alert("The Green Tank wins!");
			} else {
				alert("The Orange Tank wins!")
			};
			
		};
	});

	document.getElementById("rulesHeader").addEventListener("mousemove", function(){
		document.getElementById("rulesParagraph").style.display = "block";

	});

	document.getElementById("rulesHeader").addEventListener("mouseout", function(){
		document.getElementById("rulesParagraph").style.display = "none";

	});	
	//initialPosition receives an element and figuring out the location of that element in pixel terms
	function initialPosition(tankOrFinishLine){
	return parseInt(window.getComputedStyle(document.getElementById(tankOrFinishLine), null).getPropertyValue("left"));
	};

	//newPosition moves the tanks and call on checkForWin to check for a winner
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

	//checkForWin checks if any of the tanks crossed the cross line
	function checkForWin(finishLine, currentMovingTank){
	if(currentMovingTank >= finishLine){
		return true;
	};
	};

	//addGlow addes glow on press A or press L on the screen  to show the player who pressed last 
	function addGlow(title1, title2){
		document.getElementById(title1).style.textShadow = "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue";
		document.getElementById(title2).style.textShadow = "";
	};
});






