import shareSvg from './img/share.svg';

const domModule = () => {
  const clearContent = () => {
    const content = document.getElementById('content');
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  };

  const createElem = (elemName, classes = [], attrs = '', eventListner = null) => {
    const elem = document.createElement(elemName);
    if (classes.length > 0) {
      elem.classList.add(...classes);
    }

    if (attrs !== '') {
      if (typeof attrs === 'string') {
        attrs = { id: attrs };
      }

      Object.entries(attrs).forEach(a => {
        elem.setAttribute(a[0], a[1]);
      }); 
    }
    if (eventListner) {
      elem.addEventListener('click', eventListner);
    }
    return elem;
  }

  const createCard = (content) => {
    const card = createElem('div', ['my-1', 'px-1', 'w-full', 'md:w-1/2', 'lg:my-4', 'lg:px-4', 'lg:w-1/3']);
    const article = createElem('div', ['overflow-hidden', 'rounded-lg', 'shadow-lg', 'relative']);
    const img = createElem('img', ['block', 'h-auto', 'w-full'], {src: content});
    const footer = createElem('footer', ['flex', 'absolute', 'bottom-0', 'right-0', 'justify-end', 'p-4',
     'w-full', 'leading-none', 'bg-gray-900', 'bg-opacity-75']);
    const a = createElem('a');
    const span = createElem('span', ['hidden']);
    const i = createElem('i',['bg-share', 'text-yellow-500', 'block', 'bg-no-repeat', 'bg-cover', 'w-6', 'h-6']);
    a.appendChild(span);
    a.appendChild(i);
    footer.appendChild(a);
    article.appendChild(img);
    article.appendChild(footer);
    card.appendChild(article);
    return card;
  };

  const displayCards = (data) => {
    clearContent();
    const content = document.getElementById('content');
    data.forEach(item => {  
      content.appendChild(createCard(item.images.original.url));
    });
  };

  return { displayCards }
}
export { domModule as default };
