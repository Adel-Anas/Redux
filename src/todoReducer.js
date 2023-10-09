import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((task) => task.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    editTodo: (state, action) => {
      const todo = state.find((task) => task.id === action.payload.id);
      if (todo) {
        todo.description = action.payload.description;
      }
    },
  },
});

export const { addTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
