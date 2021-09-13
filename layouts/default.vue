<template>
  <v-app light>
    <v-container>
      <Nuxt />
    </v-container>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} PJS3 gp1</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: true
    }
  }
}
</script>
