const { JSDOM } = require('jsdom')
const fetch = require('node-fetch')
const cowsay = require('cowsay')

const { WEATHERSTACK_API_KEY } = process.env
const MAREE_ENDPOINT =
  'https://services.data.shom.fr/hdm/vignette/petite/BREHAT_MEN_JOLIGUET?locale=fr'
const METEO_ENDPOINT = `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query=48.517,-2.75`

async function mareeJson () {
  const maree = await fetch(MAREE_ENDPOINT)
  const scrappedHTML = (await maree.text())
    .split('document.open();')[1]
    .replace(/(\\)|(ifrm\.document\.(write|open|close)\(('*))|('*)\);/gim, '')
  const dom = new JSDOM(scrappedHTML)
  const heures = dom.window.document.querySelectorAll('td')

  const out = []
  for (const heure of heures) {
    out.push(heure.textContent.replace(/\\n|[^A-Za-z0-9:\-.]/gim, ''))
  }
  return out
}

async function meteoJson () {
  const meteo = await fetch(METEO_ENDPOINT)
  const json = await meteo.json()
  return json.current
}

function createCow (maree) {
  return cowsay
    .say({
      cow: 'awesome-face',
      text: `À Bréhat, la prochaine marrée ${
        maree[3].includes('-') ? 'basse' : 'haute'
      } sera à ${maree[1]}`
    })
    .split('\n')
}

exports.handler = async (_event, _context) => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    // L'api sera accessible publiquement seulement avant décembre
    if (new Date().getTime() < new Date('2021-12-31').getTime()) {
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Headers'] = 'Content-Type'
      headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTION'
    }

    // construction du body de la requête
    const meteo = await meteoJson()
    const maree = await mareeJson()
    const cow = createCow(maree)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ cow, maree, meteo })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `failed fetching data : ${error}` })
    }
  }
}
