import React, { useEffect, useState } from 'react'

export const Buscador = ({ movies, setMovies }) => {

    const [search, setSearch] = useState('');
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        searchMovie();
    }, [search]);

    const searchMovie = (e) => {
        //Filtrar para buscar coincidencias
        let searchMovies = movies.filter(movie => (
            movie.title.toLowerCase().includes(search.toLowerCase())
        ));

        if (search.length <= 1 || searchMovies.length === 0) {
            searchMovies = JSON.parse(localStorage.getItem('movies'));
            setNotFound(true);
        }else{
            setNotFound(false);
        }

        //Actualizar estado del listado principal con lo filtrado
        setMovies(searchMovies);
    }

    return (
        <div className="search">
            <h3 className="title">Buscador: {search}</h3>
            {(notFound && search.length > 1) ? (
                <span className='not-found'>'No se encontraron resultados'</span>
            ): null}
            <form>
                <input
                    type="text"
                    id="search_field"
                    name='search'
                    autoComplete='off'
                    onChange={(e) => setSearch(e.target.value)} />
                <button>Buscar</button>
            </form>
        </div>
    )
}
