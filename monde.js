/* Le monde : les fiches tirées de ce que les joueurs savent (notes des joueurs, « L'histoire jusqu'ici », fil d'Ariane).
   Chaque fiche : nom, resume (une ligne), faits : [texte, source] (source = 'S1' pour la saison 1, ou l'id d'une séance, ex. 'S2-01').
   Personnages : lieu = où le groupe les a rencontrés, sous forme de chemin dans l'arbre (« Gravathor › Les Hautes Portes › … ») ;
   ce chemin doit être une des feuilles de groupesPersonnages.
   Rien de ce que seul le MJ sait. */
window.HARMONIA_MONDE = {
  // L'arbre des lieux, dans l'ordre d'affichage : une feuille par ligne, les niveaux séparés par « › ».
  groupesPersonnages: [
    'Le groupe',
    'Gravathor › Les Hautes Portes › Le Caravansérail › Le camp des bloqués',
    'Gravathor › Les Hautes Portes › Le Caravansérail › Le Marché des Caravanes',
    'Gravathor › Les Hautes Portes › La Grande Porte › Les Douanes',
    'Gravathor › La Cité Intérieure',
    'Gravathor › Pas encore rencontrés',
    'Le Train Frelon › L’équipage et la gare',
    'Le Train Frelon › La Branche Obsidienne',
    'Valperce',
    'Le Refuge Déphasé',
    'Le désert',
    'Visions du futur'
  ],
  personnages: [
    { nom: 'Koma', lieu: 'Le groupe', resume: 'Compagnon du groupe.', faits: [
      ['Depuis le passage chez l’alchimiste, il n’a plus jamais marché droit.', 'S1'],
      ['Il a perdu sa pièce porte-bonheur dans le Train Frelon. Son symbole est celui de sa famille, au clan des Dragons.', 'S1'],
      ['Le groupe a promis de l’aider à retrouver sa famille, dans le 5e Royaume.', 'S1'],
      ['Dans une vision du futur, il porte des écailles vert émeraude.', 'S1']
    ] },
    { nom: 'La Fée BD', lieu: 'Le groupe', resume: 'Ancienne compagne du groupe.', faits: [
      ['Elle est morte dans l’artefact du Train Frelon.', 'S1'],
      ['Elle connaissait une alliée naine, Mina Frappeforte.', 'S1']
    ] },
    { nom: 'Sorra', lieu: 'Gravathor › La Cité Intérieure', resume: 'Contact à la guilde des marchands de la capitale naine.', faits: [
      ['C’est à Sorra qu’il faut livrer le Coffre de Mnémarèse.', 'S1'],
      ['La guilde des marchands a son siège en Cité Intérieure.', 'S2-01']
    ] },
    { nom: 'Lord Xavier Valcaris', lieu: 'Valperce', resume: 'Hôte d’un dîner décisif.', faits: [
      ['Lors de son banquet, des bagues sont offertes sur un plateau : elles mordent le doigt et ne s’enlèvent plus.', 'S1']
    ] },
    { nom: 'Erindis Solastre', lieu: 'Valperce', resume: 'La vraie coupable de Valperce.', faits: [
      ['Démasquée, ses aveux ont lavé le groupe de toute accusation.', 'S1']
    ] },
    { nom: 'Aelys Vhorian', lieu: 'Le Refuge Déphasé', resume: 'Le père de la technomagie.', faits: [
      ['Il parle au groupe à travers le temps, depuis le Refuge Déphasé.', 'S1'],
      ['Il sut capturer le Chant des Cieux et l’enfermer dans un cristal, au cœur de la Citadelle de Braem-Valor.', 'S1']
    ] },
    { nom: '8run0', lieu: 'Le Refuge Déphasé', resume: 'Le Conservateur du Silence.', faits: [
      ['Kagé lui a confié son bras tranché.', 'S1']
    ] },
    { nom: 'Alix Gontran', lieu: 'Visions du futur', resume: 'L’Éminence de l’Ombre.', faits: [
      ['Son nom est apparu dans une vision du futur.', 'S1'],
      ['Kagé reconnaît son odeur.', 'S1']
    ] },
    { nom: 'Zeyrion, le Premier Écho', lieu: 'Visions du futur', resume: 'Une figure d’une vision du futur.', faits: [
      ['Dans cette vision, il tombe sous les coups du groupe.', 'S1']
    ] },
    { nom: 'Edgard', lieu: 'Le désert', resume: 'Ancien conseiller des Moussym.', faits: [
      ['Il a trahi les Moussym en allumant toutes les urnes. Varynor l’a abattu.', 'S1']
    ] },
    { nom: 'Briké, le commandant du Train Frelon', lieu: 'Le Train Frelon › L’équipage et la gare', resume: 'Un nain, membre des Veilleurs.', faits: [
      ['Il a confié au groupe une alarme, au cas où la cargaison serait attaquée.', 'S1'],
      ['À l’arrivée, il sait qu’il devra répondre de l’échec devant le Cercle : « Je crois que c’est la merde. »', 'S2-01'],
      ['L’officier d’escorte l’a sermonné devant tout le quai, puis lui a ordonné de mener le groupe jusqu’à la cité.', 'S2-01']
    ] },
    { nom: 'L’officier d’escorte', lieu: 'Le Train Frelon › L’équipage et la gare', resume: 'Commande les soldats venus chercher l’artefact du train.', faits: [
      ['Il connaît Briké. Furieux devant le wagon vide, il a bouclé le quai et interrogé chaque passager.', 'S2-01']
    ] },
    { nom: 'Le greffier à la broche', lieu: 'Le Train Frelon › L’équipage et la gare', resume: 'Il prenait des notes derrière l’officier.', faits: [
      ['Une broche de bronze en forme de clé de voûte. Ni bague ni tatouage.', 'S2-01'],
      ['Après les témoignages, il a déchiré sa feuille.', 'S2-01']
    ] },
    { nom: 'Brunhilde Pèsor', lieu: 'Gravathor › Les Hautes Portes › La Grande Porte › Les Douanes', resume: 'Cheffe des Douanes.', faits: [
      ['Ses hommes ont été attaqués. Elle fait circuler les avis de recherche de la Branche Obsidienne.', 'S2-01']
    ] },
    { nom: 'Ansgar Pèsefort', lieu: 'Gravathor › Les Hautes Portes › La Grande Porte › Les Douanes', resume: 'Douanier, chargé des pesées lourdes.', faits: [] },
    { nom: 'Grolf « Deux-Dos » Rochemousse', lieu: 'Gravathor › Les Hautes Portes › La Grande Porte › Les Douanes', resume: 'Portefaix des Douanes, 3 écus l’heure.', faits: [
      ['Il a perdu un bras de fer contre Varynor (20 écus en jeu) et chambré Anoer.', 'S2-01']
    ] },
    { nom: 'Ilvar Cendremain', lieu: 'Gravathor › Les Hautes Portes › Le Caravansérail › Le camp des bloqués', resume: 'L’allumeur de lanternes de la cité.', faits: [
      ['Grand et élancé pour un nain. En est-il vraiment un ?', 'S2-01'],
      ['Il a conseillé l’auberge pour dormir.', 'S2-01']
    ] },
    { nom: 'Olaf le Crieur', lieu: 'Gravathor › Les Hautes Portes › Le Caravansérail › Le camp des bloqués', resume: 'Crieur du camp des bloqués.', faits: [['Il annonce chaque jour que la Porte rouvrira demain. Personne n’y croit.', 'S2-01']] },
    { nom: 'Le Plaignant', lieu: 'Gravathor › Les Hautes Portes › Le Caravansérail › Le camp des bloqués', resume: 'Meneur du camp des bloqués.', faits: [
      ['Il appelle à la révolte : fermer une cité si bien défendue serait une erreur.', 'S2-01'],
      ['Selon lui, chaque soir, des monstres tentent de passer les murailles, sans succès.', 'S2-01']
    ] },
    { nom: 'Joren Vasque', lieu: 'Gravathor › Les Hautes Portes › Le Caravansérail › Le camp des bloqués', resume: 'Bloqué au camp, sa femme et ses deux enfants restés dehors.', faits: [
      ['Larian a promis de faire passer un message à sa famille, et de faire entrer sa femme dans la cité. Elle est habillée en rouge vif.', 'S2-01'],
      ['Il partage sa tente avec le groupe.', 'S2-01']
    ] },
    { nom: 'Ysolde Marrin', lieu: 'Gravathor › Les Hautes Portes › Le Caravansérail › Le camp des bloqués', resume: 'Couturière, humaine d’âge mûr.', faits: [
      ['Effrayée, sa bourse est tout ce qui lui reste. Kagé lui a donné 10 PO (10 écus).', 'S2-01'],
      ['Elle doit coudre un pull rose pour Kagé.', 'S2-01']
    ] },
    { nom: 'Dagny Troquebien', lieu: 'Gravathor › Les Hautes Portes › Le Caravansérail › Le camp des bloqués', resume: 'Troqueuse naine : elle ne vend rien, elle échange.', faits: [
      ['Elle a cédé à Kagé une boussole et une gourde contre une statuette, et l’a envoyé servir de commis à l’auberge.', 'S2-01']
    ] },
    { nom: 'Brim et Brom', lieu: 'Gravathor › Les Hautes Portes › Le Caravansérail › Le camp des bloqués', resume: 'Jumeaux de sept ans, au camp des bloqués.', faits: [
      ['Leurs parents sont restés dehors. Leur tente leur a été donnée par Nariz Bavel.', 'S2-01'],
      ['Varynor a joué « à la herse » avec eux et leur a donné 10 écus.', 'S2-01']
    ] },
    { nom: 'Fenna Grisemèche', lieu: 'Gravathor › Les Hautes Portes › Le Caravansérail › Le camp des bloqués', resume: 'Humaine couverte de suie, les mains bandées.', faits: [] },
    { nom: 'Mère Ysaure', lieu: 'Gravathor › Les Hautes Portes › Le Caravansérail › Le camp des bloqués', resume: 'Soigneuse du camp des bloqués.', faits: [
      ['Elle a appris à Varynor que l’Éphéméride de Sangrun sert à guérir de la sève noire.', 'S2-01']
    ] },
    { nom: 'Maëlle Racineuse', lieu: 'Gravathor › Les Hautes Portes › Le Caravansérail › Le Marché des Caravanes', resume: 'Herboriste, vieille humaine voûtée qui regarde les langues.', faits: [
      ['Elle a offert un thé relaxant à Telissandre.', 'S2-01']
    ] },
    { nom: 'Ottilie Grainfort', lieu: 'Gravathor › Les Hautes Portes › Le Caravansérail › Le Marché des Caravanes', resume: 'Marchande de grain au Marché des Caravanes.', faits: [
      ['Elle soupçonne la guilde des marchands de garder d’importants stocks de grain.', 'S2-01'],
      ['Elle a demandé à Anoer et Telissandre de copier le registre des stocks de la Guilde.', 'S2-01']
    ] },
    { nom: 'Kael', lieu: 'Le Train Frelon › La Branche Obsidienne', resume: 'Membre de la Branche Obsidienne.', faits: [
      ['Il s’est enfui avec l’orbe du Train Frelon, avec Mirel, Dregar et Syris.', 'S1'],
      ['Aux Douanes, son portrait est affiché : « voleur d’or et d’artefacts ». Le dessin est de Varynor.', 'S2-01']
    ] },
    { nom: 'Mirel', lieu: 'Le Train Frelon › La Branche Obsidienne', resume: 'Membre de la Branche Obsidienne.', faits: [['Elle s’est enfuie avec l’orbe du Train Frelon.', 'S1']] },
    { nom: 'Dregar', lieu: 'Le Train Frelon › La Branche Obsidienne', resume: 'Membre de la Branche Obsidienne.', faits: [['Il s’est enfui avec l’orbe du Train Frelon.', 'S1']] },
    { nom: 'Syris', lieu: 'Le Train Frelon › La Branche Obsidienne', resume: 'Membre de la Branche Obsidienne.', faits: [['Il s’est enfui avec l’orbe du Train Frelon.', 'S1']] },
    { nom: 'Nariz Bavel, « Météore »', lieu: 'Gravathor › Les Hautes Portes › Le Caravansérail › Le camp des bloqués', resume: 'Contact du Cercle des Veilleurs dans le royaume des Nains.', faits: [
      ['Un nain transcendant puissant, tatoué jusqu’à l’épaule.', 'S1'],
      ['Au camp des bloqués, il passe pour un chef d’escorte de caravanes et rassure les réfugiés.', 'S2-01'],
      ['À 20h, il a pris Larian à part et lui a montré sa bague du Cercle : il est Météore. Il offre au groupe une tente et un lit à l’auberge.', 'S2-01']
    ] },
    { nom: 'Mina Frappeforte', lieu: 'Gravathor › Pas encore rencontrés', resume: 'Une alliée naine.', faits: [['La Fée BD la connaît.', 'S1']] },
    { nom: 'Reduz', lieu: 'Valperce', resume: 'La mère de Kamot, à Valperce.', faits: [['Varynor cherche un remède pour elle.', 'S1']] }
  ],
  lieux: [
    { nom: 'Gravathor', resume: 'La capitale du royaume des Nains, Karak-Durn.', faits: [
      ['Ses portes vont fermer pour une raison inconnue.', 'S1'],
      ['Une rumeur parle d’un vampire dans la capitale naine.', 'S1'],
      ['Une cité taillée dans la montagne, hérissée de défenses technomagiques. On s’y sent tout petit.', 'S2-01'],
      ['Ses portes se sont fermées le 18/02, avancées au jour même à cause du vol de l’artefact du train.', 'S2-01'],
      ['Gravathor voue un culte à la montagne.', 'S2-01']
    ] },
    { nom: 'Les Douanes', resume: 'À la Grande Porte : cargaisons en attente, tables de pesée couvertes de paille.', faits: [
      ['Au fond, une porte couverte de runes technomagiques.', 'S2-01'],
      ['Des gardes y ont été tués et de l’or volé. Les avis de recherche accusent la Branche Obsidienne.', 'S2-01']
    ] },
    { nom: 'Le Caravansérail', resume: 'Un marché taillé dans la pierre, devenu refuge depuis la fermeture.', faits: [
      ['On y trouve une auberge.', 'S2-01']
    ] },
    { nom: 'Le camp des bloqués', resume: 'Une ancienne place marchande où se sont réfugiés ceux que la fermeture a piégés.', faits: [] },
    { nom: 'Le Marché des Caravanes', resume: 'Le marché du Caravansérail.', faits: [] },
    { nom: 'Les entrepôts de la Guilde', resume: 'Où la guilde des marchands garde ses stocks.', faits: [
      ['Ottilie veut une copie du registre des stocks.', 'S2-01']
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
      ['À livrer à Sorra, à la guilde des marchands de la capitale naine.', 'S1'],
      ['Varynor le porte désormais. Le diapason des gardes a vibré près de lui à l’entrée.', 'S2-01']
    ] },
    { nom: 'Les bagues du Cercle', resume: 'Offertes au dîner de Lord Xavier Valcaris.', faits: [
      ['Elles mordent le doigt, ne s’enlèvent plus, et un pseudonyme se grave à l’intérieur. Lyria n’en porte pas.', 'S1'],
      ['Larian a rejoint le Cercle dans le Train Frelon.', 'S1']
    ] },
    { nom: 'L’orbe du Train Frelon', resume: 'La cargaison du train.', faits: [
      ['Volée par la Branche Obsidienne, qui a laissé l’or derrière elle.', 'S1']
    ] },
    { nom: 'Le parchemin d’invocation planaire', resume: 'Incomplet.', faits: [['3 fragments sur 7.', 'S1']] },
    { nom: 'La pièce porte-bonheur de Koma', resume: 'Perdue dans le Train Frelon.', faits: [['Son symbole est celui de sa famille, au clan des Dragons.', 'S1']] },
    { nom: 'L’alarme du commandant', resume: 'Confiée au groupe dans le Train Frelon.', faits: [['À déclencher si la cargaison est attaquée.', 'S1']] },
    { nom: 'L’Éphéméride de Sangrun', resume: 'Une plante rare et mystérieuse, nourrie des énergies magiques.', faits: [
      ['Elle sert à guérir de la sève noire. Il y a plusieurs façons de la faire pousser.', 'S2-01']
    ] },
    { nom: 'La boussole et la gourde de Dagny', resume: 'Obtenues par Kagé contre une statuette.', faits: [] },
    { nom: 'Les avis de recherche', resume: 'Affichés aux Douanes.', faits: [
      ['Les quatre de la Branche Obsidienne, d’après les portraits de Varynor.', 'S2-01']
    ] },
    { nom: 'La Lyre du Chant des Cieux', resume: 'Vue en vision par Anoer.', faits: [['Dans un temple, au sommet d’une montagne.', 'S1']] }
  ],
  factions: [
    { nom: 'Le Cercle des Veilleurs', resume: 'Ceux qui ont confié le Coffre de Mnémarèse au groupe.', faits: [
      ['Le commandant du Train Frelon en fait partie.', 'S1'],
      ['Météore, Nariz Bavel, en est le contact à Gravathor.', 'S2-01']
    ] },
    { nom: 'La Branche Obsidienne', resume: 'Quatre transcendants : Kael, Mirel, Dregar, Syris.', faits: [
      ['Ils refusent que les Veilleurs mettent la main sur le Chant.', 'S1'],
      ['Silhouettes en violet dans le Train Frelon.', 'S1']
    ] },
    { nom: 'La guilde des marchands', resume: 'Celle à qui le coffre doit être livré.', faits: [
      ['Ottilie Grainfort l’accuse de retenir le grain pendant que les prix flambent.', 'S2-01']
    ] },
    { nom: 'Les Arches du Renouveau', resume: 'Un culte de Valperce.', faits: [['Tombé, son chef vaincu.', 'S1']] },
    { nom: 'Les Lueurs Vaines', resume: 'Ennemis vaincus au sud de Valperce.', faits: [['Pulvérisées dans leur caverne.', 'S1']] },
    { nom: 'Les Moussym', resume: 'Un peuple du désert.', faits: [['Trahis par leur conseiller Edgard.', 'S1']] },
    { nom: 'Les Longterroi', resume: 'Rivaux des Moussym.', faits: [['En conflit avec les Moussym dans le désert.', 'S1']] }
  ],
  questions: [
    { nom: 'Qui a vu leurs visages à Valperce ?', resume: 'Quelqu’un, dans l’ombre.', faits: [] },
    { nom: 'Pourquoi les portes de Gravathor ont-elles fermé ?', resume: 'Les crieurs parlent des créatures.', faits: [
      ['La fermeture a été avancée au jour même à cause du vol de l’artefact du train.', 'S2-01']
    ] },
    { nom: 'Pourquoi le greffier a-t-il déchiré ses notes ?', resume: 'L’homme à la broche en clé de voûte.', faits: [] },
    { nom: 'Comment la Branche a-t-elle pu frapper les Douanes ?', resume: 'L’attaque date d’il y a 12 heures, le train n’est arrivé que depuis une heure.', faits: [] }
  ]
};
