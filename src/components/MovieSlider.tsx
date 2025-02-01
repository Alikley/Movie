import useMovies from "@/hooks/useMovies";
import { Image } from "@chakra-ui/react";
import Carousel from "react-bootstrap/Carousel";
function MovieSlider() {
  const { data, isLoading, error } = useMovies();

  if (isLoading) return <p>Is Loading</p>;
  if (error) return <p>{error?.message || "Error fetching movies"}</p>;
  if (!data || data.length === 0) return <p>No movies found.</p>;

  return (
    <div>
      <Carousel>
        {data.map((movie) => (
          <Carousel.Item key={movie.id}>
            <Image
              className="d-block w-100 h-25"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.original_title}
            />
            <Carousel.Caption>
              <h5>{movie.original_title}</h5>
              <p>{movie.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MovieSlider;