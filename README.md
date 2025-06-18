# Waldy - Application Next.js

Une application moderne construite avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Technologies utilisées

- **Next.js 15.3.4** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Framework CSS utilitaire
- **ESLint** - Linter pour JavaScript/TypeScript
- **Prettier** - Formatage automatique du code
- **Lucide React** - Icônes modernes
- **React 19** - Bibliothèque UI

## 📦 Installation

```bash
npm install
```

## 🛠️ Scripts disponibles

- `npm run dev` - Lance le serveur de développement (avec Turbopack)
- `npm run build` - Construit l'application pour la production
- `npm run start` - Lance l'application en mode production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run format` - Formate le code avec Prettier
- `npm run format:check` - Vérifie le formatage du code

## 🌐 Développement

Pour démarrer le serveur de développement :

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

## 📁 Structure du projet

```
src/
├── app/              # App Router de Next.js
│   ├── layout.tsx   # Layout principal
│   ├── page.tsx     # Page d'accueil
│   └── globals.css  # Styles globaux
└── lib/             # Utilitaires
    └── utils.ts     # Fonctions helper (cn, etc.)
```

## 🎨 Utilitaires inclus

- `cn()` - Fonction pour combiner les classes CSS (clsx + tailwind-merge)
- Configuration Prettier avec plugin Tailwind CSS
- Configuration ESLint optimisée pour Next.js

## 📝 Notes

Ce projet utilise l'App Router de Next.js et Tailwind CSS v4 pour une expérience de développement moderne et optimisée.
