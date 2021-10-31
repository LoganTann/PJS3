<template>
  <div class="carreMeteo">
    <div class="imageMeteo">
      <img v-if="image" :src="image" alt="météo">
    </div>
    <div class="temperature">
      {{ temperature }}°C
    </div>
    <div class="separateur">
      <hr color="white">
    </div>
    <div class="texteMaree">
      <img src="/icons/clock_white_bg.png" alt="">
      <div class="typeMaree">
        Marée {{ typeMaree }} dans
      </div>
    </div>
    <div class="timeoutMaree">
      {{ timeoutMaree }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Meteo',
  data () {
    return {
      MonthDayYear: '',
      image: false,
      temperature: 15,
      typeMaree: '',
      timeoutMaree: '...',
      timer: null
    }
  },
  async created () {
    // requête
    const API_ENDPOINT = 'https://brehat.netlify.app/.netlify/functions/meteo'
    const req = await fetch(API_ENDPOINT)
    const data = await req.json()
    // détermination de l'icone météo
    let iconName = 'cloud_slight_rain'
    if (data.meteo.precip < 70) {
      if (data.meteo.cloudcover < 5) {
        iconName = 'full_sun'
      } else if (data.meteo.cloudcover < 70) {
        iconName = 'partly_cloudy'
      } else {
        iconName = 'full_clouds'
      }
    }
    // mise à jour du composant
    this.temperature = data.meteo.temperature
    this.image = '/img/svg/weather_icon_' + iconName + '.svg'
    this.traitement(data.maree)
  },
  destroyed () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    // fonctions de traitement -----
    traitement (data) {
      const lessive = []
      for (const a of data) {
        if (a.match('PM|BM|[0-9]:[0-9]') != null) {
          lessive.push(a)
        }
      }

      // création de currentTime et de la string MonthDayYear
      const currentTime = new Date()
      const _splited = currentTime.toString().split(' ')
      this.MonthDayYear = _splited[1] + ' ' + _splited[2] + ' ' + _splited[3] + ' '

      // il y a une nouvelle marée toutes les 6 heures environ. Ces longes étapes de vérifications
      // permettent de gérer les multiples cas de marées (ex cas où on consulte le site à 2h du mat :
      // si la prochaine est à 19h, il y a un problème. Mais si la prochaine est à 6h, tout va bien.)
      const _intervalleMarees = { aprem: '18:00', minuit: '23:59', matinee: '06:00' }
      const time = _intervalleMarees
      for (const refTime in _intervalleMarees) {
        time[refTime] = this.strToDate(_intervalleMarees[refTime])
      }

      // traitement du cas simple et des cas particuliers
      // tout ça parceque leur module de marée est pas foutu de se mettre à jour en temps réel
      let prochaineMaree = []
      let estDemain = false
      if (currentTime < time.aprem) {
        // heure actuelle comprise entre la matinée et le soir : faire une méthode de base
        let i = 1
        while (i < lessive.length) {
          const _nextTime = this.strToDate(lessive[i])
          if (currentTime < _nextTime) {
            break
          }
          i += 2
        }
        prochaineMaree = [lessive[i - 1], lessive[i]]
      } else if (this.encadre(currentTime, this.strToDate(lessive[1]), time.minuit) ||
          this.encadre(this.strToDate('00:01'), this.strToDate(lessive[1]), time.matinee)) {
        estDemain = this.encadre(this.strToDate('00:01'), this.strToDate(lessive[1]), time.matinee)
        prochaineMaree = [lessive[0], lessive[1]]
        // cas particuliers où c'est toujours vrai si on est le soir (ie. possibilité que la prochaine marée soit au lendemain):
        // - prochaine heure de marée comprise entre l'heure courante et minuit
        // - prochaine heure de marée comprise entre minuit et la matinée
      } else {
        // prochaine heure de marée comprise entre minuit et la matinée = c'est demain
        estDemain = this.encadre(this.strToDate('00:01'), this.strToDate(lessive[3]), time.matinee)
        // dans tous les cas, la prochaine marée n'est pas à jour si on en arrive là
        prochaineMaree = [lessive[2], lessive[3]]
      }

      const countDownDate = this.strToDate(prochaineMaree[1])
      if (estDemain) {
        countDownDate.setDate(countDownDate.getDate() + 1)
      }

      this.startTimer(countDownDate, prochaineMaree)
    },
    startTimer (countDownDate, prochaineMaree) {
      this.typeMaree = prochaineMaree[0] === 'BM' ? 'Basse' : 'Haute'
      this.timer = setInterval(function () {
        const { h, m, s } = this.dateCountdown(countDownDate)
        if (h + m + s <= 0) {
          clearInterval(this.timer)
          this.timeoutMaree = 'Banannée !'
          location.reload()
        }
        this.timeoutMaree = this.leadingZero(h) + ' : ' + this.leadingZero(m) + ' : ' + this.leadingZero(s) + '\''
      }.bind(this), 1000)
    },
    debugTimer (data) {
      // sert juste à des fins de débogage
      // pour l'appeler, avoir l'extension vue devtools activée
      // puis sélectionner ce composant et faire un appel à la fonction $vm0.debugTimer( data )
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.traitement(data)
    },
    // fonctions utilitaires -----
    encadre (a, b, c) {
      return a < b && b < c
    },
    dateCountdown (date) {
      // merci github copilot...
      const now = new Date().getTime()
      const distance = date - now
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((distance % (1000 * 60)) / 1000)
      return {
        h,
        m,
        s
      }
    },
    leadingZero (n) {
      return n < 10 ? '0' + n : n
    },
    strToDate (hour) {
      // this.MonthDayYear est déclaré plus tard dans la fonction traitement
      return new Date(this.MonthDayYear + hour)
    }
  }
}
</script>

<style lang="scss" scoped>

$fallbackFonts: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

.carreMeteo {
  color: white;
  border: 1px solid white;
  font-family: 'Archivo', $fallbackFonts;
  padding: 0.5em;
  margin: 0.5em;
  background-color: rgba(0,0,0,0.2);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  display: grid;
  grid-template:
    "temperature imageMeteo"
    "separateur separateur"
    "textMaree textMaree"
    "maree maree";
  grid-template-columns: 90px 90px;
  grid-template-rows: 65px 25px 45px 45px;
  justify-items: center;
  align-items: center;
}

.imageMeteo {
  grid-area: imageMeteo;
}
.temperature {
  grid-area: temperature;
  justify-self: right;
  font-size: 2em;
}
.separateur {
  grid-area: separateur;
  width: 30%;
}
.texteMaree {
  grid-area: textMaree;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
  }
  & .typeMaree {
    font-size: 1.3em;
    font-family: 'Staatliches', $fallbackFonts;
  }
}

.timeoutMaree {
  grid-area: maree;
  font-weight: 100;
  font-size: 2em;
}

</style>
