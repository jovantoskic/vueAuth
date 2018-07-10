<template>
  <div class="createUser">
    <MenuComponent></MenuComponent>
    <div class="createUserForm">
      <form class="form-signin" @submit.prevent="submit">

        <h2 class="form-signin-heading">Create user</h2>
        <p v-if="message">User with ID {{ id }} created at {{ created }}</p>

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
    </div>
  <button class="btn btn-primary" type="submit"  :disabled='!isCompleted' @click="createUser">Create user</button>
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
        message:false,
        users:[],
        errors:[],
        firstName: '',
        lastName: '',
        id:'',
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
    computed: {
      isCompleted() {
        return this.firstName && this.lastName && this.email && this.phoneNumber && this.date;
      },
    },
    methods: {
      createUser() {
        this.$http.post('/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          email:this.email,
          phoneNumber:this.phoneNumber,
          date:this.date
        })
          .then(response => {
            this.created = response.data.createdAt;
            this.id = response.data.id;
            if(this.isCompleted) {
                this.message = true;
            }
          })
          .catch((err) => {
            this.errors = err;
          })
      },
    }
  }
</script>

<style scoped>
  .createUserForm {
    width:90%;
    height:20rem;
  }
  form {
    width:60%;
  }
  form h2 {
    margin-bottom:0.8rem;
  }
  form p {
    margin-bottom:0.3rem;
  }
  input {
    margin-bottom:0.8rem;
  }

</style>
