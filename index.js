// Write your code here!
const main = document.querySelector("#main");
main.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute("hi", "victory");
newHeader.id = 'victory'
newHeader.innerHTML = "YOUR-NAME is the champion";

document.body.append(newHeader);

