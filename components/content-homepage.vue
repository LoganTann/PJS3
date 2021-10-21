<template>
  <main>
    <div>
      <h3>L'agenda de bréhat</h3>
      <div v-for="elem of agenda" :key="elem.name">
        <p>{{ elem }}</p>
      </div>
    </div>
    <div>
      <h3>Dernières nouvelles</h3>
      <div v-for="elem of news" :key="elem.name">
        <p>{{ elem }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContentHomepage',

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
    console.log(this.articles)
  }
}
</script>

<style scoped>
main {
  background: #007FA4;
  color: white;
  padding: 2em 1em;
  display: flex;
}
main div:first-child {
  width: 50%;
}
</style>
