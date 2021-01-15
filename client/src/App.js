import './App.css';
import React, {useState, useEffect} from 'react';

import Button from '@material-ui/core/Button';

function App() {
  //State Elements
  const [name, setName] = useState([])
  const [address, setAddress] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/users/address")
    .then(response=>response.json())
    .then(data => {
      console.log(data);
      setAddress(data["data"])
    })
    .catch(err=>console.log(err))
  }, [])

  const getName = async(event) => {
    fetch("http://localhost:5000/users")
    .then(response=>response.json())
    .then(data => {
      console.log(data);
      setName(data['name'])
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className="app">
      <h1>Hi, My name is {name}</h1>
      <Button onClick={getName} variant="outlined" color="primary">
        Log In
      </Button>
    </div>
  );
}

export default App;
