import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoReducer';
import AddTask from './AddTask';
import ListTask from './ListTask';

const store = configureStore({
  reducer: todoReducer,
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo Application</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
