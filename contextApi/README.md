# context API

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
