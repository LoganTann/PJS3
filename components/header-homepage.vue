<template>
  <header>
    <div class="texte">
      <h1>Coucou ceci est une catchphrase</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="carre">
      carré
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderHomepage'
}
</script>

<style scoped>
header {
  padding: 10em 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.texte {
  width: 30em;
}
</style>
