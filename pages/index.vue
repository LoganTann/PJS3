<template>
  <div>
    <header-homepage class="header-homepage" />
    <content-homepage class="content-homepage">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores expedita modi nesciunt! Dolores, ea, veniam? Animi at, error non numquam perspiciatis praesentium quae quaerat sint. Adipisci eligendi fugit voluptatibus.
    </content-homepage>
  </div>
</template>
<script>
import HeaderHomepage from '~/components/header-homepage'
import ContentHomepage from '~/components/content-homepage'

export default {
  components: { ContentHomepage, HeaderHomepage },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">

</style>
