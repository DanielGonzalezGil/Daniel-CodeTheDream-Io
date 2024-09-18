
// Creating a footer using DOM manipulation
const footer= document.createElement('footer');
// footer.innerHTML = '<p>&copy; Daniel Gonzalez</p>';
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

// ----- form handling code ------
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

    newMessage.innerHTML=`<a href="mailto:${formData.get('userEmail')}">${formData.get('usersName')}</a>
    <span>${formData.get('usersMessage')}</span>`; 

    const removeButton = document.createElement('button'); 
    removeButton.innerText = "Remove";
    removeButton.type="button";
    removeButton.style.fontSize = '12px'; // Smaller font size
    removeButton.style.padding = '5px 10px'; // Smaller padding
    removeButton.style.width = 'auto'; // Let the width fit the content
    removeButton.style.height = 'auto';


    removeButton.addEventListener('click', () => {

        let entry = removeButton.parentElement;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
}


messageForm.addEventListener('submit', getSubmittedInfo);


