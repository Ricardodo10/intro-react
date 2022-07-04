import React , {useRef} from 'react'

export default function Input(props) {
  const inputRef = useRef();
  function clickHandler(e){
    const name = inputRef.current.value
    if (name === '') return
    
    inputRef.current.value = null

  }
  

  return (
    <div>
    <input ref={inputRef} type="text" placeholder="Write a new todo" />
    <br />
    <button onClick={clickHandler}>Add todo</button>
  </div>
  )
}
