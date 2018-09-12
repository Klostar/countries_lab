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
  console.log(object);
};

module.exports = DisplayView;
