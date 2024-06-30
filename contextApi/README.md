# context API

1. why do you need a context ?  Why context over props ? 
2. what do you need inside a context ? 
3. How do you create a context ?
4. What are the main components of the Context API? 
5. How do I provide a context to components in React ?
6. What do you mean by consuming a context ?
7. How do I consume a context in a React component?
8. What are the differences between Context.Provider and Context.Consumer?
9. How can I update the context value in React?
10. What are the performance considerations when using the Context API?
11. How do I use the Context API with functional components and hooks?
12. How can I use multiple contexts in a single component?
13. What are some common use cases for the Context API?
14. What are some alternatives to the Context API for state management in React?
15. What are the limitations or downsides of using the Context API?
16. How do I handle complex state with the Context API?



## 1. What is the Context API in React?
The Context API is a feature in React that allows you to pass data through the component tree without having to pass props down manually at every level. It provides a way to share values like themes, user information, or any other data across the entire application or part of it, without the need for "prop drilling."

## 2. When should I use the Context API instead of props?
Use the Context API when you have data that needs to be accessible by many components at different nesting levels. It’s particularly useful for global data that many components need to access, such as user authentication status, themes, or application settings. Avoid using it for passing data that is only needed by a few components closely related in the component tree, as this can make the code harder to understand and maintain.

## 3. What are the main components of the Context API?
The main components of the Context API are:
- `React.createContext()`: Creates a Context object.
- `Context.Provider`: A component that provides the context value to its children.
- `Context.Consumer`: A component that subscribes to context changes and provides the current context value to its child function.
- `useContext`: A hook that provides an easier way to access the context in functional components.

## 4. How do I create a context in React?
To create a context, use the `React.createContext` function:
```javascript
const MyContext = React.createContext(defaultValue);






