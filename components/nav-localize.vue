<template>
  <vs-select id="langSelect" v-model="lang">
    <vs-option label="fr" value="fr">
      Fr
    </vs-option>
    <vs-option label="en" value="en">
      En
    </vs-option>
  </vs-select>
</template>

<script>
export default {
  name: 'NavLocalize',
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
