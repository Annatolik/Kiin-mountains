
function toggleSubMenu() {
    var firstMenu = document.getElementById("first-menu");
    firstMenu.style.display = firstMenu.style.display === "block" ? "none" : "block";
  }
  
  function toggleSubSubmenu() {
    var firstSubmenu = document.getElementById("first-submenu");
    var firstMenu = document.getElementById("first-menu");
    firstSubmenu.style.display = firstSubmenu.style.display === "block" ? "none" : "block";
    if (!firstSubmenu.style.display || firstSubmenu.style.display === "none") {
      firstMenu.style.height = "402px";
    } else {
      firstMenu.style.height = "552px";
    }
  }