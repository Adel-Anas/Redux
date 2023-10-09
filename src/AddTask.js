import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoReducer';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (description.trim() !== '') {
      dispatch(
        addTodo({
          id: Date.now(),
          description: description,
          isDone: false,
        })
      );
      setDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default AddTask;
