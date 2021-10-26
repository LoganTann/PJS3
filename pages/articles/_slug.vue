<template>
  <div>
    <header-article v-if="article" class="header-article" :class="{'havesBg': article.img}" :style="article.img ? `background-image: url(/img/${article.img});` : ''">
      <div>
        <span v-if="article.type === 'date'">L'agenda</span>
        <span v-else>Actualité</span>
        <h1>{{ article.title }}</h1>
        <p>{{ date }}</p>
      </div>
    </header-article>
    <content-article v-if="article" class="content-article">
      <nuxt-content :document="article" />
    </content-article>
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
    }
  }
}
</script>

<style scoped lang="scss">
$titleOffset: 3em;
.header-article {
  aspect-ratio: 3/1;
  background: url("/img/brehat.jpg");
  background-size: cover;
  background-position: center;
  align-items: flex-end;
  margin-bottom: $titleOffset;
  &>div {
    text-align: center;
    transform: translateY($titleOffset);
    &>span {
      font-family: 'staatliches';
      color: #354bcf;
      font-size: 1.7em;
    }
    &>p {
      color: #333;
    }
  }
}
.content-article, .header-article {
  display: flex;
  justify-content: center;
  &>div {
    background: white;
    width: 80%;
    padding: 1.5em 2em;
  }
}
.content-article>div {
  margin-top: 3px;
  border-radius: 3px;
}

@media screen and (max-width: 600px) {
  .header-article {
    aspect-ratio: 16/9;
  }
}

@media screen and (min-width: 600px) {
  .content-article {
    font-size: 1.15em;
  }
}
</style>
