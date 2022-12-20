function Get(yourUrl){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
	// download(Httpreq.responseText, 'json.txt', 'text/plain');
    return Httpreq.responseText;          
}

var json_obj = JSON.parse(Get("https://raw.githubusercontent.com/VCET-Driverless/SolecthonWebsite/main/data/team.json"));
//console.log("this is the author name: "+json_obj.currentMembers);

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

var iDiv = document.createElement('div');
iDiv.id = 'currentMembers';
iDiv.className = 'row';

var iDiv2 = document.createElement('div');
iDiv2.id = 'oldMembers';
iDiv2.className = 'row';

var currentMemberDiv = document.getElementsByClassName('container')[0];
currentMemberDiv.appendChild(iDiv);
var oldMemberDiv = document.getElementsByClassName('container')[1];
oldMemberDiv.appendChild(iDiv2);

var divs = [iDiv, iDiv2]
var json_objs = [json_obj.currentMembers, json_obj.oldMembers]

for(var j = 0; j < divs.length; j++) {
	for(var i = 0; i < json_objs[j].length; i++) {
		var innerDiv = document.createElement('div');
		innerDiv.className = 'col-sm-6 col-lg-4 col-xl-3';
		divs[j].appendChild(innerDiv);
		
		var personDiv = document.createElement('div');
		personDiv.className = 'single-person';
		innerDiv.appendChild(personDiv);
		
		var imageDiv = document.createElement('div');
		imageDiv.className = 'person-image';
		personDiv.appendChild(imageDiv);
		
		var imgTag = document.createElement('img');
		imgTag.src = json_objs[j][i].image;
		imgTag.loading="lazy";
		imageDiv.appendChild(imgTag);
		
		var icon = document.createElement('span');
		icon.className = 'icon'
		imageDiv.append(icon);
		
		var icon2 = document.createElement('i');
		icon2.className = json_objs[j][i].icon;
		icon.appendChild(icon2);
		
		var personInfo = document.createElement('div');
		personInfo.className = 'person-info';
		personDiv.appendChild(personInfo);
		
		var hthree = document.createElement('h3');
		hthree.className = 'full-name'
		hthree.innerHTML = json_objs[j][i].name;
		personInfo.append(hthree);
		
		var spec = document.createElement('span');
		spec.className = 'speciality'
		spec.innerHTML = json_objs[j][i].speciality;
		personInfo.append(spec);

	}
}
