import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';

const API_URL = "https://www.omdbapi.com/?s=saga&apikey=4a3b711b";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

useEffect(() => {
  loadData();
}, [])


const loadData = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  setMovies(data.Search);
  setLoading(false);
  console.log(data.Search);
}

const search = searchValue => {
  setLoading(true);
  setErrorMessage(null);
  fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
  .then(res => res.json())
  .then(jsonRes => {
    if(jsonRes.Response === "True"){
      setMovies(jsonRes.Search);
      setLoading(false);
    }
    else{
      setErrorMessage(jsonRes.ERROR);
      setLoading(false);
    }
  })
}

  return (
    <div>
      <Header text="HOOKED" />
      <Search search = {search} />
      <div className="movies">
        {
          movies.map((movie, index) => 
            <Movie key={index} movie={movie} title={movie.Title} year={movie.Year} poster={movie.Poster}/>)
        }
      </div>
    </div>
  );
}

export default App;
