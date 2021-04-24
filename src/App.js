import logo from './logo.svg';
import './App.css';
import TodoList from './componenets/Todo-list';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid'

function App() {
  const [state, setState] = useState([]);
  const todoRef = useRef();
  const savedItem = 'todoApp.state'

  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem(savedItem));
    if (storedItem) setState(storedItem)
  }, [])

  useEffect(() => {
    localStorage.setItem(savedItem, JSON.stringify(state))
  }, [state]);

  function ToggleHandle(id) {
    const newState = [...state]
    const newItem = newState.find(eachItem => eachItem.id === id)
    newItem.complete = !newItem.complete;
    setState(newState)
  };
  const handleRemove = () => {
    const newState = state.filter(eachItem => !eachItem.complete)
    setState(newState)
  }


  const addInput = (e) => {
    let name = todoRef.current.value;
    todoRef.current.value = null;
    if (name === "") return;
    setState(previous => {
      return [...previous, { name: name, id: uuid(), complete: false }]
    })
  }
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <TodoList ToggleHandle={ToggleHandle} attribute={state} />
      <input ref={todoRef} type="text" />
      <button onClick={addInput}>Add </button>
      <button onClick={handleRemove}>Remove</button>
      <p>{state.filter(eachItem => !eachItem.complete).length} item left here...</p>
    </div>
  );
}

export default App;
