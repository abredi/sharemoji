import './css/vendor/tailwind.vendor.css';
import './css/style.css';
import greetingModule from "./dom";
import APIModule from "./api";

const init = () => {
  const gm = greetingModule();
  const api = APIModule();
  const mainContent = document.getElementById('content');
  mainContent.classList.add(...['flex', 'justify-center'])
  mainContent.appendChild(gm.createGreeting('Hello World'));

  const img = document.querySelector('img');
  api.get();

};

init();