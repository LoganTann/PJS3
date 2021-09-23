<template>
  <vs-navbar fixed shadow>
    <template #left>
      <logo-brehat />
    </template>

    <vs-navbar-item v-for="link of links" :key="link.link" center-collapsed :to="link.link" :active="isActive(link.link)">
      {{ link.name }}
    </vs-navbar-item>

    <template #right>
      <nav-localize />
    </template>
  </vs-navbar>
</template>

<script>
import NavLocalize from '~/components/nav-localize'
import LogoBrehat from '~/components/logo-brehat'
export default {
  name: 'NavContainer',
  components: { LogoBrehat, NavLocalize },
  data () {
    return {
      links: [
        { link: '/', name: 'Accueil' },
        { link: '/discover', name: "Découvrir l'île" },
        { link: '/live', name: 'Vivre et explorer' },
        { link: '/stay', name: 'Séjourner' },
        { link: '/services', name: 'Municipalité' }
      ]
    }
  },
  methods: {
    isActive (link) {
      return link === this.$route.path
    }
  }
}
</script>

<style scoped>
.vs-navbar button {
  font-family: 'Staatliches', Arial, sans-serif;
  font-size: 1.3em;
}
</style>
