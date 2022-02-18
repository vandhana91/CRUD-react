//import logo from './logo.svg';
import React,{useState} from 'react';
//import {component} from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Switch, Route, Link } from "react-router-dom";
import {AddColor} from './colorgame.js';
import {useHistory} from "react-router-dom";
import { MovieDetails } from './MovieDetails';
import { MovieList } from './MovieList';
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';



function App() {
  
  const movies=[
    {
      name:"Master",
    image:'https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_FMjpg_UX1000_.jpg',
    
    rating:"⭐8.8",
    summary:"John Durairaj, an alcoholic professor, gets enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
    trailer:"https://www.youtube.com/embed/UTiXQcrLlv4"
  },
    {
      name:"96",
    image:'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/96-Trisha-Vijay-Sethupathi-Trailer-Audio.jpg?itok=nqkQVh-B',
    
    rating:"⭐8.5",
    summary:'K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.',
    trailer:"https://www.youtube.com/embed/r0synl-lI4I"  
  },
    {
      name:"Doctor",
      image:'https://www.pinkvilla.com/imageresize/doctor_movie_review_main.jpg?width=752&format=webp&t=pvorg',
     
      rating:"⭐8.2",
      summary:'When a military doctor tracks down his former fiancees kidnapped niece, he discovers a complex human trafficking ring in Goa. He then weaves an intricate trap to capture the perpetrators.',
      trailer:"https://www.youtube.com/embed/oQiH_Iw0kDs"  
    },
      {
        name:"Bahubali 2",
        image:'https://m.media-amazon.com/images/M/MV5BODY0NTQ0MzctNmNlMi00MWUxLThmNTEtMGFhNjczYmVjYjcxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
        
        rating:"⭐9.2",
        summary:'After learning that his father was brutally killed by Bhallaladeva, Mahendra Baahubali raises an army to defeat him and release his mother from the formers captivity.',
        trailer:"https://www.youtube.com/embed/94BzBOpv42g"
      },
        {
          name:"Soorarai Pottru",
          image:'https://gumlet.assettype.com/swarajya%2F2020-11%2F3ad8ec93-097f-4fd6-94b1-671d4c532895%2Fsoo.jpg?w=1200&auto=format%2Ccompress&ogImage=true',
          
          rating:"⭐7.9",
          summary:'Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.',
          trailer:"https://www.youtube.com/embed/fa_DIwRsa9o"
          },
          {
            name:"Maanadu",
            image:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Maanaadu_poster.jpg/220px-Maanaadu_poster.jpg',
            
            rating:"⭐8.5",
            summary:'On the day of a public conference by the states Chief Minister, his bodyguard and a police officer become stuck in a time loop.',
            trailer:"https://www.youtube.com/embed/t9retstFUlM"
            },
            {
              name:"Jai Bhim",
              image:'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/jai_bhim_twiiter_review_1.jpg',
              
              rating:"⭐8.9",
              summary:'A brave activist-lawyer fights for justice when a poor tribal man, who gets falsely accused of robbery, goes missing from the police custody.',
              trailer:"https://www.youtube.com/embed/pVOd8HAQQZM"
              },
              {
                name:"Sarkar",
                
                image:'https://images.indianexpress.com/2018/11/sarkar-759-1.jpg',
                rating:"⭐8.9",
                summary:'An NRI businessman returns home and learns about the practice of fraudulent voting. When he decides to investigate, two corrupt politicians strive to block his path.',
                trailer:"https://www.youtube.com/embed/VkkyaodksT4"
                },
  

  ];
  
  const [movieList,setMovieList] = useState(movies);
  
  return (
   
    <div className="App">
      <div className='main'>
       <ul >
         
        <li>
          {/* Change the url bar but dont refresh */}
          <Link to="/home" 
          style={{ color:'#1e90ff',fontFamily:'cursive',
          fontWeight:'bold',textDecoration:'none',fontSize:'17px' }}
          >HOME</Link>
        </li>
        <li >
          <Link  to="/movies" 
          style={{ color:'#1e90ff',fontFamily:'cursive',
          fontWeight:'bold',textDecoration:'none',fontSize:'17px' }}
          >MOVIES</Link>
        </li>
        
        <li>
          {/* Change the url bar but dont refresh */}
          <Link to="/movies/add" 
          style={{ color:'#1e90ff',fontFamily:'cursive',
          fontWeight:'bold',textDecoration:'none',fontSize:'17px' }}
          >ADD MOVIE</Link>
        </li>
      </ul>
      <Switch>

      <Route path="/movies/add">
      <AddMovie movieList={movieList} setMovieList={setMovieList}/>
        </Route >

        <Route path="/movies/edit/:id">
        <EditMovie movieList={movieList} setMovieList={setMovieList}/>
        </Route >

      <Route path="/movies/:id">
        
        <MovieDetails movieList={movieList}/>
        </Route>
        
      <Route path="/movies">
        
      <MovieList movieList={movieList} setMovieList={setMovieList}/>
      </Route >
        <Route path= "/colorgame">
          <AddColor/>
        </Route>
       
        <Route path= "/home">
         <h2>Welcome To The Movie App🎉</h2>
        </Route>
       
        
      </Switch>
      </div>
      
       
      </div> 
  );
}


export default App;

export function Cart({image,name,rating,summary,id,deletebutton,editbutton}){
  const[show,setShow] = useState(true);
  
  const history=useHistory();
  return(
    
    <div className='movie'>
     <div class-name='movie-poster'>
      <img src={image}
      alt='movie'
      className='movie-image'/>
      
      </div>
      <div className='movie-desc'>
      <h3 className='movie-name'>{name}</h3>
      <p  className='rating'>{rating} </p>
      </div>
      <div className="toggle">
      <button onClick={()=>setShow(!show)} >
        ▲
        </button>
       <button onClick={()=>history.push("/movies/" + id)}> ℹ</button> 
      {/*<p className='summary'>{summary}</p>*/}
      </div>
      {show? <p className='summary'>{summary}</p>: ""}
      <div className='buttons'>
      <Counter/>{deletebutton}  {editbutton}
      </div>
      </div>
  );
}

function Counter(){
  const [like,setLike] = useState(0);
  const [disLike,setDisLike] = useState(0);
  return(
    <div className='counter'>
      <IconButton onClick={()=>setLike(like + 1)}
       color="primary"
       aria-label="add to shopping cart"
      >
        <Badge badgeContent={like} color="primary">
        👍
        </Badge>
      </IconButton>
      <IconButton onClick={()=>setDisLike(disLike + 1)}
      color="error"
      aria-label="add to shopping cart"
      >
      <Badge badgeContent={disLike} color="error">
        👎
        </Badge>
      </IconButton>
      
    </div>
  );

}

//setSearch(search + 1)
//onClick={()=>addToCart(dress)}