# Animaux à adopter

Projet JavaScript — Cours 122 (ESIG)

## Description

Ce projet est une application de gestion pour un refuge animalier. 
Il permet de visualiser une liste d'animaux disponibles à l'adoption 
(chats, chiens, lapins, oiseaux), de filtrer les résultats par nom et de les trier par âge. 
L'utilisateur peut également enrichir la base de données via un formulaire d'ajout dynamique 
ou retirer un animal de la liste. J'ai choisi cette ressource car elle permet de manipuler des 
types de données variés (chaînes, nombres, images) et d'appliquer des concepts de filtrage.

## Lien GitHub Pages

[Colle ici le lien de ton site en ligne]

## Fonctionnalités

- [ ] Affichage dynamique de la liste
- [ ] Tri par plusieurs critères
- [ ] Recherche en temps réel
- [ ] Ajout via formulaire
- [ ] Suppression d'éléments
- [ ] Responsive (mobile + desktop)

## Captures d'écran

[Ajoute des captures de ton projet ici]

## Transparence IA

### Outils utilisés
- GitHub Copilot (dans WebStorm) pour la génération des données et l'autocomplétion
- Gemini : Pour comprendre les concepts de tri et de filtrage en JavaScript

### Prompts utilisés
- "Génère un tableau de 10 animaux avec id, nom, âge, espèce, sexe, race, image"
- "Aide-moi à créer une fonction refresh() en JavaScript qui combine à la fois 
un filtre .filter() pour la recherche et un .sort() pour l'âge."

### Ce que j'ai appris vs ce que l'IA a généré
En utilisant l'IA pour ce projet, j'ai appris à centraliser les données du tableau data
pour que l'affichage se mette à jour automatiquement, et j'ai maîtrisé le chaînage de fonctions 
(filter().sort()) pour traiter des informations complexes en quelques lignes de code. J'ai aussi 
appris à déléguer les événements pour manipuler des éléments créés dynamiquement dans le DOM.
---

<details>
<summary>📋 Exemple — Projet "Jeux Vidéo"</summary>

> Cet exemple montre à quoi pourrait ressembler un README complété.
> **Supprime cet encart** quand tu remplis ton propre README.

## Description

Application web pour gérer ma collection de jeux vidéo. J'ai choisi cette
ressource car je suis passionné de gaming et je voulais un catalogue personnel
pour trier mes jeux par note et plateforme.

## Lien GitHub Pages

https://mon-pseudo.github.io/esig-122-jeux-video/

## Fonctionnalités

- [x] Affichage dynamique de la liste (cartes avec image, nom, catégorie, note)
- [x] Tri par nom, note et année
- [x] Recherche en temps réel par nom
- [x] Ajout d'un jeu via formulaire
- [x] Suppression avec confirmation
- [x] Responsive (mobile + desktop)

## Captures d'écran


## Transparence IA

### Outils utilisés
- GitHub Copilot (dans WebStorm) pour la génération des données et l'autocomplétion
- ChatGPT pour comprendre `Array.sort()` avec `localeCompare()`

### Prompts utilisés
- "Génère un tableau de 10 jeux vidéo avec id, name, category, platform, rating, year, image"
- "Explique-moi comment trier un tableau d'objets par une propriété texte en JavaScript"

### Ce que j'ai appris vs ce que l'IA a généré
- **Généré par l'IA** : le tableau de données initial (10 objets)
- **Écrit par moi** : toute la logique d'affichage, tri, recherche, ajout et suppression
- **Appris grâce à l'IA** : j'ai compris comment `localeCompare()` gère les accents en français

</details>
