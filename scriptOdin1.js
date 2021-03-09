const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This's the glorious text-content!";
container.appendChild(content);


const phase = document.createElement('div');
phase.classList.add('phase');
phase.textContent = " I'm red!";
phase.style.color = 'red';
container.appendChild(phase);

const h3text = document.createElement('div');
h3text.classList.add('phaseh3');
h3text.textContent = "I'm blue h3!";
h3text.style.color = 'blue';
container.appendChild(h3text);

const blackpink = document.createElement('div');
blackpink.classList.add('blackpink');
blackpink.style.cssText = 'border: 2px dashed black ; background: pink';

const blackpinkdiv = document.createElement('h1');
blackpinkdiv.textContent = "I'm a div";
blackpink.appendChild(blackpinkdiv);
const blackpinkp = document.createElement('p');
blackpinkp.textContent= "Me too!" ;
blackpink.appendChild(blackpinkp)
container.appendChild(blackpink);

