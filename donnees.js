/* Données du site, mises à jour après chaque séance.
   Tout ce qui est ici est PUBLIC : uniquement ce que les joueurs savent. */
window.HARMONIA = {
  // Date en jeu (format du monde : JJ/MM/876)
  dateEnJeu: '18/02/876',
  saison: 'Crépuscule Froid',

  // La prière dite au début de chaque séance, affichée sur l'accueil (même texte que dans les Sept Sceaux, harmonia-jeux)
  priere: [
    'Le vent souffle à travers les vallées et les cités, portant avec lui des fragments d’un chant oublié. Il ne s’impose pas, il se cache, se laisse deviner… Mais il attend. Un signe, un pas en avant, une volonté qui brise le silence. Écoutez bien, car c’est à vous de réveiller l’écho endormi.',
    'Ce n’est pas une mélodie figée, ni un simple vestige du passé. C’est un murmure vivant, un fil ténu entre hier et demain. Chaque pierre, chaque feuille frissonne sous ses fréquences, effleurée par la mémoire d’un monde qui refuse de s’éteindre.',
    'Une question murmurée à l’ombre des étoiles. Et peut-être que la réponse apparaîtra.'
  ],

  // Prochaine séance : debut = date et heure exactes (heure de Paris) pour le compte à rebours
  // Lien du formulaire Google (vide = le bouton « Prendre des notes » reste caché). Sert aussi de secours si le carnet du scribe ne marche pas.
  formulaireNotes: 'https://forms.gle/nHYskgtPsZEtWc5q9',
  // La séance en cours, préremplie dans le carnet du scribe (à avancer après chaque séance)
  seanceEnCours: 'S2-02',

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
    auteurs: ['Varynor', 'Anoer', 'Larian', 'Kagé', 'Telissandre', 'Serah'] // « Fee BD » existe encore dans le formulaire, mais la Fée BD ne joue plus
  },

  prochaineSeance: { debut: '2026-11-08T17:00:00+01:00', libelle: 'Dimanche 08/11', heure: '17h', quoi: 'Saison 2 · Séance 2' },

  /* Calendrier : l'horaire de la semaine en jeu (dates écrites à la main : le calendrier d'Harmonia n'est pas calculé).
     jours : les 7 jours affichés ; evenements : date ('JJ/MM'), heure facultative, titre, detail.
     Un événement sans date va dans « Bientôt ». Seulement ce que les joueurs savent. */
  semaine: {
    mois: 'Mois 2 sur 3 du Crépuscule Froid',
    jours: ['15/02', '16/02', '17/02', '18/02', '19/02', '20/02', '21/02'],
    evenements: [
      { date: '18/02', titre: 'Arrivée en gare des Contreforts', detail: 'Le wagon blindé est vide : quai bouclé, tous les passagers interrogés.' },
      { date: '18/02', titre: 'Les portes de Gravathor se ferment', detail: 'Avancée au jour même à cause du vol de l’artefact. Le groupe entre quelques minutes avant.' },
      { date: '18/02', heure: '20h', titre: 'Météore se fait connaître', detail: 'Nariz Bavel, au camp des bloqués.' },
      { date: '18/02', heure: 'le soir', titre: 'Kagé, commis à l’auberge', detail: 'Le service promis à Dagny Troquebien.' },
      { date: '19/02', heure: 'le matin', titre: 'Déposition à la Garnison', detail: 'Témoignage sur l’attaque du train. Obligatoire avant de pouvoir descendre en Cité Intérieure.' },
      { date: '19/02', titre: 'Le pull rose de Kagé', detail: 'Ysolde Marrin doit le lui remettre.' }
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
      ['Entrer dans Gravathor avant la fermeture', 'passé quelques minutes avant que la Porte ne se referme.', 'fait'],
      ['Faire sa déposition à la Garnison', 'demain : sans elle, impossible de descendre en Cité Intérieure.'],
      ['Livrer le Coffre de Mnémarèse', 'à Sorra, à la guilde des marchands, en Cité Intérieure. Varynor porte le coffre. La mission confiée par le Cercle des Veilleurs.']
    ] },
    { titre: 'Ce que le groupe a promis', points: [
      ['Retrouver le symbole de la famille de Koma', 'Varynor l’a dessiné : celui de sa famille, au clan des Dragons.', 'fait'],
      ['Aider Koma à retrouver sa famille', 'dans le 5e Royaume.'],
      ['Faire passer un message à la famille de Joren Vasque, et faire entrer sa femme', 'promis par Larian. Sa femme et ses deux enfants sont restés dehors ; elle est habillée en rouge vif.'],
      ['Servir de commis à l’auberge', 'Kagé, ce soir, pour Dagny Troquebien.'],
      ['Copier le registre des stocks de la Guilde', 'Anoer et Telissandre, pour Ottilie Grainfort, aux entrepôts de la Guilde.']
    ] },
    { titre: 'Quêtes personnelles', points: [
      ['Varynor veut guérir de la sève noire', 'il lui faut du sang de vampire et de l’Éphéméride de Sangrun, une plante rare (Mère Ysaure).'],
      ['Anoer cherche le vampire qui l’a transformé', ''],
      ['Varynor cherche un remède', 'pour Reduz, la mère de Kamot, à Valperce.'],
      ['Anoer a eu une vision', 'une Lyre du Chant des Cieux, dans un temple au sommet d’une montagne.'],
      ['Telissandre cherche sa mère', '']
    ] },
    { titre: 'Pistes et objets en cours', points: [
      ['Protéger la cargaison du Train Frelon', 'la Branche Obsidienne s’est enfuie avec l’orbe.', 'echec'],
      ['Le parchemin d’invocation planaire', '3 fragments sur 7.'],
      ['Un point vert sur la carte', 'une ancienne civilisation runique, des lieux défendus par des runes.'],
      ['La Branche Obsidienne', 'Kael, Mirel, Dregar et Syris courent toujours, avec l’orbe. Avis de recherche aux Douanes.']
    ] },
    { titre: 'Contacts dans le royaume des Nains', points: [
      ['Retrouver Météore', 'Nariz Bavel, retrouvé au camp des bloqués : le contact du Cercle des Veilleurs.', 'fait'],
      ['Mina Frappeforte', 'une alliée naine que connaissait la Fée BD.']
    ] }
  ],

  /* Le tableau des départs : une ligne par rubrique.
     pret = la page existe : la ligne affiche « À l'heure » et devient cliquable.
     Sinon, elle affiche son statut de gare (Retardé, En attente…). Un statut écrit à la main s’affiche même si la page est prête. */
  departs: [
    { destination: 'Dernière séance', voie: '1', page: 'seance.html', pret: true },
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
     participants : paye = ce qui a été versé, période par période, la période désignée par son mois de début :
       { '2026-10': 13.40 } = 13,40 € versés pour la période d’octobre ; si c’est moins que la part, la page affiche le reste à payer.
       (Une simple liste ['2026-10'] veut dire : période réglée en entier.)
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
      { nom: 'Vincent', perso: 'Larian Feuillelune', paye: { '2026-10': 11.73 } },
      { nom: 'Jeremy', perso: 'Kagé', paye: [] },
      { nom: 'Lucas', perso: 'Anoer Maethyr', paye: [] },
      { nom: 'Kelly', perso: 'Telissandre', paye: { '2026-10': 12 } },
      { nom: 'Morgane', perso: 'Serah', paye: { '2026-10': 11.73 } }
    ]
  }
};
