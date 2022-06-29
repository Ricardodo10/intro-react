import React, { useState } from 'react'

export default function Checkbox() {
    const initialTodos = ["My first todo", "My second todo"];
    const [todos, setTodos] = useState(initialTodos);
    const [checked, setChecked] = React.useState(true);
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <input type="checkbox" 
                    defaultChecked={!checked}
                    onChange={() => setChecked(checked)}
                    /> {todo}
                </li>
            ))}
        </ul>
    );
}

