var json_obj;

const fillData = async () => {
  await fetch(
    "https://raw.githubusercontent.com/viru2001/SolecthonWebsite/master/data/team.json"
  )
    .then((res) => res.json())
    .then((json) => {
      json_obj = json;
    });

  let teamsKeys = Object.keys(json_obj);
  // console.log(teamsKeys);

  let teams = document.querySelector("#teams");

  teamsKeys.map((x) => {
    // console.log(x);

    let heading = document.createElement("h1");
    heading.innerText = x;

    let centerDiv = document.createElement("div");
    centerDiv.className = "centered";
    centerDiv.appendChild(heading);

    let mainDiv = document.createElement("div");
    mainDiv.className = "containerTop header1";
    mainDiv.appendChild(centerDiv);
    teams.appendChild(mainDiv);



    

    let teamSection = document.createElement("section");
    teamSection.className = "section-team";
    teams.appendChild(teamSection);

    let sectionDiv = document.createElement("div");
    sectionDiv.className = "container";
    teamSection.appendChild(sectionDiv);

    let newDiv = document.createElement("div");
    newDiv.id = x;
    newDiv.className = "row";

    sectionDiv.appendChild(newDiv);
    
    

   

    for (let i = 0; i < json_obj[x].length; i++) {
      // console.log(json_obj[x][i]);
      let innerDiv = document.createElement("div");
      innerDiv.className = "col-sm-6 col-lg-4 col-xl-3";
      newDiv.appendChild(innerDiv);

      let personDiv = document.createElement("div");
      personDiv.className = "single-person";
      innerDiv.appendChild(personDiv);

      let imageDiv = document.createElement("div");
      imageDiv.className = "person-image";
      personDiv.appendChild(imageDiv);

      let imgTag = document.createElement("img");
      imgTag.src = "https://raw.githubusercontent.com/viru2001/SolecthonWebsite/master/images/members/"+ json_obj[x][i].image;
      // imgTag.src = "images/members/"+ json_obj[x][i].image;
      
      imgTag.loading = "lazy";
      imageDiv.appendChild(imgTag);

      let icon = document.createElement("span");
      icon.className = "icon";
      imageDiv.append(icon);

      let icon2 = document.createElement("i");
      icon2.className = json_obj[x][i].icon;
      icon.appendChild(icon2);

      let personInfo = document.createElement("div");
      personInfo.className = "person-info";
      personDiv.appendChild(personInfo);

      let hthree = document.createElement("h3");
      hthree.className = "full-name";
      hthree.innerHTML = json_obj[x][i].name;
      personInfo.append(hthree);

      let spec = document.createElement("span");
      spec.className = "speciality";
      spec.innerHTML = json_obj[x][i].role;
      personInfo.append(spec);

      // sectionDiv.appendChild(innerDiv);
    }
  });

  
  let tmp = localStorage.getItem("dm");

  if (tmp == null) {
    localStorage.setItem("dm", "day");
    $("#darkModeBtn").html(nightEmo);
  }

  if (tmp == "night") {
    setMode(elementsList, night, dayEmo);
  } else {
    $("#darkModeBtn").html(nightEmo);
  }
};

fillData();
