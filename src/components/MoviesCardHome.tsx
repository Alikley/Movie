import { NavLink } from "react-router-dom";
import useMovies from "../hooks/useMoviesHome";
import ExpandableText from "./ExpandableText";
import CriticScore from "./CriticScore";

function Movies() {
  const { data, isLoading, error } = useMovies();

  if (isLoading) return <p>Is Loading</p>;

  if (error) return <p>{error?.message || "Error fetching movies"}</p>;

  if (!data) return <p>No movies found.</p>;

  return (
    <div>
      {data.slice(4, 8).map((movie) => (
        <div key={movie.id} className="inline-block w-1xl m-43 align-top">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="card-img-top"
              alt={movie.title} // Add alt text for accessibility
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <ExpandableText>
              {movie.overview}

              </ExpandableText>
              {/* <p className="card-text text-2xl overflow-hidden h-40">
              </p> */}
              <br />
              <NavLink to={`/movie/${movie.id}`} className="btn btn-outline-warning">
                More Info
              </NavLink>
              <CriticScore  score={movie.vote_average}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movies;
