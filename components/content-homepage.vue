<template>
  <main>
    <div>
      <h3>L'agenda de bréhat</h3>
      <div v-for="elem of agenda" :key="elem.name">
        <p>{{ elem }}</p>
      </div>
    </div>
    <div>
      <h3>Dernières nouvelles</h3>
      <div v-for="elem of news" :key="elem.name">
        <p>{{ elem }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContentHomepage',
  data () {
    return {
      agenda: [
        {
          name: 'Repas des aînés',
          descr: 'Les élus de l’Ile de Bréhat ont le plaisir de vous informer que le repas des aînés est prévu dimanche 7 novembre 2021.',
          date: '7/11/2021'
        },
        {
          name: 'coupure de courant',
          descr: 'Une coupure de courant aura lieu le vendredi 24 septembre pour cause de maintenance',
          date: '24/09/2021'
        },
        {
          name: 'coupure de courant',
          descr: 'Une coupure de courant aura lieu jeudi 13 octobre pour cause de maintenance',
          date: '10/10/2021'
        }
      ],
      news: [
        {
          name: 'Festival Les Scènes de Bréhat',
          descr: 'La mairie a le plaisir de vous partager une rediffusion du premier festival des Scènes de Bréhat.'
        },
        {
          name: 'Enquête : que deviennent vos biodéchets ?',
          descr: 'La comission des déchets étudie son impact et a besoin de vous pour répondre à leur enquête !'
        },
        {
          name: 'Port du masque obligatoire par arrêté préfectoral du 25 août 2021',
          descr: 'Le port du masque est obligatoire de 7h30 à 22h par arrêté préfectoral du 25 août 2021.'
        },
        {
          name: "Etat de la situation sanitaire à l'île de bréhat",
          descr: "Récapitulatif de la situation sanitaire de l'île au 13 juillet 2021"
        }
      ]
    }
  }
}
</script>

<style scoped>
main {
  background: #007FA4;
  color: white;
  padding: 2em 1em;
  display: flex;
}
main div:first-child {
  width: 50%;
}
</style>
