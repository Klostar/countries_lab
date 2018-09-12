const CountriesInformation = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const DisplayView = require('./views/display_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const info = new CountriesInformation();
  info.getData();
  info.bindEvents();

  const dropdown = document.querySelector('#countries');
  const selectView = new SelectView(dropdown);
  selectView.bindEvents();

  const displayElement = document.querySelector('#country');
  const displayView = new DisplayView(displayElement);
  displayView.bindEvents();


});
