
var json_obj;


const  fillData = async() => {
  await fetch('https://raw.githubusercontent.com/viru2001/SolecthonWebsite/master/data.json')
  .then(res => res.json())
  .then(json => {
    json_obj = json;
  });
  
  let iDiv = document.createElement("div");
  iDiv.id = "currentMembers";
  iDiv.className = "row";

  let iDiv2 = document.createElement("div");
  iDiv2.id = "oldMembers";
  iDiv2.className = "row";

  let currentMemberDiv = document.getElementsByClassName("container")[0];
  currentMemberDiv.appendChild(iDiv);
  let oldMemberDiv = document.getElementsByClassName("container")[1];
  oldMemberDiv.appendChild(iDiv2);

  let divs = [iDiv, iDiv2];
  let json_objs = [json_obj.currentMembers, json_obj.oldMembers];

  for (let j = 0; j < divs.length; j++) {
    for (let i = 0; i < json_objs[j].length; i++) {
      let innerDiv = document.createElement("div");
      innerDiv.className = "col-sm-6 col-lg-4 col-xl-3";
      divs[j].appendChild(innerDiv);

      let personDiv = document.createElement("div");
      personDiv.className = "single-person";
      innerDiv.appendChild(personDiv);

      let imageDiv = document.createElement("div");
      imageDiv.className = "person-image";
      personDiv.appendChild(imageDiv);

      let imgTag = document.createElement("img");
      imgTag.src = json_objs[j][i].image;
      imgTag.loading = "lazy";
      imageDiv.appendChild(imgTag);

      let icon = document.createElement("span");
      icon.className = "icon";
      imageDiv.append(icon);

      let icon2 = document.createElement("i");
      icon2.className = json_objs[j][i].icon;
      icon.appendChild(icon2);

      let personInfo = document.createElement("div");
      personInfo.className = "person-info";
      personDiv.appendChild(personInfo);

      let hthree = document.createElement("h3");
      hthree.className = "full-name";
      hthree.innerHTML = json_objs[j][i].name;
      personInfo.append(hthree);

      let spec = document.createElement("span");
      spec.className = "speciality";
      spec.innerHTML = json_objs[j][i].role;
      personInfo.append(spec);
    }
  }
};

fillData();
