# Harmonia — le site de la campagne

Site public des joueurs : uniquement ce que les joueurs savent. Aucun secret de MJ ici.

- `index.html` : l'accueil, le **tableau des départs** de la gare des Contreforts (chaque ligne est une rubrique).
- `histoire.html` : **L'histoire jusqu'ici**, le résumé de la saison 1.
- `prochaine.html` : **Prochain départ**, le billet de train et le compte à rebours (`prochaineSeance` dans `donnees.js`).
- `fil.html` : **Fil d’Ariane**, la feuille de route (`fil` dans `donnees.js`, version publique validée).
- `calendrier.html` : **Calendrier**, l’horaire de la semaine en jeu (`semaine` dans `donnees.js`, dates écrites à la main).
- `seance.html` : **Dernière séance**. Lit **en direct** le tableur du formulaire (la base de données des notes, `formulaire.lecture` dans `donnees.js`) avec `notes.js`, regroupe les notes par séance, les range par rubrique ; ajoute le récap validé de `seances.js` s’il existe ; coche « Fiches du monde créées » d’après `traitees.js` (horodatages des notes déjà rangées dans Le monde).
- `monde.html` + `monde.js` : **Le monde**, les fiches (personnages, lieux, objets, factions, questions) tirées des notes des joueurs, avec recherche ; chaque fait indique sa source.
- `scribe.html` : **Carnet du scribe**, envoie les notes directement au formulaire Google (identifiants dans `formulaire` de `donnees.js`), brouillon gardé dans le navigateur, lien de secours vers le formulaire.
- `commun.js` : le menu simple du pied de page, commun à toutes les pages.
- `financement.html` : le **reçu du guichet**, les outils payants et la part de chaque participant (montants dans `donnees.js`).
- `donnees.js` : la date en jeu, la prochaine séance, les lignes du tableau (`pret: true` quand la page existe : statut « À l’heure ») et le financement.
- `style.css` : la charte commune.

Publié avec GitHub Pages (branche `main`, dossier racine).
