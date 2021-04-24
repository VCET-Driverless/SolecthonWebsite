var tmp = localStorage.getItem("dm");
	
if(tmp == "night"){
	document.body.classList.add("dark-mode");
}
	
else{
	document.body.classList.remove("dark-mode");
}


function darker() {	
	var tmp = localStorage.getItem("dm");
	
	if(tmp == "day"){
		localStorage.setItem("dm", "night");
		document.body.classList.add("dark-mode");
	}
	
	else{
		localStorage.setItem("dm", "day");
		document.body.classList.remove("dark-mode");
	}

}