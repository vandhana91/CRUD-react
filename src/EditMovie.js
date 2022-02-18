import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory,useParams } from "react-router-dom";

export function EditMovie({ movieList, setMovieList }) {
    const { id } = useParams();
  const movie = movieList[id];
  const [name, setName] = useState(movie.name);
  const [image, setPoster] = useState(movie.image);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const history = useHistory();
  
  return (
    <div className='add-movie'>
      {/*<h3> Enter Movie Details</h3>*/}
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name" />
      <input
        value={image}
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Poster" />
      <input
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        placeholder="Rating" />
      <input
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        placeholder="Summary" />
      <input
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        placeholder="Trailer" />

      <Button onClick={() => {
        const updateMovie = {
          name: name,
          image: image,
          rating: rating,
          summary: summary
        };
        const copyMovieList = [...movieList];
        copyMovieList[id] = updateMovie;
        setMovieList(copyMovieList);
        history.push('/movies');
      }}
        color="success"
        variant="outlined"
      >
        Save
      </Button>

    </div>

  );
}
