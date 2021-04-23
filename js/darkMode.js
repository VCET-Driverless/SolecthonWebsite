darkModeToggle = false


var checkbox = document.querySelector("input[name=darkModeToggleButton]");

checkbox.addEventListener('change', function () {
    console.log(darkModeToggle);
    localStorage.setItem('darkMode',this.checked);
    if (this.checked) {
        darkModeToggle = true
        localStorage.setItem("darkMode",true)
        document.body.classList.add("dark-mode");

    } else {
        console.log("Checkbox is not checked..");
        darkModeToggle = false
        localStorage.setItem("darkMode",false)
        
    document.body.classList.remove("dark-mode");

    }
    darkMode();

});

jQuery(document).ready(function () {

    if(localStorage.getItem("darkMode")){
        document.getElementById("darkModeToggleButton").checked = true;
    }
    else{
        document.getElementById("darkModeToggleButton").checked = false;

    }
    localStorage.setItem('darkModeToggleButton') = document.getElementById("darkModeToggleButton").checked
    console.log(localStorage.getItem('darkMode'));
    myVal = localStorage.getItem('darkMode')
    document.getElementById("darkModeToggleButton").checked = myVal;

    if (document.getElementById("darkModeToggleButton").checked == true){
        alert("checked")
        document.body.classList.add("dark-mode");

    }
    else{
        document.body.classList.remove("dark-mode");

    }




    console.log(localStorage.getItem('darkMode'));
    if(localStorage.getItem('darkMode') == true) {
        console.log(localStorage.getItem('darkMode'));
        document.body.classList.add("dark-mode");
   }
   else{
    document.body.classList.remove("dark-mode");

   }

   

});


