from bs4 import BeautifulSoup
import requests
import json

url = "https://sanket2000.github.io/SolecthonWebsite/team.html"

page = requests.get(url).text
soup = BeautifulSoup(page,'lxml')

dd = {
    "currentMembers":[],
    "oldMembers":[]
}

sectionTeam = soup.find_all('section',class_ = 'section-team')
for j, section in enumerate(sectionTeam):
    cardObjects = section.find_all('div',class_ = 'col-sm-6 col-lg-4 col-xl-3')
    
    for i, cardObject in enumerate(cardObjects):
        name = cardObject.find('h3').string
        image = cardObject.find('img',src = True)["src"]
        speciality = cardObject.find('span', class_ = 'speciality').string
        icon = cardObject.find('i')["class"][0]
        
        d = {
            "name":name,
            "image":image,
            "speciality":speciality,
            "subsystem":None,
            "icon":icon
        }

        print(d["speciality"])
        if(j == 0):
            dd["currentMembers"].append(d)
        else:
            dd["oldMembers"].append(d)
    print("--------------------------------")
    
with open('team.json', 'w+') as f:
    json.dump(dd, f, indent=4)