<template>
  <header>
    <video
      id="bgvid"
      playsinline
      autoplay
      muted
      loop
    >
      <source src="/brehat.mp4" type="video/mp4">
    </video>
    <div class="header-content">
      <div class="texte">
        <h1>Un voyage à Bréhat, c’est mille voyages</h1>
        <p>
          <span class="hideMobile">Ouvrez l’œil et freinez l’allure. Car Bréhat n’est pas qu’une île : c'est un archipel, où chacune de ses sections résument le monde.</span><br>
          Que vous soyez touriste ou résident, découvrez sur notre site le premier lieu classé en France
        </p>
      </div>
      <meteo class="hideMobile" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderHomepage'
}
</script>

<style scoped lang="scss">
$mobile-width: 800px;

@media screen and (max-width: $mobile-width) {
  .header-content .hideMobile {
    display: none;
  }
  h1 {
    font-size: 1.5em;
    margin-bottom: 0.2em;
  }
  p {
    margin-top: 0.2em;
  }
}

header {
  position: relative;
  display: flex;
}
video {
  width: 100%;
  height: auto;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
}
.header-content {
  z-index: 2;
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.3);
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.texte {
  width: 30em;
  padding: 0 4em;
}
.meteo {
  padding-right: 4em;
}
</style>
