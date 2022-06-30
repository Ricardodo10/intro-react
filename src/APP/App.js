import React from 'react';
import Todolist from '../Todolist';
import Input from '../Input';
import Buttonclear from '../Buttonclear';
import Checkbox from '../Checkbox';
import  { useState } from 'react'

function App() {
  const initialTodos = ["My first todo", "My second todo"];
  const [todos,settodos] = useState(initialTodos);
  return (
    <>
      <Todolist />
      <Input />
      <Buttonclear />
      <Checkbox todos={todos} />

    </>

  )
}

export default App;
