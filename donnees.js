/* Données du site, mises à jour après chaque séance.
   Tout ce qui est ici est PUBLIC : uniquement ce que les joueurs savent. */
window.HARMONIA = {
  // Date en jeu (format du monde : JJ/MM/876)
  dateEnJeu: '18/02/876',
  saison: 'Crépuscule Froid',

  // Prochaine séance (heure à compléter quand elle est fixée, ex. '21h')
  prochaineSeance: { jour: '2026-10-10', libelle: 'Samedi 10/10', heure: '', quoi: 'Saison 2 · Séance 1' },

  /* Le tableau des départs : une ligne par rubrique.
     pret = la page existe : la ligne affiche « À l'heure » et devient cliquable.
     Sinon, elle affiche son statut de gare (Retardé, En attente…). */
  departs: [
    { destination: 'Dernière séance', voie: '1', page: 'seance.html', pret: false, statut: 'En attente' },
    { destination: 'Fil d’Ariane', voie: '2', page: 'fil.html', pret: false, statut: 'Retardé' },
    { destination: 'Cette semaine', voie: '3', page: 'semaine.html', pret: false, statut: 'Retardé' },
    { destination: 'Prochain départ', voie: '4', page: 'prochaine.html', pret: false, statut: 'Retardé' },
    { destination: 'Le monde', voie: '5', page: 'monde.html', pret: false, statut: 'Retardé' },
    { destination: 'L’histoire jusqu’ici', voie: '6', page: 'histoire.html', pret: true },
    { destination: 'Financement', voie: '7', page: 'financement.html', pret: false, statut: 'Retardé' }
  ],

  /* Financement : les outils qui servent à préparer le jeu, partagés entre les participants.
     prix = ce que Fabian paie par mois, en euros (null = pas encore renseigné). */
  financement: {
    outils: [
      { nom: 'ChatGPT', usage: 'Images, cartes et illustrations', formule: '', prix: null },
      { nom: 'Claude', usage: 'Préparation des séances, vidéos, site', formule: '', prix: null },
      { nom: 'Inkarnate', usage: 'Cartes du monde', formule: '', prix: null },
      { nom: 'Roll20', usage: 'La table de jeu en ligne', formule: 'Gratuit', prix: 0 }
    ],
    participants: null
  }
};
