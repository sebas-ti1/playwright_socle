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

npx playwright codegen                              # Générer du code avec CODEGEN
                --output=tests/onepoint.spec.ts     # Enregistrer dans le fichier onepoint.spec.ts
                https://www.groupeonepoint.com/fr/  # Ouvre cette url

npx playwright test --ui                            # Ouvrir le mode UI

npx playwright test --ui                            # Ouvrir le rapport d'exécution

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
└── package.json                # L'ensemble necessaire à l'installation, 
                                # et les scripts de lancement des tests.
```

### Localhost
Le fichier index.html à la racine est lancé avec la dépendance 'http-server'.

Dans 'playwright.config.ts', vous pouvez modifier la configuration à ce niveau :
```
  webServer:{
    command: 'npx http-server -p 5000 ./',
    url: 'http://localhost:5000/',
    reuseExistingServer: true,
    timeout:2_000
  },
```

Ensuite dans le fichier 'index.html', vous changez le style du bouton pour tester le système de snapshot :
```
    <style>
        button{
            border: none;
            color: white;
            background-color: blue;
            padding: 15px;
        }
    </style>
```

Enfin vous pouvez mettre à jour les snapshots avec cette commande :
```
npx playwright test --update-snapshots
```