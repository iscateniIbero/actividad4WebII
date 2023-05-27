/* se utiliza el componente funcional App. Dentro de este componente, se utiliza el hook useState para almacenar los datos obtenidos de la API. Se inicializa con un arreglo vacío.

Luego, se utiliza el hook useEffect para realizar la petición GET al servidor cuando el componente se monta. La URL utilizada en el ejemplo es https://api.example.com/data, pero debes reemplazarla con la URL correcta de tu API.

Una vez que se obtiene la respuesta del servidor, se actualiza el estado utilizando setData(response.data).

En el retorno del componente, se muestra la lista de datos obtenidos de la API utilizando data.map. Cada elemento de la lista se muestra en un elemento <li>. */


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la petición GET al servidor
    axios.get('https://api.example.com/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error al realizar la petición:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
