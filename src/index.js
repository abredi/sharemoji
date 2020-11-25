import './css/vendor/tailwind.vendor.css';
import './css/style.css';
import favIcon from './img/favicon.png';
import greetingModule from "./dom";
import APIModule from "./api";

const init = () => {
  const gm = greetingModule();
  const api = APIModule();
  const mainContent = document.getElementById('content');
  mainContent.classList.add(...['flex', 'justify-center'])
  mainContent.appendChild(gm.createGreeting('Hello World'));

  const title = document.getElementById('favIcon');
  title.setAttribute('href', favIcon);

  const img = document.querySelector('img');
  const xhr = api.get();
  xhr.then(function(response) {
    img.src = response.data.images.original.url;
  });
};

init();