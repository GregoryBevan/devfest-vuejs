<template>
  <div class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand">
          <router-link to="/">Home</router-link>
        </a>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <router-link to="/">Mes séries</router-link>
        </li>
        <li>
          <router-link to="/favorites">Favoris</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
