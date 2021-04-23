function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

//var json_obj = JSON.parse(Get("https://raw.githubusercontent.com/sharvin18/mern_excercise_tracker/main/package.json"));
//console.log("this is the author name: "+json_obj.name);

var iDiv = document.createElement('div');
iDiv.id = 'currentMembers';
iDiv.className = 'row';
var mainDiv = document.getElementsByClassName('container')[0];
mainDiv.appendChild(iDiv);

//iDiv.innerHTML = "I'm the first div";

// Now create and append to iDiv
var count = 10

for(var i = 0; i < count; i++) {
	var innerDiv = document.createElement('div');
	innerDiv.className = 'col-sm-6 col-lg-4 col-xl-3';
	iDiv.appendChild(innerDiv);
	
	var personDiv = document.createElement('div');
	personDiv.className = 'single-person';
	innerDiv.appendChild(personDiv);
	
	var imageDiv = document.createElement('div');
	imageDiv.className = 'person-image';
	personDiv.appendChild(imageDiv);
	
	var imgTag = document.createElement('img');
	imgTag.src = 'https://raw.githubusercontent.com/viru2001/SolecthonWebsite/master/images/members/sanket.png';
	imageDiv.appendChild(imgTag);
	
	var icon = document.createElement('span');
	icon.className = 'icon'
	imageDiv.append(icon);
	
	var icon2 = document.createElement('i');
	icon2.className = 'flaticon-autonomous-car'
	icon.appendChild(icon2);
	
	var personInfo = document.createElement('div');
	personInfo.className = 'person-info';
	personDiv.appendChild(personInfo);
	
	var hthree = document.createElement('h3');
	hthree.className = 'full-name'
	hthree.innerHTML = "Sanket Suhagiya";
	personInfo.append(hthree);
	
	var spec = document.createElement('span');
	spec.className = 'speciality'
	spec.innerHTML = "Member Autonomous";
	personInfo.append(spec);

}