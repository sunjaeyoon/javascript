import './App.css';
import React, {useState, useEffect} from 'react';

import Button from '@material-ui/core/Button';

function App() {
  //State Elements
  const [name, setName] = useState([]);
  const [address, setAddress] = useState([]);
  const [imageData, setImageData] = useState([]);

  /*
  useEffect(() => {
    fetch("http://localhost:5000/users/address")
    .then(response=>response.json())
    .then(data => {
      setAddress(data["data"])
    })
    .catch(err=>console.log(err))
  }, [])
  */

  const getName = async(event) => {
    fetch("http://localhost:5000/users")
    .then(response=>response.json())
    .then(data => {
      setName(data)
    })
    .catch(err=>console.log(err))

    fetch("http://localhost:5000/users/address")
    .then(response=>response.json())
    .then(data => {
      setAddress(data["data"])
    })
    .catch(err=>console.log(err))
  }

  const loadImage = async(event) => {
    //Does nothing yet
  }

  return (
    <div className="app">
      <h1>Hi, My name is {name["firstname"]} {name["lastname"]}</h1>
      <p>I live in {address['city']} {address['state']} </p>
      <div>
        <Button onClick={getName} variant="outlined" color="primary">
          Log In
        </Button>
      </div>
      <div>
        <Button onClick={loadImage} variant="outlined" color="primary">
          Load Images
        </Button>
      </div>
    </div>
  );
}

export default App;
