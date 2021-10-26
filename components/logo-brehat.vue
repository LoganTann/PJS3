<template>
  <nuxt-link id="logo" to="/">
    <img src="/img/brehat.png" alt="blazon Île bréhat">
    <div class="text">
      Île de <span class="huge">Bréhat</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'LogoBrehat'
}
</script>

<style lang="scss" scoped>
#logo {
  font-size: 1em;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: flex-end;
  & img {
    height: 2em;
    margin: 0.45em;
  }
  & .text {
    font-family: 'Archivo', Arial, sans-serif;
    font-size: 1em;
    padding-bottom: 0.4em;
    & .huge {
      font-size: 1.5em;
      font-weight: 900;
    }
  }
}

</style>
