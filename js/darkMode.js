var tmp = localStorage.getItem("dm");
var dayEmo = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
var nightEmo = '<i class="fa fa-moon-o" aria-hidden="true"></i>';

if(tmp == null) {
	localStorage.setItem("dm", "day");
	document.getElementById("darkModeBtn").innerHTML = nightEmo;
}

var elementsList = [];
elementsList.push(document.getElementsByClassName("card"));
elementsList.push(document.getElementsByClassName("single-person"));
elementsList.push(document.getElementsByClassName("card-deck"));
elementsList.push(document.getElementsByClassName("timeline-card"));
// elementsList.push(document.getElementsByTagName("p"));
elementsList.push(document.getElementsByClassName("formContainer"));
// elementsList.push(document.getElementsByClassName("card-img-top"));
elementsList.push(document.getElementsByTagName("body"));

if(tmp == "night"){
	document.getElementById("darkModeBtn").innerHTML = dayEmo;
	for(var i = 0; i < elementsList.length; i++) {
		for(var j = 0; j < elementsList[i].length; j++) {
			elementsList[i][j].classList.add("dark-mode");
		}
	}
}
	
else{
	document.getElementById("darkModeBtn").innerHTML = nightEmo;
	// for(var i = 0; i < elementsList.length; i++) {
		// for(var j = 0; j < elementsList[i].length; j++) {
			// elementsList[i][j].classList.remove("dark-mode");
		// }
	// }
}


function darker() {	
	var tmp = localStorage.getItem("dm");
	
	if(tmp == "day"){
		localStorage.setItem("dm", "night");
		document.getElementById("darkModeBtn").innerHTML = dayEmo;
		for(var i = 0; i < elementsList.length; i++) {
			for(var j = 0; j < elementsList[i].length; j++) {
				elementsList[i][j].classList.add("dark-mode");
			}
		}
	}
	
	else{
		localStorage.setItem("dm", "day");
		document.getElementById("darkModeBtn").innerHTML = nightEmo;
		for(var i = 0; i < elementsList.length; i++) {
			for(var j = 0; j < elementsList[i].length; j++) {
				elementsList[i][j].classList.remove("dark-mode");
			}
		}
	}

}