const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const CountriesInformation = function () {
  this.dataArray = null;
};

CountriesInformation.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.dataArray = data;
    PubSub.publish('Countries:data-ready', this.dataArray);

  })
};

CountriesInformation.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:country-selected', (event) => {
  const countryIndex = event.detail;
    this.publishInfo(countryIndex);
    });

};

CountriesInformation.prototype.publishInfo = function (index) {
  const countryObject = this.dataArray[index]
  PubSub.publish('Countries:selected-ready', countryObject)

};


module.exports = CountriesInformation;
