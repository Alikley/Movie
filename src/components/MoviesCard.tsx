import useMovies from "../hooks/useMovies";

function Movies() {
  const { data, isLoading, error } = useMovies();

  if (isLoading) return <p>Is Loading</p>;

  if (error) return <p>{error?.message || "Error fetching movies"}</p>;

  if (!data) return <p>No movies found.</p>;

  return (
    <div>
      {data.map((movie) => (
        <div key={movie.id}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movies;
