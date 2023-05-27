import React, { createContext, useContext } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Componente que utiliza el contexto
const ThemeComponent = () => {
  // Utilizar el contexto
  const theme = useContext(ThemeContext);

  return <h2>Theme: {theme}</h2>;
};

// se crea un contexto ThemeContext utilizando createContext. Luego, en el componente ThemeComponent, se utiliza useContext(ThemeContext) para acceder al valor proporcionado por el contexto. 

// Componente padre que provee el contexto
const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeComponent />
    </ThemeContext.Provider>
  );
};

export default App;
