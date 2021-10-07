<template>
  <div>
    <header-homepage class="header-homepage"/>
    <content-homepage class="content-homepage">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores expedita modi nesciunt! Dolores, ea, veniam? Animi at, error non numquam perspiciatis praesentium quae quaerat sint. Adipisci eligendi fugit voluptatibus.
    </content-homepage>
  </div>
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
