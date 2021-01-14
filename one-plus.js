function collapseFooterItem(x) {
  x.classList.toggle("changeFooter");
}

function collapseMenuItem(x) {
  x.classList.toggle("changeMenur");
}

function collapseFooterItem (index) {
  document.getElementById(`footer-dropdown-${index}`).classList.toggle("show");
  document.getElementById(`footer-dropdown-icon-${index}`).classList.toggle("changeFooter");
}

function collapseMenuItem (index) {
  document.getElementById(`menu-dropdown-${index}`).classList.toggle("show");
  document.getElementById(`menu-dropdown-icon-${index}`).classList.toggle("changeMenu");
}


function toggleMenu () {
  document.getElementById('hamburger-menu').classList.toggle('change');
  document.getElementById('logo').classList.toggle('hidden');
  document.getElementById('shopping-cart').classList.toggle('hidden');
  document.getElementById('menu-overlay').classList.toggle('hidden');
  document.querySelector('main').classList.toggle('hidden');
}
