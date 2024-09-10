
const today = new Date();

const thisYear = today.getFullYear();

const footer = document.createElement('footer');
document.body.appendChild(footer);

const copyright = document.createElement('p');

copyright.innerHTML = `&copy; Jesus Saucedo ${thisYear}`;

footer.appendChild(copyright);


var skills = ['JavaScript','html','CSS','Java','python'];
var skillsSelection = document.getElementById("Skills");
var skillsList = skillsSelection.querySelector('ul');

for(var i=0;i<skills.length;i++){
     var skill = document.createElement('li');
     skill.innerText = skills[i];
     skillsList.appendChild(skill);
}


