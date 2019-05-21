import React, { useContext } from 'react';
import { MovieContext } from '../movie-context';
import { MovieWrapper } from './Styles';

const Favorites = () => {
    const [favorites] = useContext(MovieContext);
    return (
        <MovieWrapper>
        {favorites.length === 0 && <p>No favorites yet</p>}
        {favorites.length > 0 &&favorites.map((movie) => (
            <div className="movie" key={movie.id}>
                <a className="link" href={movie.url} target="_blank" rel="noopener noreferrer">
                    <img src={movie.artworkUrl100} alt={movie.name} />
                    <h1 className="title">{movie.name}</h1>
                </a>
            </div>
        ))}
        </MovieWrapper>
    );
};

export default Favorites;
