const texte = "Bienvenue";
const element = document.getElementById("milieu_de_page");
let index = 0;

function ecrireTexte() {
  if (index < texte.length) {
    element.textContent += texte.charAt(index);
    index++;
    setTimeout(ecrireTexte, 100); 
  }
}

ecrireTexte();