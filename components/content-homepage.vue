<template>
  <main>
    <div>
      <h3>L'agenda de bréhat</h3>
      <card v-for="elem of agenda.slice(0, 3)" :key="elem.name" :article="elem" is-horizontal />
    </div>
    <div>
      <h3>Dernières nouvelles</h3>
      <div class="scrollableNews">
        <card v-for="elem of news.slice(0, 3)" :key="elem.name" :article="elem" />
      </div>
    </div>
  </main>
</template>

<script>
import card from './card.vue'

export default {
  name: 'ContentHomepage',
  components: { card },

  props: {
    articles: { type: Array, default: () => [] }
  },
  data () {
    return {
      agenda: [
      ],
      news: [
      ]
    }
  },
  created () {
    for (const article of this.articles) {
      const whereToAdd = (article.type === 'date') ? 'agenda' : 'news'
      this[whereToAdd].unshift(article)
    }
  }
}
</script>

<style scoped lang="scss">

$mobile-width: 800px;

main {
  background: #007FA4;
  color: white;
  padding: 2em 1em;

  display: grid;
  grid-template-columns: 1fr minmax(0, 1fr);
  grid-template-rows: 1fr;
  gap: 0px 1em;
  grid-template-areas: "agenda news";
}
@media screen and (max-width: $mobile-width) {
  main {
    grid-template-areas: "agenda" "news";
    gap: 1em 0px;
    grid-template-rows: minmax(0, 1fr);
    grid-template-columns: minmax(0, 1fr);
  }
}
main>div:first-child { grid-area: agenda; }
main>div:last-child { grid-area: news; }

.scrollableNews {
  display: flex;
  overflow-x: auto;
}
</style>
