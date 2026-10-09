/* Données du site, mises à jour après chaque séance.
   Tout ce qui est ici est PUBLIC : uniquement ce que les joueurs savent. */
window.HARMONIA = {
  // Date en jeu (format du monde : JJ/MM/876)
  dateEnJeu: '18/02/876',
  saison: 'Crépuscule Froid',

  // Prochaine séance (heure à compléter quand elle est fixée, ex. '21h')
  prochaineSeance: { jour: '2026-10-10', libelle: 'Samedi 10/10', heure: '', quoi: 'Saison 2 · Séance 1' },

  /* Le tableau des départs : une ligne par rubrique.
     pret = la page existe ; sinon la ligne affiche « En préparation » et n'est pas cliquable. */
  departs: [
    { destination: 'Dernière séance', voie: '1', page: 'seance.html', pret: false, statut: 'En préparation' },
    { destination: 'Fil d’Ariane', voie: '2', page: 'fil.html', pret: false, statut: 'En préparation' },
    { destination: 'Cette semaine', voie: '3', page: 'semaine.html', pret: false, statut: 'En préparation' },
    { destination: 'Prochain départ', voie: '4', page: 'prochaine.html', pret: false, statut: 'En préparation' },
    { destination: 'Le monde', voie: '5', page: 'monde.html', pret: false, statut: 'En préparation' },
    { destination: 'L’histoire jusqu’ici', voie: '6', page: 'histoire.html', pret: true, statut: 'Saison 1' }
  ]
};
