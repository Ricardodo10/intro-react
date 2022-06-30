import  { useState } from 'react'


export default function Checkbox(props) {
    const [checked, setChecked] = useState(true);

    return (
        <ul>
            {props.todos.map((todo, index) => (
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

