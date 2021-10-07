const { JSDOM } = require('jsdom');
const fetch = require('node-fetch');
const cowsay = require('cowsay');

const API_ENDPOINT = 'https://services.data.shom.fr/hdm/vignette/petite/BREHAT_MEN_JOLIGUET?locale=fr';

exports.handler = async (_event, _context) => {
  try {
    const response = await fetch(API_ENDPOINT);
    let text = await response.text();
    
    text = text.split("document.open();")[1];

    const regex = /(\\)|(ifrm\.document\.(write|open|close)\(('*))|('*)\);/gmi;

    text = text.replace(regex, '');

    const dom = new JSDOM(text);
    const heures = dom.window.document.querySelectorAll("td");

    const out = [];
    for (const heure of heures) {
      out.push(heure.textContent.replace(/\\n|[^A-Za-z0-9\:\-\.]/gmi, ""));
    }

    // const heure = heures[1].innerHTML;
    // const marree = heures[3].innerHTML.includes("--") ? "basse" : "haute";

    const say = cowsay.say({
      cow: "awesome-face",
      text: `À Bréhat, la prochaine marrée ${out[3].includes("-") ? 'basse':'haute'} sera à ${out[1]}`
    }).split("\n");
    return {
      statusCode: 200, 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ out, cow: say })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `failed fetching data : ${error}` })
    };
  }
};
