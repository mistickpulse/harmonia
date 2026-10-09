/* Commun à toutes les pages : le menu simple du pied de page, construit à partir des lignes du tableau des départs. */
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
