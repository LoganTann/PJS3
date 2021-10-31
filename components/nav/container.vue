<template>
  <nav :class="{'menuOpened': menuOpened}">
    <div class="mobileOnly">
      <a class="isIcon" href="#!" @click="menuOpened = true">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          class="svg-inline--fa fa-bars fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        ><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" /></svg>
      </a>
      <div class="shadow" @click="menuOpened = false" />
    </div>

    <logo-brehat />

    <div class="links-container">
      <div class="mobileOnly navtext">
        <a id="mobileCloseBtn" class="isIcon" href="#!" @click="menuOpened = false">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times"
            class="svg-inline--fa fa-times fa-w-11"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          ><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
        </a>
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
        @click.native="timedCloseMenu()"
      >
        <translation>
          <template #fr>
            {{ link.name }}
          </template>
          <template #en>
            {{ link.enName }}
          </template>
        </translation>
      </nuxt-link>
    </div>

    <localize />
  </nav>
</template>

<script>
import logoBrehat from './logo-brehat.vue'
import localize from './localize.vue'
export default {
  name: 'NavContainer',
  components: { logoBrehat, localize },
  data () {
    return {
      links: [
        { link: '/', name: 'Accueil', enName: 'Home' },
        { link: '/discover', name: "Découvrir l'île", enName: 'Discover' },
        { link: '/live', name: 'Vivre et explorer', enName: 'To see and do' },
        { link: '/stay', name: 'Séjourner', enName: 'Your stay' },
        { link: '/services', name: 'Municipalité', enName: 'Municipality' }
      ],
      menuOpened: false
    }
  },
  methods: {
    isActive (link) { return link === this.$route.path },
    timedCloseMenu () {
      const self = this
      setTimeout(() => { self.menuOpened = false }, 300)
    }
  }
}
</script>

<style scoped lang="scss">

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
.links-container a, .mobileOnly a {
  display: block;
  position: relative;
  padding: 0 0.5em;
  line-height: 2.9em;
  color: #777;
  text-decoration: none;
  transition: all 0.5s;
}
a.isIcon {
  display: inline-flex;
  align-items: center;
  line-height: initial;
  height: 2.9em;
  & svg {
    width: 1em;
  }
}
.links-container a.active, .mobileOnly a:hover {
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
#mobileCloseBtn {
  position: relative;
  left: calc(100% - 2em);
  display: inline;
  &:hover {
    background: white;
    color: black;
  }
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
