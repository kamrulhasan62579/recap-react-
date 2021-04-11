import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Users></Users>
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([])
  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      {
        users.map( user =>  <SinglePosts usr={user}></SinglePosts> ) 
      }
    </div>
  )
}
function SinglePosts(props) {
  const singleUserStyle ={
    height: '250px',
    width: '600px',
    border: '3px solid yellow',
    borderRadius: '10px',
    margin: '25px',
    padding: '5px',
    backgroundColor: 'orange'
  }
  const {title, body} = props.usr;
  return(
    <div style={singleUserStyle}>
     
      <h3 style={{color: 'red'}}>Title: {title}</h3>
      <h4 style={{color: 'blue'}}>Body: {body}</h4>
    </div>
  )
}


export default App;
