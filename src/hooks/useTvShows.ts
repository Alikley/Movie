import { TvShow } from "@/entites/TvShow";
import APICLIENT from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APICLIENT<TvShow>("/tv/popular");

const useTvShow = () =>
  useQuery<TvShow[], Error>({
    queryKey: ["tvShow"],
    queryFn: apiClient.getAll,
  });

export default useTvShow;
