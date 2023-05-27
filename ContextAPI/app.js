/* En este ejemplo, se crea un contexto UserContext utilizando createContext. Luego, se utiliza el componente UserProvider como proveedor del contexto. Dentro de UserProvider, se utiliza el hook useState para gestionar el estado del usuario actual.

El componente UserProfile consume el contexto utilizando useContext(UserContext) y muestra la información del usuario si está autenticado, junto con un botón de logout.

Finalmente, en el componente App, se envuelve la aplicación con el proveedor de contexto UserProvider y se renderiza el componente UserProfile.

De esta manera, todos los componentes descendientes de UserProvider pueden acceder al contexto y utilizar los valores proporcionados. */


import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const UserContext = createContext();

// Componente que provee el contexto
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Componente que consume el contexto
const UserProfile = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};

// Componente que utiliza el proveedor de contexto
const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>My App</h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
};

export default App;
