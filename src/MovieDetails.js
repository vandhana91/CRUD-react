import React from 'react';
import { useParams } from "react-router-dom";

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  return (
    <div>
      <iframe width="80%"
        height="381"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <div className='movie-details'>
        <div className='movie-container'>
          <h3 className='movie-title'>{movie.name}</h3>
          <h3 className='movie-rating'>{movie.rating} </h3>
        </div>
        <div className='movie-summary'>
          <p>{movie.summary}</p>
        </div>
      </div>
    </div>
  );
}
