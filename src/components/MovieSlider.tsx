import useMovies from "@/hooks/useMovies";
import { Image } from "@chakra-ui/react";
import Carousel from "react-bootstrap/Carousel";
import { CiCircleInfo } from "react-icons/ci";
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
              <div
                className="absolute inset-0 flex flex-col justify-leftr items-left text-left px-8 pt-100 bg-black
              bg-opacity-50 text-[#ffffff]"
              >
                <h5 className="text-18xl font-bold mb-4 space tracking-wide" style={{fontSize:"60px"}}>
                  {movie.original_title}
                </h5>
                <p className="text-xl max-w-3xl ">{movie.overview}</p>
                <button className="mt-4 p-2 bg-[#9d9a96ac] font-bold rounded-lg duration-300 ease-in-out hover:bg-white hover:text-black flex flex-row-reverse items-center justify-around w-28">
                  More Info
                  <span style={{fontSize:"20px"}}>
                    <CiCircleInfo />
                  </span>
                </button>
              </div>
            </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MovieSlider;
