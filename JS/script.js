
const today = new Date();

const thisYear = today.getFullYear();

const footer = document.createElement('footer');
document.body.appendChild(footer);

const copyright = document.createElement('p');

copyright.innerHTML = `&copy; Jesus Saucedo ${thisYear}`;

footer.appendChild(copyright);


var skills = ['JavaScript','html','CSS','Java','python'];
var skillsSelection = document.getElementById("skills");
var skillsList = skillsSelection.querySelector('ul');

for(var i=0;i<skills.length;i++){
     var skill = document.createElement('li');
     skill.innerText = skills[i];
     skillsList.appendChild(skill);
}

var messageForm = document.getElementsByName('leave_message')[0];


function handleSubmit(event) {
    event.preventDefault(); 

    
    var usersName = event.target.username.value;
    var usersEmail = event.target.usersEmail.value;
    var usersMessage = event.target.usersMessage.value;

    
    console.log('Name: ' + usersName);
    console.log('Email: ' + usersEmail);
    console.log('Message: ' + usersMessage);

    
    var messageSection = document.getElementById('messages');
    var messageList = messageSection.querySelector('ul');
    var newMessage = document.createElement('li');
    
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span>: ${usersMessage}</span>
    `;

    var removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', function() {
        var entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    
    messageForm.reset();
}


messageForm.addEventListener('submit', handleSubmit);


    
        

// Creating a fetch
fetch('https://api.github.com/users/jesus1937/repos')
    .then((res) => {
        if(!res.ok){
            throw new Error('Request Failed');
        }
        return res.json();
    })
    .then(data =>{
        return data;
    })
    .then(repositories =>{
        if(repositories.length == 0){
            console.log('No repositories found.')
        } else{
        console.log('Repositories:',repositories);

        //Using DOM to make a list of Repos
        var projectSection = document.getElementById('projects');
            var projectList = projectSection.querySelector('ul');
            console.log(projectList);

    for(let i = 0; i < repositories.length; i++){
        let project = document.createElement('li');

        project.innerText = repositories[i].name;

        projectList.appendChild(project);
            }
        }


    })
    .catch(error =>{
        console.log('An error has occured. Check network or Server.', error);
    });

    

    
