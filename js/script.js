"use strict";

// Tableau de données — à générer avec Copilot / une IA
const data = [
  {
    id: 1,
    name: "Kiméo",
    age: "11 ans",
    espece: "chat",
    sexe: "mâle",
    race: "chat de gouttière",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500"
  },
  {
    id: 2,
    name: "Luna",
    age: "3 ans",
    espece: "chat",
    sexe: "femelle",
    race: "angora",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500"
  },
  {
    id: 3,
    name: "Rex",
    age: "5 ans",
    espece: "chien",
    sexe: "mâle",
    race: "labrador",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500"
  },
  {
    id: 4,
    name: "Bella",
    age: "7 ans",
    espece: "chien",
    sexe: "femelle",
    race: "golden retriever",
    image: "https://images.unsplash.com/photo-1552530144-c79980718efe?w=500"
  },
  {
    id: 5,
    name: "Minou",
    age: "2 ans",
    espece: "chat",
    sexe: "mâle",
    race: "persan",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500"
  },
  {
    id: 6,
    name: "Noisette",
    age: "4 ans",
    espece: "lapin",
    sexe: "femelle",
    race: "lapin bélier",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30eba3?w=500"
  },
  {
    id: 7,
    name: "Coco",
    age: "6 ans",
    espece: "oiseau",
    sexe: "mâle",
    race: "perroquet amazone",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500"
  },
  {
    id: 8,
    name: "Patches",
    age: "8 ans",
    espece: "chien",
    sexe: "femelle",
    race: "berger allemand",
    image: "https://images.unsplash.com/photo-1591384382880-418a30d50462?w=500"
  },
  {
    id: 9,
    name: "Flocon",
    age: "1 an",
    espece: "lapin",
    sexe: "mâle",
    race: "angora",
    image: "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?w=500"
  },
  {
    id: 10,
    name: "Tweety",
    age: "9 ans",
    espece: "oiseau",
    sexe: "femelle",
    race: "canari",
    image: "https://images.unsplash.com/photo-1591384382880-418a30d50462?w=500"
  }
];
// Bouton tri
let btnSort  = document.getElementById("btn-sort");
// console.log(btnSort);
btnSort.addEventListener("click", function () {
  // Sens du tri
  let sortASC = false; // tri DESC par défaut
  // Trie les animaux par âge DESC
  let sortedTab = [...data].sort(function (a, b) {
     return sortASC ? a.age - b.age : b.age - a.age;
  });
  // Inverser le tri
  sortASC = !sortASC;

  // Modifier le texte du bouton
  btnSort.TextContent = sortASC ? "Trier par âge ↑" : "Trier par âge ↓";
// Affiche le tableau avec le nouveau tri
afficherAnimaux(sortedTab);
});
// Récupère la liste #list
const ulList = document.getElementById("list");
// Vide, réinitialise la liste
ulList.innerHTML = "";
/**
 * Affiche les animaux dans la page
 * @param {Array} animaux - Tableau d'objets animaux à afficher
 */
function afficherAnimaux(animaux) {

  // Récupère la liste #list
  const ulList = document.getElementById("list");
  // Variable temporaire pour construire la liste
  let html = "";
  // Vide la liste
  ulList.innerHTML = "";
// Parcours la liste et créer un li par animal
  animaux.forEach((animal) => {
    // 2. On crée une icône selon le sexe
    const sexeIcon = animal.sexe === "mâle" ? "♂" : "♀";

    // 3. On crée un élément <li> pour chaque animal
    const li = document.createElement("li");

    // 4. On injecte le HTML (note l'ajout de data-espece pour le CSS)
    li.innerHTML = `
    <article class="card" data-id="${animal.id}">
        <div class="card-image">
            <img src="${animal.image}" alt="${animal.name}">
            <span class="badge-espece">${animal.espece}</span>
        </div>
         <div class="card-body">
            <div class="card-header">
                <h2>${animal.name}</h2>
                <span class="sexe ${animal.sexe}">${sexeIcon}</span>
            </div>
            <p class="age">${animal.age}</p>
            <span class="race">${animal.race}</span>
            <button class="btn-adopt">Adopter ${animal.name}</button>
        </div>
    </article>
    `;
  });

  // ajoute la liste complète dans le DOM
  ulList.innerHTML = html;
}

// Appel au chargement de la page
afficherAnimaux(data);


