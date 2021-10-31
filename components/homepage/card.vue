<template>
  <div class="card" :class="{'isHorizontal': isHorizontal}">
    <div v-if="article.img" class="img" :style="`background-image: url(/img/${article.img});`" />
    <div class="content">
      <span>{{ article.date }}</span>
      <nuxt-link :to="'/articles/' + article.slug">
        <h4>{{ article.title }}</h4>
      </nuxt-link>
      <p>{{ article.description }}</p>

      <nuxt-link :to="'/articles/' + article.slug" class="button" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isHorizontal: {
      type: Boolean, default: false
    },
    article: {
      type: Object, required: true
    }
  }
}
</script>

<style lang="scss" scoped>
$red: #c8092f;
.card {
  color: black;
  background-color: white;
  border-right: 10px solid $red;
  box-shadow: 0px 4px 10px 0px rgb(0, 31, 82);
  min-width: 15em;
  margin-right: 1em;
  margin-bottom: 0.5em;
}
.card.isHorizontal {
  min-width: 20em;
  margin-right: initial;
  margin-bottom: 1em;
}
.card a {
  color: black;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: $red;
  }
}
.card .content {
  padding: 0.5em;
}
.img {
  aspect-ratio: 16 / 9;
  background-size: cover;
  background-position: center;
}
h4 {
  margin-top: 0.7em;
}
.card span {
  padding: 0.25rem;
  background-color: $red;
  border-radius: 0.5em;
  color: white;
  font-family: archivo;
  text-transform: uppercase;
  font-weight: 600;
  margin: .25rem;
  font-size: 12px;
}
</style>
