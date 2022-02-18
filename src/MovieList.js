import React from 'react';
import { Cart } from './App';
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";


export function MovieList({ movieList,setMovieList }) {
  const history=useHistory();
  return (
    <section className='movie-list'>
      {movieList.map((movie, index) => (
        <Cart
          key={index}
          image={movie.image}
          name={movie.name}
          rating={movie.rating}
          summary={movie.summary}
          id={index}
          deletebutton={<Button onClick={()=>{
              const remainingMovies = movieList.filter((mv,idx)=>{
              const removeIdx = index;
              return idx !== removeIdx;
              });
              setMovieList(remainingMovies);
          }}
          color="error" variant="contained" size="small">
          🗑Delete</Button>} 
          editbutton={<Button onClick={()=>{history.push("/movies/edit/" + index)
           
        }}
        color="secondary" variant="contained" size="small">
        🖊Edit</Button>}
          />
      )

      )}
    </section>
  );
}
