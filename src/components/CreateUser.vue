<template>
  <div class="createUser">
    <MenuComponent></MenuComponent>
    <div class="createUserForm">
      <form class="form-signin" @submit.prevent="submit">
        <h2 class="form-signin-heading">Create user</h2>

        <div class="firstName">
          <label for="inputFirstName" class="sr-only">First Name</label>
          <input v-model="firstName" type="text" id="inputFirstName" class="form-control" placeholder="First Name" required>
        </div>

        <div class="lastName">
          <label for="inputLastName" class="sr-only">Last name</label>
          <input v-model="lastName" type="password" id="inputLastName" class="form-control" placeholder="Last Name" required>
        </div>

        <div class="email">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        </div>

        <div class="phoneNumber">
          <label for="inputPhoneNumber" class="sr-only">Phone Number</label>
          <input v-model="phoneNumber"  type="number" id="inputPhoneNumber" class="form-control" placeholder="Phone Number" required>
          <p v-if="phoneNumber.length > 10">Phone number can't be bigger then 10 digits</p>
        </div>

        <flat-pickr v-model="date"></flat-pickr>
      </form>
      <div class="newUser">
        <div>
          <p class="message">{{message}}</p>
        </div>
        <div>
          <p>First Name:</p>
          <p>{{ firstName }}</p>
        </div>
        <div>
          <p>Last Name:</p>
          <p>{{ lastName }}</p>
        </div>
        <div>
          <p>Email:</p>
          <p>{{ email }}</p>
        </div>
        <div>
          <p>Phone Number:</p>
          <p>{{ phoneNumber }}</p>
        </div>
        <div>
          <p>Date:</p>
          <p>{{ date }}</p>
        </div>
        <div>
          <p>Created at:</p>
          <p>{{ created }}</p>
        </div>
      </div>
    </div>
  <button class="btn btn-primary" type="submit" @click="createUser">Create user</button>
  </div>
</template>

<script>
  import flatPickr from 'vue-flatpickr-component'
  import 'flatpickr/dist/flatpickr.css'
  import MenuComponent from './MenuComponent.vue'
  /* eslint-disable */
  export default {
    name: 'CreateNewUser',
    data () {
      return {
        message:'',
        users:[],
        errors:[],
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        created:'',
        date:null
      }
    },
    components: {
      flatPickr,
      MenuComponent
    },
    methods: {
      createUser () {
        this.$http.post('/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          email:this.email,
          phoneNumber:this.phoneNumber,
          date:this.date
        })
          .then(response => {
            this.firstName = response.data.firstName;
            this.lastName = response.data.lastName;
            this.email = response.data.email;
            this.phoneNumber = response.data.phoneNumber;
            this.date = response.data.date;
            this.created = response.data.createdAt;
//            if(this.firstName !== "") {
//                this.message = 'New user with fallowing credentials created';
//            }
          })
          .catch((err) => {
            this.errors = err;
          })
      },
//      fetchUser(id) {
//        this.$http.get('/users/' + id).then(response => {
//          console.log('response',response)
//        })
//      }
    }
  }
</script>

<style scoped>
  .createUserForm {
    width:100%;
    height:20rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .newUser {
    align-self:flex-end;
    width:40%;
    height:92%;
  }
  .newUser p {
    margin:0;
    padding:0;
  }
  .message {
    font-size:1.1rem;
  }
  .newUser div:first-child {
    width:100%;
    height:2rem;padding-left:1rem;
  }
  .newUser div:not(:first-child) {
    width:100%;
    height:2.3rem;margin-bottom:0.9rem;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    padding-left:1rem;
  }
  .newUser div p:first-child {
    margin-right:2rem;
  }
  form {
    width:60%;
  }
  input {
    margin-bottom:0.8rem;
  }
</style>
