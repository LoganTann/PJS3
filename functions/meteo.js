const { JSDOM } = require('jsdom')
const fetch = require('node-fetch')
const cowsay = require('cowsay')

const API_ENDPOINT = 'https://services.data.shom.fr/hdm/vignette/petite/BREHAT_MEN_JOLIGUET?locale=fr'

exports.handler = async (_event, _context) => {
  try {
    const response = await fetch(API_ENDPOINT)
    const text = (await response.text())
      .split('document.open();')[1]
      .replace(/(\\)|(ifrm\.document\.(write|open|close)\(('*))|('*)\);/gmi, '')

    const dom = new JSDOM(text)
    const heures = dom.window.document.querySelectorAll('td')

    const out = []
    for (const heure of heures) {
      out.push(heure.textContent.replace(/\\n|[^A-Za-z0-9:\-.]/gmi, ''))
    }
    const cow = cowsay.say({
      cow: 'awesome-face',
      text: `À Bréhat, la prochaine marrée ${out[3].includes('-') ? 'basse' : 'haute'} sera à ${out[1]}`
    }).split('\n')

    const headers = { 'Content-Type': 'application/json' }
    // L'api sera accessible publiquement seulement avant décembre
    if (new Date().getTime() < new Date('2021-12-31').getTime()) {
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Headers'] = 'Content-Type'
      headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTION'
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ cow, out })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `failed fetching data : ${error}` })
    }
  }
}
