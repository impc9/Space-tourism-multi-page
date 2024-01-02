let destination = document.getElementById("destination")
let destLinks = document.getElementById("destLinks")
destination.addEventListener("click", () => {
  if (document.body.offsetWidth <= "375") {
    destLinks.style.width = "40%";
    destLinks.style.transition = "width 1s";
    destLinks.style.top = "12%";
    crewLinks.style.width = "0";
    crewLinks.style.transition = "width 1s";
    techLinks.style.width = "0";
    techLinks.style.transition = "width 1s";
  }
})
let crew = document.getElementById("crew")
let crewLinks = document.getElementById("crewLinks")
crew.addEventListener("click", () => {
  if (document.body.offsetWidth <= "375") {
    crewLinks.style.width = "40%";
    crewLinks.style.transition = "width 1s";
    crewLinks.style.top = "22%";
    destLinks.style.width = "0";
    destLinks.style.transition = "width 1s";
    techLinks.style.width = "0";
    techLinks.style.transition = "width 1s";
  }
})
let technology = document.getElementById("technology")
let techLinks = document.getElementById("techLinks")
technology.addEventListener("click", () => {
  if (document.body.offsetWidth <= "375") {
    techLinks.style.width = "40%";
    techLinks.style.transition = "width 1s";
    techLinks.style.top = "35%";
    destLinks.style.width = "0";
    destLinks.style.transition = "width 1s";
    crewLinks.style.width = "0";
    crewLinks.style.transition = "width 1s";
  }
})
let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  document.getElementById("links").style.width = "100%"
  document.getElementById("links").style.transition = "width 1s"
})
let closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", () => {
  document.getElementById("links").style.transition = "width 1s"
  document.getElementById("links").style.width = "0"
  destLinks.style.width = "0";
  destLinks.style.transition = "width 1s";
  crewLinks.style.width = "0";
  crewLinks.style.transition = "width 1s";
  techLinks.style.width = "0";
  techLinks.style.transition = "width 1s";
})
