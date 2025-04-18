import "../css/MovieCard.css"
import { useNavigate } from "react-router-dom";


function MovieCard({movie, addToFavorites}) {
    const navigate = useNavigate();

    function onFavoriteClick(){
        navigate("/favorites")
        addToFavorites(movie);
    }

    return (<div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                ★
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
    );
}

export default MovieCard