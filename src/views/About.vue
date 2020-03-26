<template>
  <div class="about">
    <Header />
    <h1>This is an about page</h1>
    <Footer />
  </div>
</template>


<script>

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style scoped>

Footer {
  position: absolute;
 bottom: 0;
 width: 100%
}

</style>