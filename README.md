# Learning_react
This is the repository consisting of working with React.
and my self React notes.

React is a popular JavaScript library for building user interfaces, primarily for web and mobile applications. React is composed of several libraries that serve specific purposes:

- `react-dom` - Handles rendering for web applications.
- `react-native` - Handles rendering for mobile applications.


## Getting Started with react
### METHOD 1 : Using Create React App
 ```bash
npx create-react-app
```
- **Create React App** is a basic method for initializing a new React application.
- It's a slower method however as it installs several initial dependencies, including **node_modules**
 
**Ackronyms :**
- npm: node package manager -manages packages and dependencies.
- npx: node package executor – runs packages directly without installing globally.
- create-react-app : Utility to set up a React project with no build configuration.

####  Running the React Project

To start the React development server run the project 
```
npm start
# or
npm run start
```
#### Building for Production

```
npm run build
```
- This command creates an optimized folder (often called build), containing the final JavaScript and assets ready to be deployed.

_[Note: React applications may have SEO issues because they rely on client-side rendering, which can be problematic for search engine crawlers]_


### METHOD 2 : Using Vite
- Vite is a modern and faster alternative to Create React App for setting up and bundling React projects.

- To create a new project
```
npm create vite@latest my-vite-app --template react

```
#### Why Vite?
- **Faster setup:** Vite doesn't generate node_modules immediately, making the initial setup faster.
- **Modern builds:** It uses ES modules and provides faster hot-reloading during development.

- Since there are no node modules initially.
So we have to install dependencies :
```
npm i
# or 
npm install
```

To start the development server
```
npm run dev
```
#### Key Files in Vite Projects

- **index.html:** The main HTML file for the application.
- **index.js or main.js:** Entry point for React (this is where React renders the root component).
-**package.json:** Similar to Create React App, but with different scripts, and no React-specific commands like start or build.

- _Also in ViteReact app : .jsx is used instead of .js like in create-react-app_

* Best Pracitces :
- capatilized names of Components
- Few libraries force you to have .jsx in components


#
## Best Practices for React Development

- **Component Naming**: Always use capitalized names for components (e.g., `MyComponent`). This follows React’s convention, as components must start with an uppercase letter to be treated as custom components.

- **File Extensions**: For React components, use `.jsx` instead of `.js`, especially when working with Vite or other tools that differentiate between JavaScript and JSX files.

- **Project Structure**: Organize files by **feature** rather than by type (e.g., keep related components, styles, and tests together). This improves maintainability as the project grows.

- **Keep Components Small**: Break down large components into smaller, reusable components. This makes the code easier to read, manage, and test.

---

### Additional Considerations:

- **SEO**: React's client-side rendering can negatively impact SEO since content is rendered in the browser. To improve SEO, consider using server-side rendering (SSR) frameworks like **Next.js**.

- **State Management**: As your application grows, managing state becomes complex. Use state management libraries like **Redux** or **Context API** to handle global state more efficiently.

- **Routing**: React supports client-side routing via libraries like **react-router-dom**, allowing you to manage multiple views or pages in a single-page application.

- **Testing**: Learn how to test React components using tools like **Jest** and **React Testing Library**. This ensures that your application behaves as expected and prevents bugs.


## Configuring Tailwind CSS

To set up Tailwind CSS in your project, follow these steps:

1. **Install Tailwind and Required Dependencies**:
   Use the following command to install Tailwind CSS, PostCSS, and Autoprefixer as development dependencies:

   ```
   npm install -D tailwindcss postcss autoprefixer
   ```
   - The -D flag ensures these packages are installed as development dependencies.
2. **Initialize Tailwind Configuration**
    Run the command below to generate a `tailwind.config.js` file and a PostCSS configuration:
    ```
    npx tailwind init -p
    ```
    This creates a Tailwind configuration file (tailwind.config.js) to  customize Tailwind settings.

### Had error of not loading tailwind css initially 
- in tailwind.config.js :
```
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
```

- Also in Styles

```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```


## React Props
- Props (short for properties) are **arguments** passed into React components. 
- Every parent component can pass information to its child components by giving them props, which are accessed within the child component using curly braces `{}`.

---

## React Components

- Components are **reusable portions of code** that represent a part of a user interface. 
- They are used to render, manage, and update UI elements.
- A typical component is defined as:

  ```javascript
  export default function ComponentName() {}
  ```
  - Here, default indicates that this is the main function of the component.


## Virtual DOM and React Fiber
 - The Virtual DOM is a lightweight replica of the actual DOM.
 - It helps prevent instant reloading or re-rendering of the page for minor changes, as not every update has to be applied immediately.
 - For example, updates like animations can have different priorities compared to textual changes, optimizing performance and user experience.


## React Hooks
 - Hooks are special functions in React that allow you to use state and other React features in functional components. 
 - They enable functional components to manage state and side effects without the need for class components. 

  - useState
  - useCallback
  - useRef
  - useEffect

# React App Structure
```
my-app/
  ├── node_modules/     (Contains downloaded dependencies)
  |
  ├── public/           (Contains publicly accessible files)
  |   |
  │   ├── favicon.ico   (Website icon)
  │   ├── index.html    (Main HTML file of the application)
  │   ├── manifest.json (Optional configuration for web apps)
  │   └── robots.txt    (Instructs search engines on how to index the site)
  |
  ├── src/              (Contains source code of the application)
  |   |
  │   ├── App.js        (Main JavaScript file for the application)
  │   ├── App.css       (Main CSS file for application styling)
  │   ├── index.js      (Entry point for the application)
  │   ├── index.css     (CSS for the entry point)
  │   ├── components/   (Folder for reusable UI components)
  │   └── assets/       (Folder for static assets like images, fonts)
  |
  ├── package.json      (Defines project dependencies and scripts)
  ├── README.md         (Project documentation)
  └── .gitignore        (Specifies files to be ignored by Git version control)
```



- [01vitereact](01vitereact/README.md): Flow of React Project Structure.
