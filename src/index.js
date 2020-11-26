import './css/vendor/tailwind.vendor.css';
import './css/style.scss';
import favIcon from './img/favicon.png';
import domModule from "./dom";
import APIModule from "./api";

const displayGrid = (uri = 'stickers/trending', query = null) => {
  const dm = domModule();
  const api = APIModule();
  const xhr = api.get(uri, query);
  xhr.then(function(response) {
    dm.displayCards(response.data);
  });
};

const init = () => {
  const title = document.getElementById('favIcon');
  title.setAttribute('href', favIcon);

  displayGrid();
};

document.getElementById('search').addEventListener('click', (event) => {
  const q = document.getElementById('q');
  if (q.value !== '') {
    displayGrid('gifs/search', q.value);
  }
});

init();