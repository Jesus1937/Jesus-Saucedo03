// Get the current date
const today = new Date();

// Get the current year from the date
const thisYear = today.getFullYear();

// Create a new 'footer' element and append it to the body of the document
const footer = document.createElement('footer');
document.body.appendChild(footer);

// Create a new 'p' element for the copyright notice
const copyright = document.createElement('p');

// Set the inner HTML of the copyright element with the current year
copyright.innerHTML = `&copy; Jesus Saucedo ${thisYear}`;

// Append the copyright paragraph to the footer
footer.appendChild(copyright);

// Create an array of skills
var skills = ['JavaScript', 'html', 'CSS', 'Java', 'python'];

// Get the element with the ID 'skills' (assumed to be a section or div)
var skillsSelection = document.getElementById("skills");

// Find the 'ul' (unordered list) inside the 'skills' section
var skillsList = skillsSelection.querySelector('ul');

// Loop through the skills array and add each skill as a list item ('li') to the 'ul'
for (var i = 0; i < skills.length; i++) {
    var skill = document.createElement('li'); // Create new list item
    skill.innerText = skills[i]; // Set the text to the current skill
    skillsList.appendChild(skill); // Append the list item to the 'ul'
}

// Get the 'leave_message' form by its name attribute
var messageForm = document.getElementsByName('leave_message')[0];

// Function to handle the form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior (page refresh)
  
    // Get the values entered in the form fields
    var usersName = event.target.username.value;
    var usersEmail = event.target.usersEmail.value;
    var usersMessage = event.target.usersMessage.value;

    // Log the user's name, email, and message to the console
    console.log('Name: ' + usersName);
    console.log('Email: ' + usersEmail);
    console.log('Message: ' + usersMessage);

    // Get the 'messages' section and the 'ul' inside it to display the messages
    var messageSection = document.getElementById('messages');
    var messageList = messageSection.querySelector('ul');
  
    // Create a new list item ('li') for the new message
    var newMessage = document.createElement('li');
  
    // Set the inner HTML of the message to include the user's name, email (as a mailto link), and message
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span>: ${usersMessage}</span>
    `;

var removeButton = document.createElement('button');
removeButton.innerText = 'Remove';
removeButton.type = 'button';
  
    // Add an event listener to the 'Remove' button to delete the message when clicked
    removeButton.addEventListener('click', function() {
        var entry = removeButton.parentNode; // Get the parent list item ('li')
        entry.remove(); // Remove the list item
    });

    // Append the 'Remove' button to the message list item
    newMessage.appendChild(removeButton);
  
    // Append the new message (with remove button) to the message list ('ul')
    messageList.appendChild(newMessage);

    // Reset the form fields after submission
    messageForm.reset();
}

// Add an event listener to the form to handle submission via the 'handleSubmit' function
messageForm.addEventListener('submit', handleSubmit);

// Fetch a list of repositories from the GitHub API for the user 'jesus1937'
fetch('https://api.github.com/users/jesus1937/repos')
    .then((res) => {
        if (!res.ok) {
            throw new Error('Request Failed'); // Handle errors in the fetch request
        }
        return res.json(); // Convert the response to JSON
    })
    .then(data => {
        return data; // Return the fetched data (repositories)
    })
    .then(repositories => {
        if (repositories.length == 0) {
            console.log('No repositories found.'); // Handle case where no repos are found
        } else {
            console.log('Repositories:', repositories); // Log the repositories

            // Get the 'projects' section and its 'ul' to list the repositories
            var projectSection = document.getElementById('projects');
            var projectList = projectSection.querySelector('ul');

            // Loop through the repositories and add each one as a list item
            for (let i = 0; i < repositories.length; i++) {
                let project = document.createElement('li'); // Create new list item
                project.innerText = repositories[i].name; // Set the repo name as the text
                projectList.appendChild(project); // Append the list item to the 'ul'
            }
        }
    })
    .catch(error => {
        console.log('An error has occurred. Check network or Server.', error); // Handle fetch errors
    });
