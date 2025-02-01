import useMovies from "../hooks/useMovies";


function MovieSlider() {
  const { data, isLoading, error } = useMovies();

  if (isLoading) return <p>Is Loading</p>;
  if (error) return <p>{error?.message || "Error fetching movies"}</p>;
  if (!data || data.length === 0) return <p>No movies found.</p>;

  return (
    <div style={{width:"100%", margin: '0 auto' }}> {/* Container for responsiveness */}
      <h1>sacfsa</h1>
    </div>
  );
}

export default MovieSlider;