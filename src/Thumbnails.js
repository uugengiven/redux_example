import {useSelector} from 'react-redux';

function Thumbnails() {
    const movies = useSelector((state) => state.movies.movies);

    return (<div>
        {movies.map(movie => 
            <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        )}
    </div>);
}

export default Thumbnails;