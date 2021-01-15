import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  //State Elements
  const [name, setName] = useState([])

  useEffect(() => {
    const getData = () => {
      fetch("http://10.0.2.15:5000/users")
      .then(response=>response.json())
      .then(data => {
        console.log(data);
        setName(data)
      })
      .catch(err=>console.log(err))
    }
    getData();
  }, [])


  return (
    <div className="App">
      <h1>Hi my name is {name['name']}</h1>
    </div>
  );
}

export default App;
