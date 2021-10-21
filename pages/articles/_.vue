<template>
  <container v-if="article" class="index-page">
    <header-article class="header-homepage">
      <h1>{{ article.title }}</h1>
    </header-article>
    {{ article }}
    <content-article class="content-homepage">
      <nuxt-content :document="article" />*
    </content-article>
  </container>
</template>

<script>
export default {
}
</script>
