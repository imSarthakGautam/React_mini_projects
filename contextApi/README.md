# context API

1. why do you need a context ?  Why context over props ? 
2. what do you need inside a context ? 
3. How do you create a context ?
4. What are the main components of the Context API? 
5. How do I provide a context to components in React ?
6. What do you mean by consuming a context ?
7. How do I consume a context in a React component?


### what is context in react ?
- In React, a context is a way to manage and share state (or other data) across different components without having to pass props manually at every level.

- It provides a means to create a global variable that can be accessed by any component within a React application, thus making it easier to manage state across deeply nested component trees.

## Key Concepts of Context

### Creating a Context:

A context is created using the *_React.createContext()_* function. This function returns a context object that contains two components: Provider and Consumer.

### Provider:

The Provider component is used to "provide" the context value to its descendant components. Any component wrapped inside the Provider can access the context value.
_< Provider > < Components /> < /Provider >_

### Consumer:

The Consumer component is used to "consume" the context value. It allows any component within the context provider to access the context data.

### useContext Hook:

The *useContext* hook is a more modern and convenient way to consume context values in functional components.



