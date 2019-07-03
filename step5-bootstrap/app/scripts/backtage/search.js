console.log('使用者查詢example1');
$(() => {
    console.log($('#title').text(), 'yes');
})
let getData = url => fetch(url)
    .then(response => response.json())
    .then(json => {return json})
getData('https://jsonplaceholder.typicode.com/users').then((data) => {
    let personList = '';
    data.forEach(element => {
        personList = personList + `<tr>
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.phone}</td>
            <td>${element.email}</td>
        </tr>`;
    });
    $('#personList').append(personList);
});