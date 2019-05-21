import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MovieWrapper } from "./Styles";
import { MovieContext } from "../movie-context";

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [favorites, addToFavorites] = useContext(MovieContext);
  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/us/movies/top-movies/all/25/explicit.json"
      )
      .then(({ data }) => setMoviesData(data.feed.results))
      .catch(error => console.log(error));
  }, []);
  return (
    <MovieWrapper>
      {moviesData.length === 0 && <p>Loading...</p>}
      {moviesData.length > 0 &&
        moviesData.map(movie => (
          <div className="movie" key={movie.id}>
            <a
              className="link"
              href={movie.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={movie.artworkUrl100} alt={movie.name} />
              <h1 className="title">{movie.name}</h1>
            </a>
            <button
              onClick={() => addToFavorites(previous => [...previous, movie])}
            >
              Add to favorite
            </button>
          </div>
        ))}
    </MovieWrapper>
  );
};

export default Movies;
