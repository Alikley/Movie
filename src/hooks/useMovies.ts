import { Movie } from "../entites/Movie";
import APICLIENT from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APICLIENT<Movie>("/movie/popular");

const useMovies = () => {
  return useQuery<Movie[], Error>({
    queryKey: ["movie"],
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000,
  });
};

export default useMovies;