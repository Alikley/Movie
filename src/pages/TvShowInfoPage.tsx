import { Image } from "@chakra-ui/react";
import useMovie from "../hooks/useMovie";
import { useParams } from "react-router-dom";
import CriticScore from "@/components/CriticScore";
import useTvShow from "@/hooks/useTvShow";

function TvShowInfoPage() {
  const { id } = useParams();
  const { data: movie } = useTvShow(id!);
  if (!movie) {
    return <div>No movie data available.</div>; // Handle the case where movie is still null
  }
  return (
    <div>
      <div >
        <Image
          className="d-block w-100 h-25"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.original_title}
          />
          <div
              className="absolute inset-0 flex flex-col justify-leftr items-left text-left px-30 pt-100 text-white"
            >
              <h5
                className="text-18xl font-bold mb-4 space tracking-wide"
                style={{ fontSize: "60px" }}
              >
                {movie.original_title}
              </h5>
              <p className="text-xl max-w-2xl ">{movie.overview}</p>
                <br />
                <CriticScore score={movie.vote_average}/>
            </div>
      </div>
    </div>
  );
}

export default TvShowInfoPage;
