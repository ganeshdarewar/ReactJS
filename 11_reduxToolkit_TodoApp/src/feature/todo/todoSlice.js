import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const todo = {
        id: nanoid(),
        task: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTask: (state, action) => {
      console.log(action.payload);
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, task: action.payload.taskMsg }
          : todo
      );
    },
    completeTask: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTask, deleteTask, updateTask, completeTask } =
  todoSlice.actions;
export default todoSlice;
