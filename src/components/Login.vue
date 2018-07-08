<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">

      <h2 class="form-signin-heading">Please sign in</h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>

      <div class="email">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      </div>

      <div class="pass">
        <label for="inputPassword" class="sr-only">Password</label>
        <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      </div>

      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    /* eslint-disable */
    login () {
      this.$http.post('/login', { email: this.email, password: this.password })
        .then(response => this.loginSuccessful(response))
        .catch(() => this.loginFailed())
    },
    loginSuccessful (response) {
      localStorage.setItem('user-token', response.data.token);
      let token = localStorage.getItem('user-token');

      if (!response.data.token) {
        this.loginFailed()
      } else {
          console.log(response.data.token)
      }
//      if token present push user to usersList page
      if (token) {
        this.$router.push({ name: 'usersList' })
      }
    },
    loginFailed () {
      this.error = 'Login failed!'
      delete localStorage.token
    }
  }
}
</script>

<style scoped>

.login-wrapper {
  background: #fff;
  width: 70%;
  margin: 12% auto;
}
.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin {
  margin-bottom: 10px;
}
.form-signin {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
