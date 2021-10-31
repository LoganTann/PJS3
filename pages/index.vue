<template>
  <div>
    <HomepageHeader class="header-homepage" />
    <HomepageContent class="content-homepage" :articles="articles" />
  </div>
</template>
<script>
export default {
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
