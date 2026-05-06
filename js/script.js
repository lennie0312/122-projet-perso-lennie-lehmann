"use strict";

// Tableau de données — à générer avec Copilot / une IA
const data = [
  {
    id: 1,
    name: "Kiméo",
    age: "11",
    espece: "chat",
    sexe: "mâle",
    race: "chat de gouttière",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500"
  },
  {
    id: 2,
    name: "Luna",
    age: "3",
    espece: "chat",
    sexe: "femelle",
    race: "angora",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500"
  },
  {
    id: 3,
    name: "Rex",
    age: "5",
    espece: "chien",
    sexe: "mâle",
    race: "labrador",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500"
  },
  {
    id: 4,
    name: "Bella",
    age: "7",
    espece: "chien",
    sexe: "femelle",
    race: "golden retriever",
    image: "https://images.unsplash.com/photo-1552530144-c79980718efe?w=500"
  },
  {
    id: 5,
    name: "Minou",
    age: "2",
    espece: "chat",
    sexe: "mâle",
    race: "persan",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500"
  },
  {
    id: 6,
    name: "Noisette",
    age: "4",
    espece: "lapin",
    sexe: "femelle",
    race: "lapin bélier",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30eba3?w=500"
  },
  {
    id: 7,
    name: "Coco",
    age: "6",
    espece: "oiseau",
    sexe: "mâle",
    race: "perroquet amazone",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500"
  },
  {
    id: 8,
    name: "Patches",
    age: "8",
    espece: "chien",
    sexe: "femelle",
    race: "berger allemand",
    image: "https://images.unsplash.com/photo-1591384382880-418a30d50462?w=500"
  },
  {
    id: 9,
    name: "Flocon",
    age: "2",
    espece: "lapin",
    sexe: "mâle",
    race: "angora",
    image: "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?w=500"
  },
  {
    id: 10,
    name: "Tweety",
    age: "9",
    espece: "oiseau",
    sexe: "femelle",
    race: "canari",
    image: "https://images.unsplash.com/photo-1591384382880-418a30d50462?w=500"
  }
];
// Sélection des éléments
const btnSort = document.getElementById("btn-sort");
const searchInput = document.getElementById("search");
const ulList = document.getElementById("list");

// État global : tri par défaut DESC (false)
let sortAsc = false;

/**
 * 1. FONCTION D'AFFICHAGE (Optimisée : une seule écriture DOM)
 */
function afficherAnimaux(animaux) {
  let html = "";
  animaux.forEach((animal) => {
    const sexeIcon = animal.sexe === "mâle" ? "♂" : "♀";
    html += `
      <li>
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
                <p class="age">${animal.age} ans</p>
                <span class="race">${animal.race}</span>
                <button class="btn-adopt">Adopter ${animal.name}</button>
            </div>
        </article>
      </li>
    `;
  });
  ulList.innerHTML = html;
}

/**
 * 4. FONCTION REFRESH (Chaînage Recherche + Tri)
 */
function refresh() {
  const query = searchInput.value.toLowerCase();

  // Étape A : Filtrer
  let result = data.filter(animal =>
      animal.name.toLowerCase().includes(query)
  );

  // Étape B : Trier le résultat filtré
  result.sort((a, b) => {
    return sortAsc ? a.age - b.age : b.age - a.age;
  });

  // Étape C : Afficher
  afficherAnimaux(result);
}

/**
 * 2 & 3. ÉCOUTEURS D'ÉVÉNEMENTS
 */

// Recherche : à chaque frappe, on rafraîchit
searchInput.addEventListener("input", refresh);

// Tri : on inverse l'état, change le texte et rafraîchit
btnSort.addEventListener("click", () => {
  sortAsc = !sortAsc;
  btnSort.textContent = sortAsc ? "Trier par âge ↑" : "Trier par âge ↓";
  refresh();
});

// Appel initial pour afficher les données au chargement
refresh();


