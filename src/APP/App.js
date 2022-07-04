import React from 'react';
import Todolist from '../Todolist';
import Input from '../Input';
import Buttonclear from '../Buttonclear';
import Checkbox from '../Checkbox';
import  { useState} from 'react'
import uuidv4 from 'uuid/v4';

function App() {
  const initialTodos = ([]);
  const [todos,settodos] = useState(initialTodos);
  settodos(prevtodos =>{
    return [...prevtodos, {id:1, name: name , complete false
    }]
  })
  return (
    <>
      <Todolist />
      <Input todos={todos} />
      <Buttonclear />
      <Checkbox todos={todos} />

    </>
  

  )
  
}

export default App;
