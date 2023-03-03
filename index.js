// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont cliquables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const mouses = document.querySelectorAll(".mouse");
const cursor = document.querySelector("#cursor");
const mouse1 = document.querySelector("#mouse1");
const mouse2 = document.querySelector("#mouse2");

window.addEventListener("mousemove", (e) => {
  // cursor.style.left = e.x + "px";
  // cursor.style.top = e.y + "px";
  // mouse1.style.left = e.x + "px";
  // mouse1.style.top = e.y + "px";
  // mouse2.style.left = e.x + "px";
  // mouse2.style.top = e.y + "px";
  mouses.forEach((mouse) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
  });
});
