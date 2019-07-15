const search = () => {
    console.log($('#title').text(), 'yes'); // eslint-disable-line no-undef
    //定義getData的方法
    let getData = url =>
    fetch(url)
    .then(response => response.json()) //取得回傳的json字串
    .then(json => {
        return json; //回傳json
    }); 
    //指定網址，並執行getData的方法
    getData('https://jsonplaceholder.typicode.com/users').then((data) => {
        let personList = '';
        //將資料進行轉換
        data.forEach(element => {
            personList = personList + `<tr>
                <th scope="row">${element.id}</th>
                <td>${element.name}</td>
                <td>${element.phone}</td>
                <td>${element.email}</td>
            </tr>`;
        });  // scope標示為表頭
        $('#personList').append(personList); //插入元素到id為personList元素
    });
}

export default search