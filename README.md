# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# real-state-react-project

## Project Features

- Built with React and Vite for fast development and HMR
- Client-side routing with a modular `router` and protected `PrivateRoute`
- Firebase integration for authentication (login & register) via `firebase/firebase.config.js`
- Auth context and provider (`provider/AuthProvider.jsx`, `context/index.js`, `hooks/useAuth.js`)
- Reusable UI components: `Banner`, `Card`, `FeaturedProperties`, `Navbar`, `Footer`, and loader
- Pages for Home and Details with sample data (`public/data.json`)
- Responsive layout and CSS modules: global styles in `index.css` and component styles
- Utility helpers in `utility/index.js` for shared logic
- Simple JSON-based sample data and mock property listings
- Minimal, easy-to-extend project structure ready for deployment
