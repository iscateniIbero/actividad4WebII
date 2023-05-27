/* En este ejemplo, he creado un componente Counter que utiliza el hook useState para agregar un contador al componente. El estado count se inicializa en 0 y se actualiza utilizando la función setCount cuando se hace clic en el botón "Increment". */

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
