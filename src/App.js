// src/App.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'; // Importar Axios
import List from './components/List';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realizar la petición a la API con axios
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        setItems(response.data.results); // Actualizar el estado con los datos obtenidos
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Listado de Pokémon</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Error al cargar datos: {error.message}</p>}
      <List items={items} />
    </div>
  );
}

export default App;
