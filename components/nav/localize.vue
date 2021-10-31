<template>
  <select id="langSelect" v-model="lang">
    <option label="fr" value="fr">
      Fr
    </option>
    <option label="en" value="en">
      En
    </option>
  </select>
</template>

<script>
export default {
  data () {
    return { lang: 'fr' }
  },
  watch: {
    lang (val, oldVal) {
      localStorage.setItem('brehatLang', val)
      window.dispatchEvent(new CustomEvent('langChanged'))
    }
  }
}
</script>

<style scoped>
#langSelect {
  width: 5em;
  align-self: center;
}
</style>
