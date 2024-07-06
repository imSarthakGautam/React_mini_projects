# To-do List - II Using context API and local storage
- This to-do list is built using contextAPI and local storage 
- Futhermore tailwind css is used here,

## Steps

1. Creation of context : TodoContext and export context from a custom hook useTodo, Here useContext hook is used.

2. To-Do functionalities

- context object bhitra todos array, 
- each todo element of array is object which contains id, todo(msg), completed 
- Also it contained functionalities:
addTodo, deleteTodo, updateTodo, toggleComplete

- However the actual functions are defined in app.jsx

3. In App.jsx
- wrap return in TodoProvider also it provides values of contexts (values and functions/methods)
- define functionalities of each methods ---LOGIC--

4. LOCAL STORAGE





