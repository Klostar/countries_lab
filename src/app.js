const CountriesInformation = require('./models/countries.js');
const SelectView = require('./views/select_view.js');



document.addEventListener('DOMContentLoaded', () => {
  const info = new CountriesInformation();
  info.getData();

  const dropdown = document.querySelector('#countries');
  const selectView = new SelectView(dropdown);
  selectView.bindEvents();

});
