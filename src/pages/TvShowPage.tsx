import CriticScore from "@/components/CriticScore";
import ExpandableText from "@/components/ExpandableText";
import useTvShow from "@/hooks/useTvShows";
import { Spinner } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function TvShowPage() {
  const { data: TvShows, isLoading, error } = useTvShow();
  if (isLoading) return <Spinner />;

  if (error) return <p>{error?.message || "Error fetching movies"}</p>;

  if (!TvShows) return <p>No movies found.</p>;
  return (
    <div>
      {TvShows?.slice(1, 21).map((tvShow) => (
        <div key={tvShow.id} className="inline-block w-1xl m-43 align-top">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
              className="card-img-top"
              alt={tvShow.name} // Add alt text for accessibility
            />
            <div className="card-body">
              <h5 className="card-title">{tvShow.name}</h5>
              <ExpandableText>{tvShow.overview}</ExpandableText>
              {/* <p className="card-text text-2xl overflow-hidden h-40">
              </p> */}
              <br />
              <NavLink
                to={`/tv/${tvShow.id}`}
                className="btn btn-outline-warning"
              >
                More Info
              </NavLink>
              <CriticScore score={tvShow.vote_average} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TvShowPage;
