// Creating a footer using DOM manipulation
const footer= document.createElement('footer');
footer.style.color = '#ffbc36';
footer.style.backgroundColor = '#073467';
footer.style.padding = '10px';
//TODO: figure out how to center the text in the footer
document.body.append(footer);

// Dynamically adding the current year to the footer
const today = new Date();// setting date object as 'today'
const thisYear = today.getFullYear();
const paragraphTag = document.createElement('p');
paragraphTag.innerHTML = `&copy; Daniel Gonzalez ${thisYear}`;
footer.append(paragraphTag);

const techSkills = ["HTML", "CSS", "Javascript","Git", "Github" ];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");

// returned undefined because skills already holds the actual value, not the index value
for (let skills of techSkills){
    const skill = document.createElement("li");
    skill.innerText = skills;
    skillsList.appendChild(skill); 
}


// ----- FORM HANDLING CODE ------
const messageForm = document.getElementById("messageForm");// <- CSS Attribute Selector

const getSubmittedInfo = (event) => {
    event.preventDefault();
    const formData= new FormData(event.target);
    console.log(`User Name: ${formData.get('usersName')}`);
    console.log(`User Email: ${formData.get('userEmail')}`);
    console.log(`User Message: ${formData.get('usersMessage')}`);

    const messageSection = document.getElementById("messages"); 
    const messageList = messageSection.querySelector("ul");
    const newMessage= document.createElement("li");
// TODO: fix spacing/padding beween remove button and user message
    newMessage.innerHTML=`<a href="mailto:${formData.get('userEmail')}">${formData.get('usersName')}</a>
    <span>${formData.get('usersMessage')}</span>`; 

    const removeButton = document.createElement('button'); 
    removeButton.innerText = "Remove";
    removeButton.type="button";

    removeButton.addEventListener('click', () => {
        let entry = removeButton.parentElement;
        entry.remove();
    });
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
}
messageForm.addEventListener('submit', getSubmittedInfo);


// ----- GITHUB API HANDLING CODE -----
    // potential refactoring: use a async function
    // potential feature: make a bootstrap card (or similer) together with the api
const projectSection = document.getElementById("Projects");

fetch("https://api.github.com/users/DanielGonzalezGil/repos")
.then( response => {
    if (!response.ok){
        throw new Error("Could not fetch any data")
    }
    return response.json(); //no need to use JSON.parse() as this already parses the response into a JS object
})
.then(data => {

    data.forEach(repoObj =>{
        const project = document.createElement('li');
        project.innerText = repoObj['name']; //<---
        // project.appendChild(projectSection);
        console.log(project)

    });
    console.log(data);
})
.catch(error => console.log(error));


