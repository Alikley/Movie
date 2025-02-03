import { Movie } from "@/entites/Movie";
import APICLIENT from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APICLIENT<Movie>("/tv");

const useTvShow = (original_name: string | string) =>
  useQuery({
    queryKey: ["tvShow", original_name],
    queryFn: () => apiClient.get(original_name),
  });
export default useTvShow;
