const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:data-ready', (event) => {
    const data = event.detail;
    this.populate(data);
  })
};

SelectView.prototype.populate = function (data) {
  data.forEach( (countryObject, index) => {
      const option = document.createElement('option');
      option.textContent = countryObject.name;
      option.value = index;
      this.element.appendChild(option);
  } )

};




module.exports = SelectView;
