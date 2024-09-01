// src/App.js
import React, { useState, useEffect } from 'react';
import List from './List';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Realizar la llamada a la API y actualizar el estado
    fetch('https://api.example.com/data') // Reemplaza con la URL de tu API
      .then((response) => response.json())
      .then((data) => setItems(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Listado de Elementos</h1>
      <List items={items} />
    </div>
  );
}

export default App;
