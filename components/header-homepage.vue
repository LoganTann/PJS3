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
        <h1>Coucou ceci est une catchphrase</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
  justify-content: space-between;
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
