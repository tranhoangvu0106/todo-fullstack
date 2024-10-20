import React, { useState } from 'react';
function AddTodo() {
  const [text, setText] = useState('');
  const handleUpdateTodo = () => {};

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleUpdateTodo}>Update</button>
    </div>
  );
}

export default AddTodo;
