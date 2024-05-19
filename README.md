# Learning_react
This is the repository consisting of working with React.
and my self React notes.

React is a library it consists of :
- react-dom - for web workings
- react-native - for mobile workings


 * METHOD 1
# npx create-react-app
- basic method of creating React app.
- It's a slower method however.

 
Ackronyms :
- npm: node package manager
- npx: node package executor
- create-react-app :utility

# package.json
- entry point of react project
- has name of project, version, dependencies, scripts ( run the project, start, build, test) & browserlist.

- to run the project - start script
npm start <--or-->
# npm run start

[Note: react has SEO problem ]

- npm run build
- js, this folder is the actually served in production




* METHOD 2
# Vite- react bundler
through this we make react app

- Unlike in create-react app there are no node modules initially.
So we have to :
# npm i
or npm install

# npm run dev


- index.html :  
Main Single page of application 

- index.js or main.js :
entry pt of react


* package .json
  vitereact app doesn't contain the react scripts unlike create-react app.

- in ViteReact app : .jsx is used instead of .js like in create-react-app

* Best Pracitces :
- capatilized names of Components
- Few libraries force you to have .jsx in components


# React Hooks:
React controls updation of variables to be seen in UI

# Virtual DOM and React Fiber
Virtual DOM is replica of actual DOM
Stops instantenous reloading/re-rendering of page for minor changes in a page, since not every update has to be applied immediately.
Eg: Updates like animation have different priorities than textual changes


### Configuring Tailwind

- `npm install -D tailwindcss postcss autoprefixer` :
_-D refers to dev Dependencies_

- npx tailwind init -p:
forms _tailwind.config.js_ file

## Had error of not loading tailwind css initially 
- in tailwind.config.js :
```content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
```
-_this line solved my error_

- Also

```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```