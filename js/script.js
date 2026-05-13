"use strict";

// Tableau de données — à générer avec Copilot / une IA
let data = [
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


// Éléments du formulaire
const form = document.getElementById("form-add");
const inputName = document.getElementById("input-name");
const inputEspece = document.getElementById("input-espece");
const inputAge = document.getElementById("input-age");
const inputSexe = document.getElementById("input-sexe");
const inputRace = document.getElementById("input-race");
const inputImage = document.getElementById("input-image");
// État global du tri
let sortAsc = false;

/**
 * FONCTION D'AFFICHAGE
 */
function afficherAnimaux(animaux) {
  // 1. Mise à jour du compteur
  const countElement = document.getElementById("count");
  if (countElement) countElement.textContent = animaux.length;

  // 2. Gestion du cas "aucun résultat" (Guard Clause)
  if (animaux.length === 0) {
    ulList.innerHTML = `<p class="no-result">Désolé, aucun animal ne correspond
                                             à votre recherche. 🐾</p>`;
    return;
  }

  // 3. Génération du HTML
  let html = "";
  animaux.forEach((animal) => {
    // Préparation des petites variables pour le template
    const sexeIcon = animal.sexe === "mâle" ? "♂" : "♀";

    // Construction de la carte avec les data-attributes pour le CSS
    html += `
      <li>
        <article class="card" data-id="${animal.id}" data-espece="${animal.espece}">
            <div class="card-image">
                <img src="${animal.image}" alt="${animal.name}">
                <span class="badge-espece">${animal.espece}</span>
            </div>
             <div class="card-body">
                <div class="card-header">
                    <h2>${animal.name}</h2>
                    <span class="sexe ${animal.sexe || "mâle"}">${sexeIcon}</span>
                </div>
                <p class="age">${animal.age} ans</p>
                <span class="race">${animal.race || "Non précisée"}</span>
                <div class="card-footer">
                    <button class="btn-adopt">Adopter</button>
                    <button class="btn-delete">Supprimer</button>
                </div>
            </div>
        </article>
      </li>
    `;
  });

  // 4. Injection finale dans le DOM
  ulList.innerHTML = html;
}

/**
 * FONCTION REFRESH (Filtre + Tri)
 */
function refresh() {
  const query = searchInput.value.toLowerCase();

  let result = data.filter(animal =>
      animal.name.toLowerCase().includes(query)
  );

  result.sort((a, b) => {
    return sortAsc ? a.age - b.age : b.age - a.age;
  });

  afficherAnimaux(result);
}

/**
 * GESTIONNAIRES D'ÉVÉNEMENTS
 */

// 1. Recherche
searchInput.addEventListener("input", refresh);

// 2. Bouton de Tri
btnSort.addEventListener("click", () => {
  sortAsc = !sortAsc;
  btnSort.textContent = sortAsc ? "Trier par âge ↑" : "Trier par âge ↓";
  refresh();
});

// 3. Formulaire d'ajout
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // On récupère les valeurs
  const nameValue = inputName.value.trim();
  const ageValue = Number(inputAge.value);

  // --- LES VÉRIFICATIONS ---

  // Vérification du nom
  if (nameValue === "") {
    alert("Le nom est obligatoire !");
    inputName.focus();
    return; // On arrête tout ici si le nom est vide
  }

  // Vérification de l'âge (entre 0 et 30 ans par exemple)
  if (isNaN(ageValue) || ageValue < 0 || ageValue > 30) {
    alert("Veuillez entrer un âge réaliste entre 0 et 30.");
    inputAge.focus();
    return; // On arrête tout ici si l'âge est incorrect
  }

  // --- CRÉATION DE L'OBJET (Si tout est OK) ---
  const newItem = {
    id: Date.now(),
    name: nameValue,
    espece: inputEspece.value,
    age: ageValue,
    sexe: inputSexe.value,
    race: inputRace.value.trim() || "Inconnue",
    image: inputImage.value.trim() || "https://via.placeholder.com/500x350?text=Nouvel+Animal"
  };

  data.push(newItem);
  refresh();
  form.reset();
});

// 4. Suppression par délégation d'événements
ulList.addEventListener("click", (event) => {
  const btn = event.target.closest(".btn-delete");
  if (!btn) return;

  const card = btn.closest(".card");
  const id = Number(card.dataset.id);

  if (confirm("Voulez-vous vraiment supprimer cet animal ?")) {
    data = data.filter(animal => animal.id !== id);
    refresh();
  }
});

// Premier affichage
refresh();

