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
        <p>Ouvrez l’œil et freinez l’allure. Car Bréhat n’est pas qu’une île : c'est un archipel, où chacune de ses sections résument le monde. Que vous soyez touriste ou résident, prenez le temps d'aborder le premier site classé en France en le découvrant au travers de notre site !</p>
      </div>
      <meteo />
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderHomepage'
}
</script>

<style scoped>
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
