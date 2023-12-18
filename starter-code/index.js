let destination = document.getElementById("destination")
let destLinks = document.getElementById("destLinks")
destination.addEventListener("click", () => {
  if (document.body.offsetWidth <= "375") {
    destLinks.style.display = "flex";
    destLinks.style.top = "5%";
    crewLinks.style.display = "none";
    techLinks.style.display = "none";
  }
})
let crew = document.getElementById("crew")
let crewLinks = document.getElementById("crewLinks")
crew.addEventListener("click", () => {
  if (document.body.offsetWidth <= "375") {
    crewLinks.style.display = "flex";
    crewLinks.style.top = "15%";
    destLinks.style.display = "none";
    techLinks.style.display = "none";
  }
})
let technology = document.getElementById("technology")
let techLinks = document.getElementById("techLinks")
technology.addEventListener("click", () => {
  if (document.body.offsetWidth <= "375") {
    techLinks.style.display = "flex";
    techLinks.style.top = "28%";
    destLinks.style.display = "none";
    crewLinks.style.display = "none";
  }
})
let hamburger = document.getElementById("hamburger");
let listItems = document.querySelectorAll('#links li');

hamburger.addEventListener("click", () => {
  document.getElementById("links").style.width = "50%"
  document.getElementById("links").style.transition = "width 1s"
})
let closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", () => {
  document.getElementById("links").style.transition = "width 1s"
  document.getElementById("links").style.width = "0"
  destLinks.style.display = "none";
  crewLinks.style.display = "none";
  techLinks.style.display = "none";
})