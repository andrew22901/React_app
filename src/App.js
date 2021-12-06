import React from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from "./Components/Navbar/NavBar.js"

function App() {
  return (
    <div className="App">
     <Navbar />
     <ItemListContainer />
    </div>
  );
}

export default App;
