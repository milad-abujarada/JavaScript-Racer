console.log("JS works!!");
let tank1 = document.getElementById("yellowTank");
let tank1InitialPosition = parseInt(window.getComputedStyle(tank1, null).getPropertyValue("left"));

document.addEventListener('keypress', function(){
	if(!(document.getElementById("yellowTank").style.left)) {
		tank1.style.left = String(tank1InitialPosition * 2) + "px";
		 
	} else {

		tank1.style.left = String(parseInt(tank1.style.left) + tank1InitialPosition) + "px";
	}
});