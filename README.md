# Playwright/TS

En apprendre plus :
- [Playwright documentations](https://playwright.dev/docs/intro)

## Usage

Ce repo a pour objectif de vous montrer le fonctionnement des outils Playwright.
Vous aurez la possibilité de voir les fonctionnalités comme le Debug, le Codegen, le mode UI et les comparaisons des snpashots dans les rapports grâce à un serveur local configuré sur le port 5000.

### Installation

Avant de lancer le projet, vous devez avoir sur votre ordinateur : 
- Node.js, sur la version 16 ou plus - [download](https://nodejs.org/fr/)

Clonez le projet sur votre ordinateur. 
Ouvrez le terminal de votre ordinateur lancer la commande suivante ou vous avez cloné le projet :
```
npm ci
```

### Execution

Une liste de commande pour exécuter les tests :


```
npx playwright test                                 # Lancer tous les tests

npx playwright test tests/example.spec.ts --debug   # Ouvrir le mode debug sur le fichier example.soec.ts

npx playwright codegen --output=tests/onepoint.spec.ts https://www.groupeonepoint.com/fr/ # Générer du code avec CODEGEN sur l'url définie et enregistrer dans le fichier onepoint.spec.ts

npx playwright test --ui                            # Ouvrir le mode UI

```
Ces commandes sont définies dans le fichier package.json, partie Script.

### Structure du framework
```
├── /playwright-report          # Le rapport HTML
│   ├── /data                   # Informations pour alimenter le rapport
│   ├── /trace                  # Mise en page pour les fichiers traces
│   └── index.html              # L'index du rapport HTML
│
├── /test-resultats             # Regroupement des documents pour faire le rapport
│   ├── /execution #1           # Fichier lié à l'exécution n°1
│   │   ├── image.png           # Screenshot de l'exécution
│   │   ├── trace.zip           # trace lié à l'exécution
│   │   ├── video.webm          # video de l'exécution
│   │   └── ...                 # Autres fichiers
│   └── ...                     # Autres exécutions
│
├── /tests                      # Tous les fichiers de tests
│   ├── /test.spec.ts-snapshots # Dosier contenant les .png pour les comparaisons
│   ├── test.spec.ts            # Fichier de test
│   └── ...                     # Autres fichiers de test
│
├── index.html                  # Fichier HTML utilisé pour faire les tests en localhost:5000
│
├── playwright.config.ts        # Configuration principale de Playwright
└── package.json                # L'ensemble necessaire à l'installation, et les scripts de lancement des tests
```
