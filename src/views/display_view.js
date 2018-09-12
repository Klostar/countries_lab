const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const DisplayView = function(element){
  this.element = element

}

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-ready', (event) => {
  const countryObject = event.detail;
  this.render(countryObject);
  })
};

DisplayView.prototype.render = function (object) {
  this.element.innerHTML = '';
  const countryName = document.createElement('h2');
  countryName.textContent = object.name;
  this.element.appendChild(countryName);

  const image = document.createElement('img');
  image.src = object.flag;
  image.style = 'width: 50%; box-shadow: 10px 10px grey'
  this.element.appendChild(image)

  const regionHeader = document.createElement('h2');
  regionHeader.textContent = 'Region:';
  this.element.appendChild(regionHeader);

  const region = document.createElement('h3');
  region.textContent = object.region
  this.element.appendChild(region);

  const languagesHeader = document.createElement('h2');
  languagesHeader.textContent = 'Languages:';
  this.element.appendChild(languagesHeader);

  const list = document.createElement('ul');
  this.element.appendChild(list);
  object.languages.forEach((language) => {
    const entry = document.createElement('li');
    entry.textContent = `${language.name} (${language.nativeName})`;
    this.element.appendChild(entry)

  });

};


module.exports = DisplayView;
