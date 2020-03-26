<template>
        <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top fixed-top py-2">
  <div class="container">
    <a class="navbar-brand" href="#">
      <router-link to="/" class="logo">Harmart</router-link>
          <img src="" alt="">
          </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          
        <li class="nav-item">
          <a href="#"><button type="button" class="btn btn-elegant">Log in</button></a>
        </li>
        <li class="nav-item">
          <a href="#"><button type="button" class="btn btn-elegant">Sign up</button></a>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="about">About</router-link>
          <!-- <a href="#" class="about"><button type="button" class="btn btn-link">About us</button></a> -->
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
</template>


<script>

export default {
        name: 'Header'
}
</script>

<style scoped>

.about {
  position: absolute;
  right: 30px;
  top: 30px;
  color: #fff;
}

.logo {
  color: #fff;
}
</style>