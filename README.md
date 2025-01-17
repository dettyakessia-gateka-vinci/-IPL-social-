Nom et Prénom:Gateka Detty-Akessia
Email vinci:dettyakessia.gateka@student.vinci.be
URL:https://github.com/dettyakessia-gateka-vinci/-IPL-social


## Description

Ce projet consiste en la création d'un environnement DevOps configuré avec GitHub Actions pour un pipeline d'intégration continue (CI). Il inclut une fonction JavaScript de validation de mot de passe avec des tests unitaires utilisant le Test Driven Development (TDD). 

### Fonctionnalités principales

- **GitHub Actions** : Pipeline CI configuré pour s'exécuter lors de toute demande de pull request (PR) vers la branche principale `main`.
- **Validation de mot de passe** : Fonction située dans `passwordChecker.js`, qui s'assure qu'un mot de passe est valide selon les critères suivants :
  - Au moins 8 caractères
  - Au moins un caractère spécial
  - Au moins un chiffre
  - Ne contient pas la chaîne "IPL" (insensible à la casse)
- **Tests unitaires** : Tests associés dans le fichier `passwordChecker.test.js`, exécutés automatiquement par le pipeline CI.

---

## Commande pour exécuter les tests

npm run test


## Comment démarrer

1. Clonez le dépôt GitHub :
  
   git clone https://github.com/votre-projet-ipl-social.git

2. Accédez au dossier du projet :
  
   cd votre-projet-ipl-social
 

3. Installez les dépendances nécessaires :
 
   npm install
  

4. Lancez les tests pour vérifier la validité du code :

   npm test
