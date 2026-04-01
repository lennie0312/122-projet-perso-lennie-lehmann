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
    image: "https://placehold.co/400x300/4a90d9/white?text=Kiméo"
  },
  {
    id: 2,
    name: "Luna",
    age: "3",
    espece: "chat",
    sexe: "femelle",
    race: "angora",
    image: "https://placehold.co/400x300/4a90d9/white?text=Luna"
  },
  {
    id: 3,
    name: "Rex",
    age: "5",
    espece: "chien",
    sexe: "mâle",
    race: "labrador",
    image: "https://placehold.co/400x300/ff6b6b/white?text=Rex"
  },
  {
    id: 4,
    name: "Bella",
    age: "7",
    espece: "chien",
    sexe: "femelle",
    race: "golden retriever",
    image: "https://placehold.co/400x300/ff6b6b/white?text=Bella"
  },
  {
    id: 5,
    name: "Minou",
    age: "2",
    espece: "chat",
    sexe: "mâle",
    race: "persan",
    image: "https://placehold.co/400x300/4a90d9/white?text=Minou"
  },
  {
    id: 6,
    name: "Noisette",
    age: "4",
    espece: "lapin",
    sexe: "femelle",
    race: "lapin bélier",
    image: "https://placehold.co/400x300/ffb366/white?text=Noisette"
  },
  {
    id: 7,
    name: "Coco",
    age: "6",
    espece: "oiseau",
    sexe: "mâle",
    race: "perroquet amazone",
    image: "https://placehold.co/400x300/66bb6a/white?text=Coco"
  },
  {
    id: 8,
    name: "Patches",
    age: "8",
    espece: "chien",
    sexe: "femelle",
    race: "berger allemand",
    image: "https://placehold.co/400x300/ff6b6b/white?text=Patches"
  },
  {
    id: 9,
    name: "Flocon",
    age: "1",
    espece: "lapin",
    sexe: "mâle",
    race: "angora",
    image: "https://placehold.co/400x300/ffb366/white?text=Flocon"
  },
  {
    id: 10,
    name: "Tweety",
    age: "9",
    espece: "oiseau",
    sexe: "femelle",
    race: "canari",
    image: "https://placehold.co/400x300/66bb6a/white?text=Tweety"
  }
];
// Récupère la liste #list
const ulList = document.getElementById("List");

// Parcours la liste et créer un li par animal
data.forEach((animal => {
    ulList.innerHTML += `
<li>
<div>${animal.name}</div>
<div><img src="${animal.image}" alt="${animal.name}"></div>
</li>`;
}));