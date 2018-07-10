<template>
  <div id="app">
    <div class="container-fluid wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    font-family:'Open Sans', sans-serif;
  }
  p {
    margin:0;
    padding:0;
  }

</style>
