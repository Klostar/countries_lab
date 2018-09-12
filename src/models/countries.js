const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const CountriesInformation = function () {
  this.dataArray = null;
};

CountriesInformation.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.dataArray = data;
    PubSub.publish('Countries:data-ready', this.dataArray)
  })
};

module.exports = CountriesInformation;
