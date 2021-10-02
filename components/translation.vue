<template>
  <span @lang="console.log('HHAAAA')">
    <slot v-if="lang === 'en'" name="en" />
    <slot v-else name="fr" />
  </span>
</template>

<script>
export default {
  name: 'Translation',
  data () {
    return {
      lang: 'fr',
      supportedLocales: ['fr', 'en']
    }
  },
  mounted () {
    window.addEventListener('langChanged', this.translate)
    this.translate()
  },
  methods: {
    translate () {
      if (!process.client) {
        return
      }
      const lang = localStorage.getItem('brehatLang')
      if (this.supportedLocales.includes(lang)) {
        this.lang = lang
      }
    }
  }
}
</script>

<style scoped>

</style>
