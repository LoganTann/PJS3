<template>
  <footer>
    <div class="content">
      <div>
        <p class="light">
          Site <b>non officiel</b> de la commune d’Île-de-Bréhat
        </p>

        <blockquote>
          Ce site a été réalisé dans le cadre d'un devoir imposé et noté. Nous ne seront donc tenus responsable pour toute accusation de contrefaçon vis à vis du sujet de ce site.<br>
          L'intention de ce projet n'a que pour but d'améliorer un site existant, en termes d'interface utilisateur, stratégie de contenu et d'audience, etc.<br>
          Le code source de ce site est <a href="https://github.com/LoganTann/PJS3">open-source et consultable en ligne</a>
        </blockquote>
      </div>
      <div>
        <p class="light">
          Retrouvez-nous sur les réseaux sociaux :
        </p>
        <a class="socialbtn" href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FMairie-de-lile-de-Br%25C3%25A9hat-109476447520454%2F">
          <img src="/icons/FB.png" alt="facebook">
        </a>
        <a class="socialbtn" href="https://www.youtube.com/channel/UCKjtJqq0QdIYhCIgUOmA36Q">
          <img src="/icons/YT.png" alt="youtube">
        </a>
      </div>
    </div>
    <div class="copy">
      &copy; 2021 <a href="https://cartesia-junior.netlify.app/">Agence Cartésia Junior</a>, IUT de Paris
    </div>
    <footerWave />
  </footer>
</template>

<script>
export default {
  name: 'FooterMain'
}
</script>

<style scoped lang="scss">
footer {
  position: relative;
  color: white;
  overflow: hidden;
  background: radial-gradient(ellipse at center, #197abc 0%, #197abc 35%, #10527f 100%);
}

a {
  text-decoration: none;
  color: rgb(239, 252, 236);
}

.content {
  position:relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
}
.content>div {
  max-width: 400px;
  margin: 0 auto;
}

.light {
  font-weight: 300;
}
blockquote {
  font-size: 0.9em;
  font-style: italic;
  margin: 0 2em;
}

.socialbtn {
  display: inline-block;
  margin: 0 1rem;
  & img {
    max-width: 3rem;
    max-height: 3rem;
  }
}

.copy {
  position: relative;
  z-index: 2;
  background: rgba(0,0,0,0.1);
  color: white;
  padding: 0.7rem;
  font-size: 0.7rem;
  text-align: center;
}
</style>
