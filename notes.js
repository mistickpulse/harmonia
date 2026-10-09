/* Lecture des notes du scribe : le tableur du formulaire (CSV) devient une liste de séances, chacune avec ses notes. */
(function (racine) {
  // Découpe un CSV (guillemets, virgules et retours à la ligne dans les champs compris)
  function lireCSV(texte) {
    const lignes = []; let ligne = [], champ = '', entre = false;
    for (let i = 0; i < texte.length; i++) {
      const c = texte[i];
      if (entre) {
        if (c === '"') { if (texte[i + 1] === '"') { champ += '"'; i++; } else entre = false; }
        else champ += c;
      } else if (c === '"') entre = true;
      else if (c === ',') { ligne.push(champ); champ = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && texte[i + 1] === '\n') i++;
        ligne.push(champ); lignes.push(ligne); ligne = []; champ = '';
      } else champ += c;
    }
    if (champ !== '' || ligne.length) { ligne.push(champ); lignes.push(ligne); }
    return lignes.filter(l => l.some(v => v.trim() !== ''));
  }

  const simple = t => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  // Les colonnes, retrouvées par un mot de leur titre (les titres exacts peuvent changer un peu)
  const COLONNES = [
    ['quand', 'horodat'], ['seance', 'seance'], ['auteur', 'auteur'], ['recit', 'passe'],
    ['personnages', 'personnage'], ['lieux', 'lieu'], ['quetes', 'quete'], ['objets', 'objet'], ['questions', 'question']
  ];

  // « S2-01 », « s2 1 », « 1 »… deviennent toujours « S2-01 » (saison 2 par défaut)
  function idSeance(brut) {
    const t = simple(brut || '').replace(/\s+/g, '');
    let m = t.match(/s(\d+)[-_.]?(?:s|seance)?(\d+)/);
    if (m) return `S${+m[1]}-${String(+m[2]).padStart(2, '0')}`;
    m = t.match(/(\d+)/);
    return m ? `S2-${String(+m[1]).padStart(2, '0')}` : (brut || '').trim() || 'Sans numéro';
  }
  // « 10/10/2026 23:41:02 » → nombre triable
  function dateTriable(q) {
    const m = (q || '').match(/(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?/);
    return m ? Date.UTC(+m[3], +m[2] - 1, +m[1], +m[4], +m[5], +(m[6] || 0)) : 0;
  }

  function seancesDepuisCSV(texte) {
    const [entetes, ...donnees] = lireCSV(texte);
    if (!entetes) return [];
    const idx = {};
    COLONNES.forEach(([cle, mot]) => { idx[cle] = entetes.findIndex(h => simple(h).includes(mot)); });
    const notes = donnees.map(l => {
      const n = {}; COLONNES.forEach(([cle]) => { n[cle] = idx[cle] >= 0 ? (l[idx[cle]] || '').trim() : ''; });
      n.id = idSeance(n.seance); n.tri = dateTriable(n.quand); return n;
    }).filter(n => n.recit || n.personnages || n.lieux || n.quetes || n.objets || n.questions);
    const parSeance = {};
    notes.forEach(n => { (parSeance[n.id] = parSeance[n.id] || []).push(n); });
    return Object.entries(parSeance)
      .map(([id, liste]) => ({ id, notes: liste.sort((a, b) => a.tri - b.tri), derniere: Math.max(...liste.map(n => n.tri)) }))
      .sort((a, b) => b.derniere - a.derniere || b.id.localeCompare(a.id));
  }

  const api = { lireCSV, idSeance, seancesDepuisCSV };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else racine.HarmoniaNotes = api;
})(typeof window !== 'undefined' ? window : this);
