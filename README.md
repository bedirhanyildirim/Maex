
# Maex

This is the repository of [Maex](https://maex-3a4f2.web.app/) which is dating app projects.

Following technologies are used in this project:

- [React.js](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)

## Getting Started

### Project setup

First install the npm packages:
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Deploy on Firebase

First build the project:
```bash
npm run build
```

### Local Test

```bash
firebase emulators:start
```

### Deploy
```bash
firebase deploy --only hosting -m "Deploy message"
```
