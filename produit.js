function openMenu() {
  document.getElementById("menu").style.left = "0";
  document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("menu").style.left = "-250px";
  document.getElementById("overlay").style.display = "none";
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
