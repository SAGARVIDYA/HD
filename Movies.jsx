import { useState, useEffect } from 'react';
import Moviecard from './Moviecard';
import axios from 'axios';
import Pagination from './Pagination';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9b0ec311731ab3ef54b808e4d8a125b0&language=en-US&page=1${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Popular Movies</div>
      <div className="flex flex-wrap justify-center gap-4">
        {movies.map((movieObj) => (
          <Moviecard
            key={movieObj.id}
            poster_path={movieObj.poster_path}
            title={movieObj.title}
          />
        ))}
      </div>
      
      <Pagination/>
    </div>
    
    
  );
}

export default Movies;
