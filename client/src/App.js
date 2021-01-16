import './App.css';
import React, {useState, useEffect} from 'react';

import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Header from './components/Header';
import NestedGrid from './components/NestedGrid';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

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
      
      {/**-------------------Navbar -------------------*/}
      <MuiThemeProvider theme={customTheme}>
        <Header firstname={name['firstname']} lastname={name['lastname']}/>
      </MuiThemeProvider>
      {/**--------------Body-------------------------- */}
      <div className='app__body'>
        <h1>Hi, My name is {name["firstname"]} {name["lastname"]}</h1>
        <p>I live in {address['city']} {address['state']} {address['country']}</p>
        
        <Button onClick={getName} variant="outlined" color="primary">
          Log In
        </Button>

        <br></br>
        
        <div className="app__grid">
          <NestedGrid></NestedGrid>
        </div>
      </div>
      
    </div>
  );
}

export default App;
