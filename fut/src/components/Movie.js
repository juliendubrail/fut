import React from "react";

const Movie = ({ name, id, poster }) => {

  return (
    <div>
      <img alt="movies" src={`https://image.tmdb.org/t/p/w300/${poster}`} />
      <p className="movie_title">{name}</p>
      <button className="movie_button">Seen</button>
    </div>
  );
};

export default Movie;