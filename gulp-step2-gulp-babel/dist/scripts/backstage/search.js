"use strict";

console.log('使用者查詢example1');
$(function () {
  console.log($('#title').text(), 'yes');
});

var getData = function getData(url) {
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (json) {
    return json;
  });
}; //刪除使用者


var deletePerson = function deletePerson(DOM) {
  $(DOM).closest("tr").remove();
};

getData('https://jsonplaceholder.typicode.com/users').then(function (data) {
  var personList = '';
  data.forEach(function (element) {
    personList = personList + "<tr>\n            <th scope=\"row\">".concat(element.id, "</th>\n            <td>").concat(element.name, "</td>\n            <td>").concat(element.phone, "</td>\n            <td>").concat(element.email, "</td>\n            <td><button class=\"btn btn-danger\" onclick=\"deletePerson(this)\">X</button></td>\n        </tr>");
  });
  $('#personList').append(personList);
});