/* Commun à toutes les pages : le menu simple du pied de page (construit à partir des lignes du tableau des départs)
   et le bouton « Prendre des notes » (dans tout élément .prendre-notes, si le lien du formulaire est renseigné). */
(() => {
  const lien = window.HARMONIA && window.HARMONIA.formulaireNotes;
  document.querySelectorAll('.prendre-notes').forEach(boite => {
    if (!lien) { boite.hidden = true; return; }
    const a = document.createElement('a'); a.className = 'bouton-notes'; a.href = lien; a.target = '_blank'; a.rel = 'noopener';
    a.innerHTML = '<span aria-hidden="true">✒</span> Prendre des notes';
    a.addEventListener('click', e => { e.preventDefault(); demander(); });
    boite.appendChild(a);
  });

  // Avant d'ouvrir le formulaire : « Êtes-vous le scribe de la séance ? »
  let fenetre;
  function demander() {
    if (!fenetre) {
      fenetre = document.createElement('dialog'); fenetre.className = 'scribe';
      fenetre.innerHTML = '<p class="question">Êtes-vous le scribe de la séance ?</p>'
        + '<p class="explication">Seul le scribe désigné prend les notes de la séance.</p>'
        + '<div class="choix"><button type="button" class="oui">Oui</button><button type="button" class="non">Non</button></div>';
      document.body.appendChild(fenetre);
      fenetre.querySelector('.oui').addEventListener('click', () => { fenetre.close(); window.open(lien, '_blank', 'noopener'); });
      fenetre.querySelector('.non').addEventListener('click', () => fenetre.close());
      fenetre.addEventListener('click', e => { if (e.target === fenetre) fenetre.close(); }); // clic hors de la fenêtre
    }
    if (fenetre.showModal) fenetre.showModal();
    else if (confirm('Êtes-vous le scribe de la séance ?')) window.open(lien, '_blank', 'noopener');
  }
})();
(() => {
  const menu = document.getElementById('menuSimple');
  if (!menu || !window.HARMONIA) return;
  window.HARMONIA.departs.forEach((d, k) => {
    if (k) menu.appendChild(Object.assign(document.createElement('span'), { textContent: '·' }));
    const m = document.createElement(d.pret ? 'a' : 'span');
    m.textContent = d.destination;
    if (d.pret) { m.href = d.page; if (location.pathname.endsWith('/' + d.page)) m.setAttribute('aria-current', 'page'); }
    else m.style.opacity = '.5';
    menu.appendChild(m);
  });
})();
