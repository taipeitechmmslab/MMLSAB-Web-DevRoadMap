console.log('使用者查詢example1');
$(() => {
    console.log($('#title').text(), 'yes');
})
//定義getData的方法
let getData = url => fetch(url)
    .then(response => response.json())
    .then(json => {return json})
//刪除使用者
let deletePerson = (DOM) => {
    $(DOM).closest("tr").remove();
}
//指定網址，並執行getData的方法
getData('https://jsonplaceholder.typicode.com/users').then((data) => {
    let personList = '';
    data.forEach(element => {
        personList = personList + `<tr>
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.phone}</td>
            <td>${element.email}</td>
            <td><button class="btn btn-danger" onclick="deletePerson(this)">X</button></td>
        </tr>`;
    });
    $('#personList').append(personList);
});