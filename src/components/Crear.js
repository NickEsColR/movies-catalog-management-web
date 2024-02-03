import React, { useState } from 'react'
import { SaveLocalStorage } from '../helpers/SaveLocalStorage';

export const Crear = ({ setMovies }) => {

    const titleComponent = "Añadir pelicula";
    const [movieState, setmovieState] = useState({});

    const { title, description } = movieState;

    const getFormData = (e) => {
        e.preventDefault();

        //conseguir datos del formulario
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        //crear objeto de la pelicula a guardar
        let movie = {
            id: new Date().getTime(),
            title,
            description
        }

        //guardar estado
        setmovieState(movie);

        //actualizar listado
        setMovies(movies => {
            let newMovies = movie;
            movies !== null ? 
            newMovies = [...movies, movie] :
            newMovies = [movie];
            return newMovies;
        });

        //guardar en el almacenamiento local
        SaveLocalStorage('movies', movie);

        //limpiar formulario
        target.reset();
    }



    return (
        <div className="add">
            <h3 className="title">{titleComponent}</h3>

            <strong>
                {(title && description) && "Has creado la pelicula: " + title}
            </strong>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Titulo" name='title' />
                <textarea placeholder="Descripción" name='description'></textarea>
                <input type="submit" value="Añadir" />
            </form>
        </div>
    )
}
