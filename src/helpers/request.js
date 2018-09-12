const Request = function (url) {
  this.url = url;
};

Requst.prototype.get = function (onComplete) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
  xhr.addEventListener('load', () => {
    if(xhr.status !== 200){
      return;
    }
    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);
    oncomplete(data);
  })
};

module.exports = Request;
