<template>
  <main class="content-article">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'ContentArticle'
}
</script>

<style>
.content-article>div {
  margin-top: 3px;
  border-radius: 3px;
}

@media screen and (min-width: 600px) {
  .content-article {
    font-size: 1.15em;
  }
}
</style>
