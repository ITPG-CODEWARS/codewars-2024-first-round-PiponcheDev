function TrainDropdown() {
    document.getElementById("trains").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
      var dropdowns = document.getElementsByClassName("train-elements");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

  function Menu() {
    const navBar = document.getElementById("phone-nav-bar");
    navBar.classList.toggle("show-nav-bar");
}
window.onclick = function (event) {
  const menuButton = document.querySelector('.menu-button');
  const navBar = document.getElementById("phone-nav-bar");

  if (!menuButton.contains(event.target) && !navBar.contains(event.target)) {
      navBar.classList.remove("show-nav-bar");
  }
}

function MobileTrainDropdown() {
  const trainElements = document.getElementById("tablet-trains");
  if (trainElements.style.display === "none") {
      trainElements.style.display = "flex";
  } else {
      trainElements.style.display = "none";
  }
}