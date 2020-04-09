![GitHub package.json version](https://img.shields.io/github/package-json/v/PyxyApp/Api)
![GitHub repo size](https://img.shields.io/github/repo-size/PyxyApp/APi)
[![Maintainability](https://api.codeclimate.com/v1/badges/d201330b78c14abf854e/maintainability)](https://codeclimate.com/github/PyxyApp/Api/maintainability)

# API - Pyxy App

## Api link 

- Dev : https://us-central1-pyxy-f84e8.cloudfunctions.net/api/
- Prod : https://api.pyxy.space/

## Documentation de l'API

Vous pouvez retrouver la documentation de l'API à l'adresse suivante : https://app.swaggerhub.com/apis-docs/Neerfix/Pyxy-Api/

La documentation vous indiquera les routes utilisables pour les données. Les paramètres à indiqué ainsi que les types de données

Toute fois, pour éxécuter les requêtes via Postman ou logiciel tierce, vous devrez utiliser ce token: 
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJQeXh5IiwiYXVkIjoiUHl4eSBPZmZpY2UgLyBBUEkiLCJlbWFpbCI6ImRlbW9AcHl4eS5zcGFjZSIsIkFkbWluQ29udHJvbFBhbmVsIjp0cnVlLCJpYXQiOjE1ODY0NzA4ODR9.uQEra1HmkusMCElwabjrmFzp_H09Pens50u0YM4yFGQ
```

## Commande utiles

```
npm run deploy-dev
```
Permet de push l'api sur Google CLoud Functions (disponible via le lien de dev de l'api.)

```
npm run deploy
```
Permet de se positionner dans le dossier `functions` et d'éxecuter la commande `npm run serve` qui a pour fonction de lancer l'api en local (ou sur un serveur distant).
L'API sera donc lancer sur le port 5000 à l'adresse :
http://localhost:5000
qui renverra le status de l'API. 
Pour executer des requêtes via l'api, il faudra se rendre à l'adresse suivante : http://localhost:5000/pyxy-f84e8/us-central1/api/

## Architecture de l'API
    
    📦 Pyxy - API
    .
    ┣ 📂functions
    ┃ ┣--> Dossier qui contient la Google Cloud Function "API" pour firebase.
    ┃ ┣ 📂functions
    ┃ ┃ ┣--> Dossier qui contient les fonctions "CRUD". Appeler dans le fichier routes>routes.js
    ┃ ┃ ┣ 📂Create
    ┃ ┃ ┃ ┣ 📜createActivity.js
    ┃ ┃ ┃ ┃ ┗--> Create Function Activity (CFA -> Function pour créer une activité.
    ┃ ┃ ┃ ┃ 
    ┃ ┃ ┃ ┣ 📜createCategory.js
    ┃ ┃ ┃ ┃ ┗--> Create Function Category (CFC -> Function pour créer une catégorie.
    ┃ ┃ ┃ ┃ 
    ┃ ┃ ┃ ┣ 📜createList.js
    ┃ ┃ ┃ ┃ ┗--> Create Function List (CFL -> Function pour créer une liste.
    ┃ ┃ ┃ ┃ 
    ┃ ┃ ┃ ┣ 📜createTask.js
    ┃ ┃ ┃ ┃ ┗--> Create Function Task (CFT -> Function pour créer une Tâche.
    ┃ ┃ ┃ ┃ 
    ┃ ┃ ┃ ┗ 📜createUser.js
    ┃ ┃ ┃ ┃ ┗--> Create Function User (CFU -> Function pour créer un utilisateur.
    ┃ ┃ ┃ ┃ 
    ┃ ┃ ┣ 📂Update
    ┃ ┃ ┃ ┣ 📜updateActivity.js
    ┃ ┃ ┃ ┃ ┗--> Update Function Activity (UFA -> Function pour mettre à jour un activité.
    ┃ ┃ ┃ ┃ 
    ┃ ┃ ┃ ┣ 📜updateCateogry.js
    ┃ ┃ ┃ ┃ ┗--> Update Function Category (UFC -> Function pour mettre à jour un catégorie.
    ┃ ┃ ┃ ┃ 
    ┃ ┃ ┃ ┣ 📜updateList.js
    ┃ ┃ ┃ ┃ ┗--> Update Function List (UFL -> Function pour mettre à jour un liste.
    ┃ ┃ ┃ ┃ 
    ┃ ┃ ┃ ┣ 📜updateTask.js
    ┃ ┃ ┃ ┃ ┗--> Update Function Task (UFT -> Function pour mettre à jour un Tâche.
    ┃ ┃ ┃ ┃ 
    ┃ ┃ ┃ ┗ 📜updateUser.js
    ┃ ┃ ┃ ┃ ┗--> Update Function User (UFU -> Function pour mettre à jour un utilisateur.
    ┃ ┃ ┃ ┃ 
    ┃ ┃ ┣ 📜Create.js
    ┃ ┃ ┃ ┗--> Modules createData -> Contient un switch pour gérer les différents type de données et appel la bonne function.
    ┃ ┃ ┃ 
    ┃ ┃ ┣ 📜Delete.js
    ┃ ┃ ┃ ┗--> Modules deleteData -> Contient un switch pour gérer les différents type de données et appel la bonne function.
    ┃ ┃ ┃ 
    ┃ ┃ ┣ 📜Read.js
    ┃ ┃ ┃ ┗--> Modules readData -> Fonction qui permet d'afficher la liste des données sélectionner et ReadOneData -> Affiche une donnée précise sélectionner par l'ID.
    ┃ ┃ ┃ 
    ┃ ┃ ┣ 📜Token.js
    ┃ ┃ ┃ ┗--> Modules deleteData -> Contient un switch pour gérer les différents type de données et appel la bonne function.
    ┃ ┃ ┃ 
    ┃ ┃ ┣ 📜Update.js
    ┃ ┃ ┃ ┗--> Modules updateData -> Contient un switch pour gérer les différents type de données et appel la bonne function.
    ┃ ┃ ┃ 
    ┃ ┃ ┗ 📜appFunctions.js
    ┃ ┃   ┗--> Modules Func -> Fonction qui intègre CheckAuth pour vérifier le Token et appelle le bon mudule CRUD correspondant.
    ┃ ┃   
    ┣ 📂middlewares
    ┃ ┗ 📜CheckAuth.js
    ┃   ┗--> Middleware pour vérifier le token passé dans le header de la requête sur l'API.
    ┃   
    ┣ 📂routes
    ┃ ┗ 📜routes.js
    ┃   ┗--> Contient les routes de l'API.
    ┃   
    ┣ 📜.gitignore
    ┣ 📜favicon.ico
    ┣ 📜index.js
    ┃  ┗--> Serveur NodeJs pour l'API.
    ┣ 📜package-lock.json
    ┣ 📜package.json
    ┣ 📜privateKey.json
    ┗ 📜serviceAccountKey.json
    ┣ 📂public
    ┃ ┃ ┗--> Contient tout le contenu du site Vitrine du projet. (Repo Vitrine) - Obligatoire de l'avoir dans le dossier de l'API firebase, sinon il y a une erreur lors du deploy sur firebase.
    ┃ ┃ 
    ┣ 📜.DS_Store
    ┣ 📜.babelrc
    ┣ 📜.firebaserc
    ┃ ┗--> Stock les alias du projet (fichier utiles pour les commandes firebase-tools)
    ┃ 
    ┣ 📜.gitignore
    ┣ 📜README.md
    ┣ 📜database.rules.json
    ┃ ┗--> Les règles pour définir qui a accès à quelles données et protéger les informations personnelles des utilisateurs contre tout accès non autorisé. (Database Realtime)
    ┃ 
    ┣ 📜firebase.json
    ┃ ┗--> Contient les paramètres de base de Firebase.
    ┃ 
    ┣ 📜firestore.rules
    ┃ ┗--> Règles pour définir les accès à l'API. 
    ┃ 
    ┣ 📜package-lock.json
    ┣ 📜package.json
    ┗ 📜storage.rules
    