var hamburgerMenu = document.getElementById('hamburger-menu')
var navMenu = document.getElementsByClassName('menu-nav-item')
var footerMenu = document.getElementsByClassName('footer-nav-item')

function toggleMenu () {
  document.getElementById('hamburger-menu').classList.toggle('change');
  document.getElementById('logo').classList.toggle('hidden');
  document.getElementById('shopping-cart').classList.toggle('hidden');
  document.getElementById('menu-overlay').classList.toggle('hidden');
  document.querySelector('main').classList.toggle('hidden');
}

function collapseMenuItem (index) {
  document.getElementById(`menu-dropdown-${index}`).classList.toggle("show");
  document.getElementById(`menu-dropdown-icon-${index}`).classList.toggle("changeMenu");
}

function collapseFooterItem (index) {
  document.getElementById(`footer-dropdown-${index}`).classList.toggle("show");
  document.getElementById(`footer-dropdown-icon-${index}`).classList.toggle("changeFooter");
}

if (hamburgerMenu) {
  hamburgerMenu.addEventListener('click', toggleMenu);
}

if (navMenu) {
  var navMenuItems = {} //is voor objects. An array is a type of object intended to be only assigned numeric keys.

  for (var index = 1; index <= navMenu.length; index++) {
    var item = navMenu[index - 1];
    navMenuItems[index] = item // matched met getal  achter 'id='menu-dropdown-icon-x' en id='menu-dropdown-x' in html
  }

  Object.keys(navMenuItems).forEach(function (index) { 
    navMenuItems[index].addEventListener('click', function () { // per navMenuItem waar nodig is een eventListener toevoegen
      collapseMenuItem(index);
    })
  })
}

if (footerMenu) {
  var footerMenuItems = {} //is voor objects. An array is a type of object intended to be only assigned numeric keys.

  for (var index = 1; index <= footerMenu.length; index++) {
    var item = footerMenu[index - 1]
    footerMenuItems[index] = item // matched met getal  achter 'id='footer-dropdown-x' en id='footer-dropdown-icon-x' in html
  }

  Object.keys(footerMenuItems).forEach(function (index) {
    footerMenuItems[index].addEventListener('click', function () { // per footerItem een eventListener toevoegen
      collapseFooterItem(index);
    })
  })
}
