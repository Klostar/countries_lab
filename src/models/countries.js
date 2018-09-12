const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const CountriesInformation = function () {
  this.dataArray = null;
};

CountriesInformation.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    console.log(data);
  })
};

module.exports = CountriesInformation;
