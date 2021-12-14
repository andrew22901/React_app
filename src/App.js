import React from 'react';
import './App.css';
import ItemListContainer from './Components/Lista/ItemListContainer/ItemListContainer';
import Navbar from "./Components/Navbar/NavBar.js"
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
     <Navbar />
     <ItemListContainer/>
     <ItemDetailContainer/>
    </div>
  );
}

export default App;
