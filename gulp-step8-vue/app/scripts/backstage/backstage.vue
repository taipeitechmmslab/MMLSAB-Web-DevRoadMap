<template>
  <div>
    <h1 id="title">使用者查詢example2 by Vue</h1>
    <table id="personList" class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">phone</th>
          <th scope="col">email</th>
          <th scope="col">delete</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.id" v-for="(item,idx) in userList">
          <th scope="row">{{item.id}}</th>
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <td>
            <button class="btn btn-danger" v-on:click="delRow(idx)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      userList: []
    };
  },
  created: function() {
    const that = this;
    let tempList = [];
    that.getData("https://jsonplaceholder.typicode.com/users").then(data => {      
      //that.userList[0] = data[0]; //無效    
      that.userList2 = data; //觀察用
      that.userList.push(...data); //透過push新增資料
    });
  },
  methods: {
    getData(url) {
      return fetch(url)
        .then(response => response.json())
        .then(json => {
          return json;
        });
    },
    delRow(index) {
      bus.$emit("delClick", this.userList[index]);
      this.userList.splice(index, 1);
    }
  }
};
</script>