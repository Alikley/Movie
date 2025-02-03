import { Movie } from "@/entites/Movie";
import APICLIENT from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APICLIENT<Movie>("/movie");

const useMovie = (original_title: string | string) =>
  useQuery({
    queryKey: ["movie", original_title],
    queryFn: () => apiClient.get(original_title),
  });
export default useMovie;
