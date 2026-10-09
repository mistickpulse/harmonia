/* Le monde : les fiches tirées de ce que les joueurs savent (notes des joueurs, « L'histoire jusqu'ici », fil d'Ariane).
   Chaque fiche : nom, resume (une ligne), faits : [texte, source] (source = 'S1' pour la saison 1, ou l'id d'une séance, ex. 'S2-01').
   Rien de ce que seul le MJ sait. */
window.HARMONIA_MONDE = {
  personnages: [
    { nom: 'Koma', resume: 'Compagnon du groupe.', faits: [
      ['Depuis le passage chez l’alchimiste, il n’a plus jamais marché droit.', 'S1'],
      ['Il a perdu sa pièce porte-bonheur dans le Train Frelon. Son symbole est celui de sa famille, au clan des Dragons.', 'S1'],
      ['Le groupe a promis de l’aider à retrouver sa famille, dans le 5e Royaume.', 'S1'],
      ['Dans une vision du futur, il porte des écailles vert émeraude.', 'S1']
    ] },
    { nom: 'Sorra', resume: 'Contact à la guilde des marchands de la capitale naine.', faits: [
      ['C’est à Sorra qu’il faut livrer le Coffre de Mnémarèse.', 'S1']
    ] },
    { nom: 'Lord Xavier Valcaris', resume: 'Hôte d’un dîner décisif.', faits: [
      ['Lors de son banquet, des bagues sont offertes sur un plateau : elles mordent le doigt et ne s’enlèvent plus.', 'S1']
    ] },
    { nom: 'Erindis Solastre', resume: 'La vraie coupable de Valperce.', faits: [
      ['Démasquée, ses aveux ont lavé le groupe de toute accusation.', 'S1']
    ] },
    { nom: 'Aelys Vhorian', resume: 'Le père de la technomagie.', faits: [
      ['Il parle au groupe à travers le temps, depuis le Refuge Déphasé.', 'S1'],
      ['Il sut capturer le Chant des Cieux et l’enfermer dans un cristal, au cœur de la Citadelle de Braem-Valor.', 'S1']
    ] },
    { nom: '8run0', resume: 'Le Conservateur du Silence.', faits: [
      ['Kagé lui a confié son bras tranché.', 'S1']
    ] },
    { nom: 'Alix Gontran', resume: 'L’Éminence de l’Ombre.', faits: [
      ['Son nom est apparu dans une vision du futur.', 'S1'],
      ['Kagé reconnaît son odeur.', 'S1']
    ] },
    { nom: 'Zeyrion, le Premier Écho', resume: 'Une figure d’une vision du futur.', faits: [
      ['Dans cette vision, il tombe sous les coups du groupe.', 'S1']
    ] },
    { nom: 'Edgard', resume: 'Ancien conseiller des Moussym.', faits: [
      ['Il a trahi les Moussym en allumant toutes les urnes. Varynor l’a abattu.', 'S1']
    ] },
    { nom: 'Le commandant du Train Frelon', resume: 'Un nain, membre des Veilleurs.', faits: [
      ['Il a confié au groupe une alarme, au cas où la cargaison serait attaquée.', 'S1']
    ] },
    { nom: 'Kael', resume: 'Membre de la Branche Obsidienne.', faits: [['Il s’est enfui avec l’orbe du Train Frelon, avec Mirel, Dregar et Syris.', 'S1']] },
    { nom: 'Mirel', resume: 'Membre de la Branche Obsidienne.', faits: [['Elle s’est enfuie avec l’orbe du Train Frelon.', 'S1']] },
    { nom: 'Dregar', resume: 'Membre de la Branche Obsidienne.', faits: [['Il s’est enfui avec l’orbe du Train Frelon.', 'S1']] },
    { nom: 'Syris', resume: 'Membre de la Branche Obsidienne.', faits: [['Il s’est enfui avec l’orbe du Train Frelon.', 'S1']] },
    { nom: 'Météore', resume: 'Contact du Cercle des Veilleurs dans le royaume des Nains.', faits: [
      ['Un nain transcendant puissant, tatoué jusqu’à l’épaule.', 'S1']
    ] },
    { nom: 'Mina Frappeforte', resume: 'Une alliée naine.', faits: [['La Fée BD la connaît.', 'S1']] },
    { nom: 'Reduz', resume: 'La mère de Kamot, à Valperce.', faits: [['Varynor cherche un remède pour elle.', 'S1']] }
  ],
  lieux: [
    { nom: 'Gravathor', resume: 'La capitale du royaume des Nains, Karak-Durn.', faits: [
      ['Ses portes vont fermer pour une raison inconnue.', 'S1'],
      ['Une rumeur parle d’un vampire dans la capitale naine.', 'S1']
    ] },
    { nom: 'Le Train Frelon', resume: 'Le train qui relie le Bastion de Fomane à Gravathor.', faits: [
      ['Attaqué par la Branche Obsidienne : bagarre générale au wagon-restaurant, l’orbe a été volé.', 'S1']
    ] },
    { nom: 'Bastion de Fomane', resume: 'Une cité du royaume des Nains.', faits: [
      ['Pour avoir sauvé la foule du marché, le groupe y a reçu des billets de train pour Gravathor.', 'S1']
    ] },
    { nom: 'Valperce', resume: 'La ville où tout a commencé.', faits: [
      ['Le culte des Arches du Renouveau y est tombé, et le groupe y a été innocenté.', 'S1'],
      ['Au sud, dans une caverne, le groupe a vaincu les Lueurs Vaines et récupéré le Coffre de Mnémarèse.', 'S1']
    ] },
    { nom: 'Le Refuge Déphasé', resume: 'Au fond de la fosse.', faits: [
      ['Aelys Vhorian y parle au groupe à travers le temps.', 'S1']
    ] },
    { nom: 'Citadelle de Braem-Valor', resume: 'Une citadelle au cœur de laquelle repose un cristal.', faits: [
      ['Aelys Vhorian y a enfermé le Chant des Cieux qu’il avait capturé.', 'S1']
    ] },
    { nom: 'Tréfange', resume: 'Un port.', faits: [['Le groupe y a tué un kraken. Le port lui doit une fière chandelle.', 'S1']] },
    { nom: 'Forteresse de Briselince', resume: 'Lieu des serments.', faits: [
      ['Larian et Kagé y ont prêté serment. Anor y a affronté un duel. Larian et Varynor y ont éveillé leur Transcendance.', 'S1']
    ] },
    { nom: 'Le désert', resume: 'Là où s’affrontent les Moussym et les Longterroi.', faits: [
      ['Un épisode du voyage, autour de la Pierre Soleil.', 'S1']
    ] },
    { nom: 'Le 5e Royaume', resume: 'Là où vivrait la famille de Koma.', faits: [['Le groupe a promis d’y aider Koma.', 'S1']] }
  ],
  objets: [
    { nom: 'Le Coffre de Mnémarèse', resume: 'La mission du Cercle des Veilleurs.', faits: [
      ['À livrer à Sorra, à la guilde des marchands de la capitale naine.', 'S1']
    ] },
    { nom: 'Les bagues du Cercle', resume: 'Offertes au dîner de Lord Xavier Valcaris.', faits: [
      ['Elles mordent le doigt, ne s’enlèvent plus, et un pseudonyme se grave à l’intérieur. Lyria et Larian n’en portent pas.', 'S1']
    ] },
    { nom: 'L’orbe du Train Frelon', resume: 'La cargaison du train.', faits: [
      ['Volée par la Branche Obsidienne, qui a laissé l’or derrière elle.', 'S1']
    ] },
    { nom: 'Le parchemin d’invocation planaire', resume: 'Incomplet.', faits: [['3 fragments sur 7.', 'S1']] },
    { nom: 'La pièce porte-bonheur de Koma', resume: 'Perdue dans le Train Frelon.', faits: [['Son symbole est celui de sa famille, au clan des Dragons.', 'S1']] },
    { nom: 'L’alarme du commandant', resume: 'Confiée au groupe dans le Train Frelon.', faits: [['À déclencher si la cargaison est attaquée.', 'S1']] },
    { nom: 'La Lyre du Chant des Cieux', resume: 'Vue en vision par Anoer.', faits: [['Dans un temple, au sommet d’une montagne.', 'S1']] }
  ],
  factions: [
    { nom: 'Le Cercle des Veilleurs', resume: 'Ceux qui ont confié le Coffre de Mnémarèse au groupe.', faits: [
      ['Le commandant du Train Frelon en fait partie.', 'S1']
    ] },
    { nom: 'La Branche Obsidienne', resume: 'Quatre transcendants : Kael, Mirel, Dregar, Syris.', faits: [
      ['Ils refusent que les Veilleurs mettent la main sur le Chant.', 'S1'],
      ['Silhouettes en violet dans le Train Frelon.', 'S1']
    ] },
    { nom: 'Les Arches du Renouveau', resume: 'Un culte de Valperce.', faits: [['Tombé, son chef vaincu.', 'S1']] },
    { nom: 'Les Lueurs Vaines', resume: 'Ennemis vaincus au sud de Valperce.', faits: [['Pulvérisées dans leur caverne.', 'S1']] },
    { nom: 'Les Moussym', resume: 'Un peuple du désert.', faits: [['Trahis par leur conseiller Edgard.', 'S1']] },
    { nom: 'Les Longterroi', resume: 'Rivaux des Moussym.', faits: [['En conflit avec les Moussym dans le désert.', 'S1']] }
  ],
  questions: [
    { nom: 'Qui a vu leurs visages à Valperce ?', resume: 'Quelqu’un, dans l’ombre.', faits: [] },
    { nom: 'Pourquoi les portes de Gravathor vont-elles fermer ?', resume: 'La raison reste inconnue.', faits: [] }
  ]
};
