//En este ejemplo, se define una función reductora reducer que maneja el estado y las acciones. El componente Counter utiliza useReducer para gestionar el estado, y se actualiza mediante las acciones INCREMENT y DECREMENT disparadas por los botones.

import React, { useReducer } from 'react';

// Función reductora
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Componente que utiliza useReducer
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
