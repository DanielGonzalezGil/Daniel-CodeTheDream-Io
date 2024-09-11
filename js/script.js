
// Creating a footer using DOM manipulation
const footer= document.createElement('footer');
// footer.innerHTML = '<p>&copy; Daniel Gonzalez</p>';
footer.style.color = '#ffbc36';
footer.style.backgroundColor = '#073467';
footer.style.padding = '10px';
//TODO: figure out how to center the text in the footer

document.body.append(footer);


const today = new Date();
const thisYear = today.getFullYear();
const copyRight = document.createElement('p');
footer.innerHTML.copyRight = `&copy;${thisYear}`;