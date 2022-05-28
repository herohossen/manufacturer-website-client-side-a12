<!-- Project Start -->

# Project Name: [TataTools](https://tools-manufactuare.web.app/)

Live site Url: [https://tools-manufactuare.web.app/](https://tools-manufactuare.web.app/)

## Dependency Use

* React Router
* React Firebase Hooks
* React Bootstrap
* React Icons
* React Toastify
* React Helmet Async

* tailwind css

## React Router

### `Installation`

This is for use `Route` in the project. For the `Installation` run this commend in your project CMD.

```bash
npm install react-router-dom@6
```

### `DOC`

Once your project is set up and React Router is installed as a dependency, open the `src/index.js` in your text editor. Import `BrowserRouter` from `react-router-dom` near the top of your file and wrap your app in a `<BrowserRouter>`:

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

Now you can use React Router anywhere in your app! For a simple example, open `src/App.js` and replace the default markup with some routes:

```js
import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
```

## Firebase Authentication

To make a firebase authentication need to run this command at cmd.

```bash
npm install firebase
```

Then, initialize Firebase and begin using the SDKs for the products you’d like to use.
Add this in `firebase.init.js` file in the src folder.

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
```

To squire the app api, you need to make `.env.local` file and add the api key.

```dosini
REACT_APP_API_KEY=XXXXXXXXXXXXXXXX
REACT_APP_AUTH_DOMAIN=XXXXXXXXXXXXXXXX
REACT_APP_PROJECT_ID=XXXXXXXXXXXXXXXXXXXXXX
REACT_APP_STORAGE_BUCKET=XXXXXXXXXXXXXXXXXX
REACT_APP_MESSAGING_SENDER_ID=XXXXXXXXXXXXX
REACT_APP_APP_ID=XXXXXXXXXXXXXXXXXXXXXXX
```

## React Firebase Hooks. [npm](https://www.npmjs.com/package/react-firebase-hooks)

### `Installation`

This is for use `Firebase Authentication` in the project. This make Authentication more simpler For the `Installation` run this commend in your project CMD.

```bash
# with npm
npm install --save react-firebase-hooks

# with yarn
yarn add react-firebase-hooks
```

### `Documentation`

-[Authentication Hooks](https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth)

## React Bootstrap

**Note: I didn't use it for this project!**

### `Installation`

The best way to consume React-Bootstrap is via the `npm` package which you can install with npm (or `yarn` if you prefer).

```bash
npm install react-bootstrap bootstrap
```

### For `CSS`

```js
{
  /* The following line can be included in your src/index.js or App.js file*/
}

import 'bootstrap/dist/css/bootstrap.min.css';
```

## React Icons

### `Installation`

This is for use `icon` for the project. For the `Installation` run this commend in your project CMD.

```bash
npm install @react-icons/all-files --save
```

### `example usage`

```js
import { FaBeer } from '@react-icons/all-files/fa/FaBeer';
const ReactComponent = () => {
  return (
    <h3>
      {' '}
      Lets go for a <FaBeer />?{' '}
    </h3>
  );
};
```

## React Toastify

### `Installation`

This is for use `toast`for the project. For the `Installation` run this commend in your project CMD.

```bash
npm install --save react-toastify
```

### `Demo`

```js
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast('Wow so easy!');

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}
```

## React Helmet Async

### `Installation`

This is for use `helmet`for the project. For the `Installation` run this commend in your project CMD.

```bash
npm i react-helmet-async
```

### `Usage`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const app = (
  <HelmetProvider>
    <App>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>Hello World</h1>
    </App>
  </HelmetProvider>
);

ReactDOM.hydrate(
  app,
  document.getElementById(‘app’)
);
```

## Tailwind CSS

- [Official site & Docs](https://tailwindcss.com/)

### Create React App

Start by creating a new React project with Create React App if you don't have one already set up.

```bash
npx create-react-app my-project
cd my-project
```

### Install Tailwind CSS

Install `tailwindcss` and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Add the Tailwind directives to your CSS

Add the @tailwind directives for each of `Tailwind’s`layers to your `./src/index.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start your build process

Run your build process with `npm run start`.

```bash
 npm run start
```

### Start using Tailwind in your project

Start using Tailwind’s utility classes to style your content.

```js
export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
```

## daisyUI as a Tailwind CSS plugin

- [daisyUI](https://daisyui.com/)

You need Node.js and Tailwind CSS installed.

### Install daisyUI:

```bash
npm i daisyui
```

### Add script

Then add daisyUI to your `tailwind.config.js` files:

```js
module.exports = {
  //...
  plugins: [require('daisyui')],
};
```

- `use`

```js
<button className="btn w-64 rounded-full">Button</button>
```

### `How to add a new custom theme?`

You can add a new theme from `tailwind.config.js` file. In the below example, I added a new theme called `mytheme` and I'm also including `dark` and `cupcake` themes.

- The first theme (`mytheme`) will be the default theme.

* `dark` theme will be the default theme for dark mode.

In below example, I have the required colors. All other colors will be generated automatically (Like the color of button when you focus on it or the color of text on a `primary` button).

Inside `tailwind.config.js`

```js
module.exports = {
  //...
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#a991f7',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffffff',
          error: '#F87272',
        },
      },
      'dark',
      'cupcake',
    ],
  },
};
```

### daisyUI Theme Generator

You can add your custom themes to `tailwind.config.js` file in `daisyui > themes` array. On this page, you can pick the required color values and see what the components will look like with them.

- Inside `tailwind.config.js`

```js
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#570DF8',

          secondary: '#F000B8',

          accent: '#37CDBE',

          neutral: '#3D4451',

          'base-100': '#FFFFFF',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
  //...
};
```

<!-- Project End -->

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More About Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
