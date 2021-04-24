var tmp = window.localStorage.getItem("dm");
	
if(tmp == "night"){
	document.body.classList.add("dark-mode");
}
	
else{
	document.body.classList.remove("dark-mode");
}


function darker() {	
	var tmp = window.localStorage.getItem("dm");
	
	if(tmp == "day"){
		window.localStorage.setItem("dm", "night");
		document.body.classList.add("dark-mode");
	}
	
	else{
		window.localStorage.setItem("dm", "day");
		document.body.classList.remove("dark-mode");
	}

}