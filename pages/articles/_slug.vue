<template>
  <div v-if="article">
    <ArticleHeader
      :img="article.img"
      :type="articleType"
      :title="article.title"
      :date="date"
      :description="article.description"
    />
    <ArticleContent>
      <nuxt-content :document="article" />
    </ArticleContent>
  </div>
</template>

<script>
/* eslint-disable node/handle-callback-err */
export default {
  async asyncData ({ $content, params, error }) {
    const slug = params.slug
    const article = await $content(slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      article
    }
  },
  computed: {
    date () {
      if (this.article && this.article.slug) {
        const dates = this.article.slug.match(/^(\d{4})(\d{2})(\d{2})-.*$/)
        if (dates) {
          return 'Le ' + dates.slice(1).reverse().join('/')
        }
      }
      return ''
    },
    articleType () {
      switch (this.article.type) {
        case 'date':
          return 'L\'agenda'
        case 'actu':
          return 'Actualité'
        default:
          return this.article.type
      }
    }
  }
}
</script>
