import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

  const [movies, setMovies] = useState([]);

  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mis Pelis</h1>
      </header>

      {/*Barra de Navegación */}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/* Contenido Principal */}
      <section className="content">
        {/* Aqui va el listado de las peliculas */}
        <Listado movies={movies} setMovies={setMovies}/>
      </section>

      {/* Barra lateral */}
      <aside className="lateral">
        <Buscador movies={movies} setMovies={setMovies}/>

        <Crear setMovies={setMovies}/>
      </aside>

      {/* Pie de Página */}
      <footer className="footer">
        &copy; Máster en JavaScript - <a href="https://victorroblesweb.es">Victor Robles WEB</a>
      </footer>
    </div>
  );
}

export default App;
