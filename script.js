/*inicio menu */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function toggleSubmenu(event) {
  event.preventDefault();
  var submenu = document.querySelector(".submenu");
  submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
}
/*final menu */