const CountriesInformation = require('./models/countries.js');



document.addEventListener('DOMContentLoaded', () => {
  const info = new CountriesInformation();
  info.getData();
});
