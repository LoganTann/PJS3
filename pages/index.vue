<template>
  <container class="index-page">
    <header-homepage class="header-homepage">
      <h1>Coucou ceci est une catchphrase</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </header-homepage>
    <content-homepage class="content-homepage">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores expedita modi nesciunt! Dolores, ea, veniam? Animi at, error non numquam perspiciatis praesentium quae quaerat sint. Adipisci eligendi fugit voluptatibus.
    </content-homepage>
  </container>
</template>
<script>
import HeaderHomepage from '~/components/header-homepage'
import Container from '~/components/container'
import ContentHomepage from '~/components/content-homepage'
export default {
  components: { ContentHomepage, HeaderHomepage, Container },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
/*.index-page {
  display: flex;
  flex-direction: column;
}
.content-homepage {
  flex-grow: 1;
}*/
</style>
