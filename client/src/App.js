import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  //State Elements
  const [name, setName] = useState([])
  const [address, setAddress] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/users")
    .then(response=>response.json())
    .then(data => {
      console.log(data);
      setName(data['name'])
    })
    .catch(err=>console.log(err))
  }, [])

  useEffect(() => {
    fetch("http://localhost:5000/users/address")
    .then(response=>response.json())
    .then(data => {
      console.log(data);
      setAddress(data["data"])
    })
    .catch(err=>console.log(err))
  }, [])


  return (
    <div className="App">
      <h1>Hi my name is {name}</h1>
    </div>
  );
}

export default App;
