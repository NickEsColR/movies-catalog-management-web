import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({ movies, setMovies }) => {

    // const [movies, setMovies] = useState([]);
    const [edit, setEdit] = useState(0);

    //hooks poner arriba de las funciones comunes

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        let savedMovies = JSON.parse(localStorage.getItem('movies'));
        setMovies(savedMovies);
        return savedMovies;
    }

    const deleteMovie = (id) => {
        //conseguir peliculas almacenadas
        let savedMovies = getMovies();
        //Filtrar peliculas para eliminar la deseada
        let newMovies = savedMovies.filter(movie => movie.id !== parseInt(id));
        //actualizar estado del listado
        setMovies(newMovies);
        //actualizar almacenamiento local
        localStorage.setItem('movies', JSON.stringify(newMovies));
    }
    return (
        <>
            {movies === null ?
                <h2>No hay peliculas</h2>
                : movies.length === 0 ?
                    <h2>No hay peliculas</h2>
                    :
                    movies.map((movie, index) => (
                        <article className="peli-item" key={movie.id}>
                            <h3 className="title">{movie.title}</h3>
                            <p className="description">{movie.description}</p>

                            <button className="edit" onClick={() => setEdit(movie.id)}>Editar</button>
                            <button className="delete" onClick={() => deleteMovie(movie.id)}>Eliminar</button>

                            {/* Foormulario para editar */}
                            {edit === movie.id &&
                                (<Editar
                                    movie={movie}
                                    getMovies={getMovies}
                                    setEdit={setEdit}
                                    setMovies={setMovies} />)
                            }
                        </article>
                    ))
            }
        </>
    )
}
