<template>
  <nav>
    <p @click="toCreateUser">Create new user</p>
    <p @click="logout">Logout</p>
  </nav>
</template>


<script>
  /* eslint-disable */
export default {
  components: {
      component:'MenuComponent'
  },
  methods: {
    logout() {
      let token = localStorage.getItem('user-token')
      if (token) {
        localStorage.removeItem('user-token')
        this.$router.push({ name: 'login' })
      }
    },
    toCreateUser() {
      this.$router.push({ name: 'createUser' })
    },
  }
}

</script>

<style scoped>
  nav {
    width:100%;
    height:3rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-radius:3px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin-bottom:2rem;
    padding:0 1rem 0 1rem;
  }
  nav p {
    margin:0;
    padding:0;
    cursor:pointer;
  }
</style>
