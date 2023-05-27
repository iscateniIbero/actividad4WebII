/* Se utiliza el componente funcional App como componente principal de la aplicación. Dentro de App, se utiliza el componente Router de React Router para envolver el contenido de la aplicación y habilitar la navegación basada en rutas.

Dentro del componente Router, se definen las diferentes rutas utilizando el componente Route. Cada ruta tiene una path que define la URL correspondiente y un componente asociado que se renderizará cuando la ruta coincida.

El componente Switch se utiliza para asegurarse de que solo se renderice el primer Route que coincida con la URL actual. Esto evita que se rendericen múltiples componentes al mismo tiempo.

En el componente nav, se utilizan los componentes Link de React Router para crear enlaces de navegación. Cada Link se asocia a una ruta específica mediante el atributo to.

En este ejemplo, se definen tres rutas: una ruta para la página de inicio (/), una ruta para la página Acerca de nosotros (/about), y una ruta para la página de contacto (/contact). Al hacer clic en los enlaces de navegación, se renderizará el componente correspondiente en función de la ruta seleccionada. */


import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Bienvenido a la página de inicio.</p>
  </div>
);

const About = () => (
  <div>
    <h1>About</h1>
    <p>Esta es la página Acerca de nosotros.</p>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact</h1>
    <p>Contáctanos a través del siguiente formulario.</p>
  </div>
);

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
