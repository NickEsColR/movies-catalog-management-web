import React from 'react'

export const Editar = ({ movie, getMovies, setEdit, setMovies }) => {

    const componentTitle = "Editar Pelicula"

    const saveUpdate = (e, id) => {
        //conseguir target del evento
        let target = e.target;

        //buscar indice del objeto a actualizar
        const savedMovies = getMovies();
        const index = savedMovies.findIndex(movie => movie.id === id);

        //crear objeto con ese indice
        let movie_updated = {
            id,
            title: target.title.value,
            description: target.description.value
        };

        //actualizar elemento con el indice
        savedMovies[index] = movie_updated;

        //guardar en localstorage
        localStorage.setItem('movies', JSON.stringify(savedMovies));
        //actualizar estado
        setMovies(savedMovies);
        setEdit(0);
    }

    return (
        <div className='edit-form'>
            <hr/>
            <h3 className='title'>{componentTitle}</h3>
            <form onSubmit={e => saveUpdate(e, movie.id)}>
                <input type="text"
                    name='title'
                    className='title-edit'
                    defaultValue={movie.title} />

                <textarea
                    name='description'
                    className='description-edit'
                    defaultValue={movie.description}></textarea>

                <input type="submit" value="Actualizar" className='update' />
            </form>
        </div>
    )
}
