<template>
  <vs-select id="langSelect" v-model="lang">
    <vs-option label="Fr" value="Fr">
      Fr
    </vs-option>
    <vs-option label="En" value="En">
      En
    </vs-option>
  </vs-select>
</template>

<script>
export default {
  name: 'NavLocalize',
  data () {
    return { lang: 'Fr' }
  }
}
</script>

<style scoped>
#langSelect {
  width: 5em;
}
</style>
