<template>
  <div id="default-layout">
    <navContainer />
    <Nuxt class="nuxt-tag" />
    <footerComponent />
  </div>
</template>

<script>
export default {
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
