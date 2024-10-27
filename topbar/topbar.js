function TrainDropdown() { 
  const trainMenu = document.getElementById("trains");
  trainMenu.classList.toggle("show");
  console.log("TrainDropdown toggled:", trainMenu.classList.contains("show"));
}

  function Menu() {
    const navBar = document.getElementById("phone-nav-bar");
    navBar.classList.toggle("show-nav-bar");
}
function MobileTrainDropdown() {
  const trainElements = document.getElementById("tablet-trains");
  if (!trainElements.style.display || trainElements.style.display === "none") {
      trainElements.style.display = "flex";
  } else {
      trainElements.style.display = "none";
  }
}

window.addEventListener("click", function (event) {
  console.log("Window click detected on:", event.target);

  // Close train dropdown if clicked outside the dropdown button
  if (!event.target.closest('.dropdown-button')) {
    const dropdowns = document.getElementsByClassName("train-elements");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        console.log("Closed train dropdown:", openDropdown);
      }
    }
  }

  // Close mobile nav menu if clicked outside menu button and nav bar
  const navBar = document.getElementById("phone-nav-bar");
  const menuButton = document.querySelector('.menu-button');
  if (navBar && menuButton && !menuButton.contains(event.target) && !navBar.contains(event.target)) {
    navBar.classList.remove("show-nav-bar");
    console.log("Closed mobile nav menu.");
  }
});

function Phone(){
  navigator.clipboard.writeText("+359884205721");
  alert("You succesfully copied my phone");
}

function Gmail(){
  navigator.clipboard.writeText("gabrieltrainlover365@gmail.com");
  alert("You succesfully copied my email");
}

function Github(){
  navigator.clipboard.writeText("https://github/PiponcheDev");
  alert("You succesfully copied my github account url");
}