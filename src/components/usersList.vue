<template>
  <div class="usersList">
    <MenuComponent></MenuComponent>
    <div class="subHeader">
      <h3>All users</h3>
    </div>
    <div class="tableContainer">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">User id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Avatar</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" @click="removeUser(user)">
          <td>{{ user.id }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td><img ﻿v-bind="{src:user.avatar}" alt=""></td>
          <td><button>Edit</button></td>
          <td >x</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination">
      <div v-for="n in totalPages">
        <a @click="fetchAllUsers(n)">{{n}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import MenuComponent from './MenuComponent.vue'
  /* eslint-disable */
export default {
  name: 'usersList',
  data () {
    return {
      errors: [],
      users:[],
      firstName:'',
      lastName:'',
      email:'',
      phoneNumber:'',
      date: null,
      totalPages: []
    }
  },
  components: {
    MenuComponent
  },
  created() {
     this.fetchAllUsers()
  },
  methods: {
    fetchAllUsers(pageNumber) {
       let page = pageNumber ? pageNumber : 1;
       this.$http.get('/users?page=' + page).then(response => {
       this.totalPages = response.data.total_pages;
       this.users = response.data.data;
      })
    },
    removeUser(u) {
      let index = this.users.indexOf(u);
      this.users.splice(index, 1);
    }
  }
}
</script>

<style scoped>
  p {
    margin:0;
    padding:0;
  }
  .tableContainer {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius:3px;
  }
  .subHeader {
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    margin:0 auto;
    padding:0 0.7rem 0 0.7rem;
  }
  .subHeader p {
    cursor:pointer;
  }
  tbody td {
    cursor:pointer;
  }
  tbody td img {
    object-fit: contain;
    max-width:2rem;
    border-radius:50%;
  }
  .subHeader p:hover {
    opacity:1;
  }
  .pagination {
    display: flex;
  }
  .pagination div {
    height:auto;
  }
  .pagination div a {
    display:flex;
    align-items: center;
    justify-content: center;
    color: black;
    width:2.3rem;
    height:1.8rem;
    text-decoration: none;
    cursor:pointer;
    border:1px solid lightgray;
    border-radius:3px;
  }

</style>
