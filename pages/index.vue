<template>
  <div>
    <header-homepage class="header-homepage" />
    <content-homepage class="content-homepage" :articles="articles"/>
  </div>
</template>
<script>
import HeaderHomepage from '~/components/header-homepage'
import ContentHomepage from '~/components/content-homepage'

export default {
  components: { ContentHomepage, HeaderHomepage },
  async asyncData ({ $content, app, params, error }) {
    const articles = await $content().only(['slug', 'description', 'title', 'date', 'type', 'img']).fetch()
    return { articles }
  },
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
