// Write your code here!
// Remove the main node with id 'main'
document.querySelector('#main').remove();

// Create a new h1 node with id 'victory' and the message "YOUR-NAME is the champion"
const newHeader = document.createElement('h1');

newHeader.id = 'victory';
newHeader.innerHTML = "YOUR-NAME is the champion";

document.body.appendChild(newHeader);




