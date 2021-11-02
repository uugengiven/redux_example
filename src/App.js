import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { set_movies } from './reducers';
import { get_movies } from './api';
import {useEffect} from 'react';
import Thumbnails from './Thumbnails';
import Search from './Search';

function App() {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  
  useEffect(() => {
    async function fetchData() {
      const new_movies = await get_movies();
      console.log(new_movies.results);
      dispatch(set_movies(new_movies.results));
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {movies.map(movie => 
            <li key={movie.id}>{movie.title}</li>
          )}
        </ul>
        <Thumbnails />
      </header>

    </div>
  );
}

export default App;
