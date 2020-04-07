// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';



const paragraph1 = document.createElement('p')
// create a new p referenced in the variable 'paragraph1'
paragraph1.textContent = 'This is red';

paragraph1.style.color = 'red';

const headline3 = document.createElement('h3')
headline3.style.color = 'Im a blue h3'


const newDiv = document.createElement('div')
newDiv.style.backgroundColor = 'pink';
newDiv.style.borderColor = 'black';


const newDivh1 = document.createElement('h1')
newDivh1.textContent = 'Im in a div!'
newDiv.appendChild(newDivh1);

const newDivp = document.createElement('p')
newDivp.textContent = 'ME TOO!'
newDiv.appendChild(newDivp)



container.appendChild(newDiv);
container.appendChild(headline3);
container.appendChild(paragraph1);
container.appendChild(content);
