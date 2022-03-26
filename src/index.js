import generateJoke from './generateJoke.js';
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.querySelector('[data-laugh]');
laughImg.src = laughing;
console.log(laughImg);

const jokeBtn = document.querySelector('[data-jokeBtn]');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();
