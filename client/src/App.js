import './App.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function App() {
  const [todoItem, settodoItem] = useState('')
  const [listItem, setList] = useState('')
  
  const submitTask = (e) =>{
    console.log('submit button occurred')
    console.log('todoItem:', todoItem)
    e.preventDefault()
    //send info into our backend
    Axios.post(`http://localhost:3001/api/insert`,{
      todoItem: todoItem
    }).then(()=>{
      alert("successful insert");
    });
  };

useEffect(() => {
Axios.get("/").then((response) => {
  setList(response.data)
})
},[])

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="form">
        <label>ToDo Task</label>

        <form onSubmit={submitTask}>
          <input type="text" name="task" onChange={(e)=>{
            settodoItem(e.target.value)}}/>
          <button onClick={submitTask} >Submit</button>
      </form>
      {/* {listItem.map((val)=>{
            return <h1>Task:{val.task} </h1>
          })} */}
      </div>
      </div>
  );
}

export default App;