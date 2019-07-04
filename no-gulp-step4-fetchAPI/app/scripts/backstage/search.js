console.log("使用者查詢example1");
$(() => {
  console.log($("#title").text(), "yes");
});
//定義getData的方法
let getData = url =>
  fetch(url)
    .then(response => response.json()) //取得回傳的json字串
    .then(json => {
      return json; //回傳json
    }); 

//指定網址，並執行getData的方法，
getData("https://jsonplaceholder.typicode.com/users").then(data => {
  console.log(data);
});
