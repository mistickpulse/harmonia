/* Données du site, mises à jour après chaque séance.
   Tout ce qui est ici est PUBLIC : uniquement ce que les joueurs savent. */
window.HARMONIA = {
  // Date en jeu (format du monde : JJ/MM/876)
  dateEnJeu: '18/02/876',
  saison: 'Crépuscule Froid',

  // Prochaine séance : debut = date et heure exactes (heure de Paris) pour le compte à rebours
  // Lien du formulaire Google (vide = le bouton « Prendre des notes » reste caché). Sert aussi de secours si le carnet du scribe ne marche pas.
  formulaireNotes: 'https://forms.gle/nHYskgtPsZEtWc5q9',
  // La séance en cours, préremplie dans le carnet du scribe (à avancer après chaque séance)
  seanceEnCours: 'S2-01',

  /* Le carnet du scribe envoie ses notes directement au formulaire Google (sans l'afficher).
     Si les questions du formulaire changent, les identifiants « entry.… » changent aussi : les relire dans la page du formulaire.
     auteurs : exactement les choix du formulaire, lettre pour lettre. */
  formulaire: {
    // Le tableur des réponses, lu en direct par la page « Dernière séance » (c'est la base de données des notes)
    lecture: 'https://docs.google.com/spreadsheets/d/1PkzqHmHqW2m0txkCZIAdcBd-bSXvG8wblC65TNQT3CM/export?format=csv',
    envoi: 'https://docs.google.com/forms/d/e/1FAIpQLSff6kxTnbG8ZN94KIQKnh-Y9nWBPH5LwQFfqHBpixrIOiZnpQ/formResponse',
    champs: {
      seance: 'entry.448728290', auteur: 'entry.1271631058', recit: 'entry.456841996', personnages: 'entry.938933139',
      lieux: 'entry.529195451', quetes: 'entry.451837171', objets: 'entry.868465274', questions: 'entry.910113382'
    },
    auteurs: ['Varynor', 'Anoer', 'Larian', 'Fee BD', 'Kagé', 'Telissandre', 'Serah']
  },

  prochaineSeance: { debut: '2026-10-11T00:00:00+02:00', libelle: 'Samedi 10/10', heure: 'minuit', quoi: 'Saison 2 · Séance 1' },

  /* Calendrier : l'horaire de la semaine en jeu (dates écrites à la main : le calendrier d'Harmonia n'est pas calculé).
     jours : les 7 jours affichés ; evenements : date ('JJ/MM'), heure facultative, titre, detail.
     Un événement sans date va dans « Bientôt ». Seulement ce que les joueurs savent. */
  semaine: {
    mois: 'Mois 2 sur 3 du Crépuscule Froid',
    jours: ['15/02', '16/02', '17/02', '18/02', '19/02', '20/02', '21/02'],
    evenements: [
      { date: '18/02', heure: '12h30', titre: 'Le Train Frelon file vers Gravathor', detail: 'Après l’attaque de la Branche Obsidienne, le voyage continue.' },
      { date: '', titre: 'Les portes de Gravathor vont fermer pour une raison inconnue', detail: 'Il faut arriver avant pour donner le coffre.' }
    ]
  },

  /* Le fil d'Ariane, version publique (validée par Fabian). Rien du fil caché.
     Chaque fil : [titre, détail, état]. État : absent = en cours, 'fait' = accompli, 'echec' = échoué.
     Dans chaque rubrique, mettre les fils terminés dans l'ordre où ils se sont produits :
     la page n'affiche (rayés) que les 2 plus récents, au-dessus des fils en cours. */
  fil: [
    { titre: 'Quête principale', points: [
      ['Récupérer le Coffre de Mnémarèse', 'repris aux Lueurs Vaines, dans une caverne au sud de Valperce.', 'fait'],
      ['Prendre le train pour Gravathor', 'billets obtenus au Bastion de Fomane, pour avoir sauvé la foule du marché.', 'fait'],
      ['Livrer le Coffre de Mnémarèse', 'à Sorra, à la guilde des marchands de la capitale naine. La mission confiée par le Cercle des Veilleurs.'],
      ['Les portes de Gravathor vont fermer pour une raison inconnue', 'il faut arriver avant pour donner le coffre.']
    ] },
    { titre: 'Ce que le groupe a promis', points: [
      ['Retrouver le symbole de la famille de Koma', 'Varynor l’a dessiné : celui de sa famille, au clan des Dragons.', 'fait'],
      ['Aider Koma à retrouver sa famille', 'dans le 5e Royaume.']
    ] },
    { titre: 'Quêtes personnelles', points: [
      ['Varynor cherche du sang de vampire', 'pour se soigner. Une rumeur parle d’un vampire dans la capitale naine.'],
      ['Anoer cherche le vampire qui l’a transformé', ''],
      ['Varynor cherche un remède', 'pour Reduz, la mère de Kamot, à Valperce.'],
      ['Anoer a eu une vision', 'une Lyre du Chant des Cieux, dans un temple au sommet d’une montagne.']
    ] },
    { titre: 'Pistes et objets en cours', points: [
      ['Protéger la cargaison du Train Frelon', 'la Branche Obsidienne s’est enfuie avec l’orbe.', 'echec'],
      ['Le parchemin d’invocation planaire', '3 fragments sur 7.'],
      ['Un point vert sur la carte', 'une ancienne civilisation runique, des lieux défendus par des runes.'],
      ['La Branche Obsidienne', 'Kael, Mirel, Dregar et Syris courent toujours, avec l’orbe.']
    ] },
    { titre: 'Contacts dans le royaume des Nains', points: [
      ['Météore', 'un nain transcendant puissant, tatoué jusqu’à l’épaule, contact fiable du Cercle des Veilleurs.'],
      ['Mina Frappeforte', 'une alliée naine que connaît la Fée BD.']
    ] }
  ],

  /* Le tableau des départs : une ligne par rubrique.
     pret = la page existe : la ligne affiche « À l'heure » et devient cliquable.
     Sinon, elle affiche son statut de gare (Retardé, En attente…). Un statut écrit à la main s’affiche même si la page est prête. */
  departs: [
    { destination: 'Dernière séance', voie: '1', page: 'seance.html', pret: true, statut: 'En attente' }, // retirer le statut après le premier récap
    { destination: 'Fil d’Ariane', voie: '2', page: 'fil.html', pret: true },
    { destination: 'Calendrier', voie: '3', page: 'calendrier.html', pret: true },
    { destination: 'Prochain départ', voie: '4', page: 'prochaine.html', pret: true },
    { destination: 'Le monde', voie: '5', page: 'monde.html', pret: true },
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
