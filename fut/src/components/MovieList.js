import React from "react";
import Movie from "./Movie";

const MoviesList = ({ movies , category}) => {
  return (
    <div className="container">
    <h2 className="category_title">{category}</h2>
    <div className="row">
      {movies.map((moviels, i) => {
        return (
          <div className="col-md-4" style={{ marginBottom:"2rem" }}>
          <Movie 
            name={movies[i].title}
            poster={movies[i].poster_path}
          />
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default MoviesList;
