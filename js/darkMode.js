var tmp = localStorage.getItem("dm");
var dayEmo = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
var nightEmo = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
var day = "day";
var night = "night";
var elementsList = [
	["body", "dark-mode"],
	[".card", "dark-mode-card"],
	[".single-person", "dark-mode-card"],
	[".card-deck", "dark-mode-card"],
	[".timeline-card", "dark-mode-card"],
	[".formContainer", "dark-mode-card"],
	["input", "dark-mode-text-box"],
	["textarea", "dark-mode-text-box"],
	["button[type='submit']", "dark-mode-text-box"]
];

$(document).ready(function(){
	$("#darkModeBtn").click(function(){
		darker();
	});
});

if(tmp == null) {
	localStorage.setItem("dm", "day");
	$("#darkModeBtn").html(nightEmo);
}

if(tmp == "night"){
	$("#darkModeBtn").html(dayEmo);
	for(var i = 0; i < elementsList.length; i++) {
		$(elementsList[i][0]).addClass(elementsList[i][1]);
	}
}
else{
	$("#darkModeBtn").html(nightEmo);
}


function darker() {	
	var tmp = localStorage.getItem("dm");
	
	if(tmp == "day"){
		setMode(elementsList, night, dayEmo);
	}
	else{
		setMode(elementsList, day, nightEmo);
	}

}

function keyCheck(event) {
	var x = event.which || event.keyCode;
	if(x == 100) {
		darker();
	}
}

function setMode(elementsList, storageValue, emoji) {
	localStorage.setItem("dm", storageValue);
	$("#darkModeBtn").html(emoji);
	for(var i = 0; i < elementsList.length; i++) {
		if(storageValue == night) {
			$(elementsList[i][0]).addClass(elementsList[i][1]);
		}
		else {
			$(elementsList[i][0]).removeClass(elementsList[i][1]);
		}
	}
	if(storageValue == night) {
		$(".single-person").css("background-color" , "#181a1b");
	}
	else{
		$(".single-person").css("background-color" , "#f6f9ff");
	}
	
}
