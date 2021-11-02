import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {set_movies} from './reducers';
import {search_movies} from './api';

function Search() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleOnChange = event => {
        const { value } = event.target;
        setSearch(value);
    }

    const handleGoClick = async event => {
        const new_movies = await search_movies(search);
        dispatch(set_movies(new_movies.results));
    }

    return (<div>
        <input type="text" onChange={handleOnChange} value={search} />
        <button onClick={handleGoClick} >Go</button>
    </div>);
}

export default Search;