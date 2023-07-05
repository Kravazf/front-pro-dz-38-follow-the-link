const createButton = (text, url) => {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', () => redirectToWebsite(url));
  return button;
};

const redirectToWebsite = url => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  window.location.href = url;
};

const buttonHttps = createButton('Перейти на сайт bootstrap', 'https://getbootstrap.com/');
const buttonAutoProtocol = createButton('Перейти на сайт fontsquirrel', 'fontsquirrel.com/tools/webfont-generator');

document.body.appendChild(buttonHttps);
document.body.appendChild(buttonAutoProtocol);





 
  
  
  
  
  
  
  