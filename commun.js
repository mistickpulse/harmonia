/* Commun à toutes les pages : le menu simple du pied de page (construit à partir des lignes du tableau des départs)
   et le bouton « Prendre des notes » (dans tout élément .prendre-notes, si le lien du formulaire est renseigné). */
(() => {
  const lien = window.HARMONIA && window.HARMONIA.formulaireNotes;
  document.querySelectorAll('.prendre-notes').forEach(boite => {
    if (!lien) { boite.hidden = true; return; }
    const a = document.createElement('a'); a.className = 'bouton-notes'; a.href = lien; a.target = '_blank'; a.rel = 'noopener';
    a.innerHTML = '<span aria-hidden="true">✒</span> Prendre des notes';
    boite.appendChild(a);
  });
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
