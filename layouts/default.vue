<template>
  <div id="default-layout">
    <nav-container />
    <Nuxt class="nuxt-tag" />
    <footer-main class="footer-main" />
  </div>
</template>

<script>
import NavContainer from '~/components/nav-container'
import FooterMain from '~/components/footer-main'
export default {
  components: { NavContainer, FooterMain },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
#default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.nuxt-tag {
  flex-grow: 1;
}
.footer-main {
}
</style>
<style>
/* Global layout styles */
body {
  padding: 0; margin: 0;
  font-family: 'Archivo', Arial, sans-serif;
}

.nuxt-tag {
  background: #f4f7f8;
}
</style>
