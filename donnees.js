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
    { destination: 'Financement', voie: '7', page: 'financement.html', pret: true }
  ],

  /* Financement : les outils qui servent à préparer le jeu, partagés à parts égales entre les participants.
     prix en euros ; par = 'mois' ou 'an' (un prix annuel est ramené au mois).
     debut = mois où commence la première période (AAAA-MM) ; periodeMois = durée d'une période de versement (3 = tous les 3 mois).
     participants : paye = la liste des périodes réglées, chacune désignée par son mois de début (ex. '2026-10') ;
     prelevement: true = réglé d’office à chaque période. */
  financement: {
    debut: '2026-10',
    periodeMois: 3,
    outils: [
      { nom: 'ChatGPT', usage: 'Images, cartes et illustrations', prix: 8, par: 'mois' },
      { nom: 'Claude', usage: 'Préparation des séances, vidéos, site', prix: 21.6, par: 'mois' },
      { nom: 'Inkarnate', usage: 'Cartes du monde', prix: 20, par: 'an' },
      { nom: 'Roll20', usage: 'La table de jeu en ligne', prix: 0, par: 'mois', formule: 'Gratuit' }
    ],
    participants: [
      { nom: 'Fabian', perso: 'Maître du jeu', prelevement: true, paye: [] }, // prélevé sur son compte : réglé à chaque période
      { nom: 'Nathan', perso: 'Varynor Mornelion', paye: [] },
      { nom: 'Vincent', perso: 'Larian Feuillelune', paye: [] },
      { nom: 'Jeremy', perso: 'Kagé', paye: [] },
      { nom: 'Lucas', perso: 'Anoer Maethyr', paye: [] },
      { nom: 'Kelly', perso: 'Telissandre', paye: [] },
      { nom: 'Morgane', perso: 'Serah', paye: [] },
      { nom: 'Aurélie', perso: 'la Fée BD', paye: [] }
    ]
  }
};
