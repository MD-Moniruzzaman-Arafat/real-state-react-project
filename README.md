# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# real-state-react-project

## Project Features

# real-state-react-project

## Overview

This project is a real estate application built with React and Vite, designed for fast development and a smooth user experience.

## Setup

To get started, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd real-state-react-project
npm install
```

## Scripts

You can run the following scripts:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run serve`: Serves the production build.

## Project Structure

The project is organized as follows:

# real-state-react-project

A responsive real-estate listing single-page application built with React and Vite. It demonstrates client-side routing, protected routes, Firebase authentication (email/password and Google sign-in), and a set of reusable UI components driven by sample JSON data.

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [Available scripts](#available-scripts)
- [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [Architecture and key components](#architecture-and-key-components)
- [Routing & auth flow](#routing--auth-flow)
- [Firebase setup](#firebase-setup)
- [Deployment](#deployment)
- [Contributing & next steps](#contributing--next-steps)
- [License & contact](#license--contact)

## Features

- React 19 + Vite for fast dev & optimized builds
- Client-side routing with data loaders and route-level code organization
- Protected routes using a `PrivateRoute` pattern
- Firebase Authentication (Email/Password and Google Sign-In)
- Auth context/provider + `useAuth` hook for global auth state
- Reusable components: `Banner`, `Card`, `FeaturedProperties`, `Navbar`, `Footer`, loader
- Sample data in `public/data.json` for Home/Details pages
- TailwindCSS + DaisyUI for utility-first styling

## Tech stack

- React 19
- Vite
- Firebase
- TailwindCSS (and DaisyUI)
- React Router (v7)
- Swiper

From `package.json`, notable dependencies:

- react, react-dom, firebase, react-router, tailwindcss, daisyui, swiper, react-icons

Dev dependencies include Vite and ESLint.

## Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

## Quick start

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/MD-Moniruzzaman-Arafat/real-state-react-project.git
cd real-state-react-project
npm install
# or: yarn install
```

2. Create a `.env` from the included `.env.example` and fill in your Firebase values (see next section):

```bash
cp .env.example .env
# edit .env and provide your Firebase configuration values
```

3. Start the dev server:

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Available scripts

Use the scripts defined in `package.json`:

- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

Example:

```bash
npm run dev
```

## Environment variables

This project uses Firebase web configuration. For security and portability you should store these values in environment variables instead of committing them directly.

See `.env.example` for required keys. If you prefer, you can also update `firebase/firebase.config.js` directly (not recommended for production).

## Project structure

High-level structure and purpose of important files/folders:

- `index.html` — HTML entry
- `src/main.jsx` — React entry: wraps the app with `AuthProvider` and `RouterProvider`
- `src/App.jsx` — application shell (Navbar, Footer, Outlet), renders loader while auth state initializes
- `src/router/router.jsx` — route definitions, loaders and protected route wiring
- `src/provider/AuthProvider.jsx` — Firebase auth provider (exposes auth methods + user via context)
- `src/context/index.js` — `AuthContext` definition
- `src/hooks/useAuth.js` — small hook that returns the auth context
- `src/components/` — UI components (Banner, Card, Navbar, Footer, Loader, Login, Register, etc.)
- `src/page/` — top-level pages (Home.jsx, Details.jsx)
- `public/data.json` — sample property data used by pages
- `firebase/firebase.config.js` — Firebase initialization (quick-start file)

## Architecture and key components

- AuthProvider: uses Firebase `onAuthStateChanged` to maintain `user` and `loading` state. Exposes methods: `createUser`, `loginUser`, `logoutUser`, `signInWithGoogle`.
- useAuth: convenience hook to access `AuthContext`.
- Router: routes are configured in `src/router/router.jsx`. Home uses `fetchData` loader and Details uses `detailsLoader`. Details route is wrapped with `PrivateRoute`.
- App shell: Renders a loader component while auth is initializing, then shows the navigation, page content (via `<Outlet />`) and footer.

## Routing & auth flow

- Public routes: Home, Login, Register
- Private routes: Details (wrapped by `PrivateRoute`) — user is redirected to login if not authenticated
- Data loading: loaders (e.g. `fetchData`, `detailsLoader`) fetch or read `public/data.json` for page content

## Firebase setup

1. Create a Firebase project at https://console.firebase.google.com/
2. In Authentication → Sign-in method, enable Email/Password and Google sign-in (if desired)
3. Add a Web app and copy the Firebase config values
4. Populate the `.env` file with the values (or paste them into `firebase/firebase.config.js` for development)

Example env keys are shown in `.env.example`.

Important: never commit production secrets. Use environment variables in your deployment platform.

## Deployment

The project builds to static assets with Vite. Common deployment steps:

```bash
npm run build
# Deploy the `dist/` folder to Netlify/Vercel or any static hosting
```

When deploying, set your environment variables in your host (Vercel/Netlify) to the Firebase values.

## Contributing & next steps

Suggested small improvements:

- Move Firebase config to environment variables and update initialization to read from `import.meta.env` (Vite) instead of hardcoded values in `firebase/firebase.config.js`.
- Add a `.gitignore` rule to exclude `.env` (if not already present).
- Add a GitHub Actions workflow to run `npm run lint` and `npm run build` on PRs.
- Add tests for utility functions and simple component snapshot tests.

If you'd like, I can open follow-up PRs to implement any of the above (for example: add CI or switch firebase config to env-driven values).

## License & contact

This repository currently has no license file. If you plan to make it public and accept contributions, add an appropriate license (for example MIT).

Maintainer: MD-Moniruzzaman-Arafat

---

If you'd like me to also add a CONTRIBUTING.md, CI workflow, or convert the firebase config to use Vite env variables, tell me which one to do next and I'll implement it.
