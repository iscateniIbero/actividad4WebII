/* En este ejemplo, el componente Message utiliza el hook useEffect para establecer el mensaje inicial utilizando setMessage después de que el componente se haya montado. */

import React, { useState, useEffect } from 'react';

const Message = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Se ejecuta después de que el componente se haya montado
    setMessage('¡Hola desde useEffect!');
  }, []);

  return <h2>{message}</h2>;
};

export default Message;
