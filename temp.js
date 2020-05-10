const BASE_URL = 'http://localhost:8080';

var request = new XMLHttpRequest();

const requestString = BASE_URL + '/getAllItems';

function f () {
    request.open("GET", requestString, false);
    request.send();
    return request.responseText;
}
var a = JSON.parse(f());

console.log(a[0]);
console.log("a");