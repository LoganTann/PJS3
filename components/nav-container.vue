<template>
  <nav :class="{'menuOpened': menuOpened}">
    <div class="mobileOnly">
      <a href="#!" @click="menuOpened = true">menu</a>
      <div class="shadow" @click="menuOpened = false"></div>
    </div>

    <logo-brehat />

    <div class="links-container">
      <div class="mobileOnly navtext">
        <a href="#!" @click="menuOpened = false">X</a>
        <div>
          <p>Ile de bréhat</p>
          <p>bréhahahaha</p>
        </div>
      </div>
      <nuxt-link
        v-for="link of links"
        :key="link.link"
        :to="link.link"
        :class="{'active': isActive(link.link)}"
        @click="menuOpened = true"
      >
        {{ link.name }}
      </nuxt-link>
    </div>

    <nav-localize />
  </nav>
</template>

<script>
import NavLocalize from '~/components/nav-localize'
import LogoBrehat from '~/components/logo-brehat'
export default {
  name: 'NavContainer',
  components: { LogoBrehat, NavLocalize },
  data () {
    return {
      links: [
        { link: '/', name: 'Accueil' },
        { link: '/discover', name: "Découvrir l'île" },
        { link: '/live', name: 'Vivre et explorer' },
        { link: '/stay', name: 'Séjourner' },
        { link: '/services', name: 'Municipalité' }
      ],
      menuOpened: false
    }
  },
  methods: {
    isActive (link) { return link === this.$route.path },
    openMenu () { this.menuOpened = true },
    closeMenu () { this.menuOpened = false }
  }
}
</script>

<style scoped>

.mobileOnly {
  display: none;
}
nav {
  font-family: 'Staatliches', Arial, sans-serif;
  font-size: 1.3em;
  display: flex;
  justify-content: space-between;
  padding: 0 2em;
  position: sticky;
  top: 0; left: 0;
  z-index: 10;
  background: white;
}
@media screen and (max-width: 1020px) {
  nav {
    font-size: 1em;
  }
}
/*breaks at 1020px*/
.links-container {
  display: flex;
}
.links-container a {
  display: block;
  position: relative;
  padding: 0 0.5em;
  line-height: 2.9em;
  color: #777;
  text-decoration: none;
  transition: all 0.5s;
}
.links-container a.active {
  color: black;
}
.links-container a::after {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.3em;
  background: #007FA4;
  transition: all 0.5s;
  transform: scaleX(0);
}
.links-container a.active::after {
  transform: scaleX(1);
}
.links-container a:hover {
  background: rgba(0,0,0,0.1);
}



/*mobile config*/
@media screen and (max-width: 800px) {
  .mobileOnly {
    display: block;
  }
  nav .links-container {
    display: block;
    position: fixed;
    background: white;
    top: 0;
    left: -100%;
    width: 15em;
    height: 100vh;
    z-index: 10;
    transition: all 0.5s;
  }
  nav .navtext {
    font-family: 'Archivo', Arial, sans-serif;
    padding: 1em;
  }
  nav .shadow {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 9;
    transition: width 0.3s;
  }

  .links-container a.active {
    color: white;
  }
  .links-container a::after {
    z-index: -1;
    height: 100%;
    width: 0%;
    transform: none;
  }
  .links-container a.active::after {
    width: 100%;
    transform: none;
  }

  .menuOpened .shadow {
    width: 100%;
  }
  .menuOpened .links-container {
    left: 0;
  }
}
</style>
