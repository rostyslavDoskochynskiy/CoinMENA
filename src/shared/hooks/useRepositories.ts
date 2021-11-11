import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import { storeRepoData } from "@/store/repositories";

export const useRepositories = () => {
  const dispatch = useDispatch();

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = "https://gh-trending-api.herokuapp.com/";

  const { isLoading: repoIsLoading, error: repoError } = useQuery(
    "repoData",
    async () => {
      try {
        const data = await fetch(`${proxyUrl + targetUrl}repositories`);
        const response = await data.json();
        dispatch(storeRepoData(response));
      } catch (error) {
        console.error(error);
      }
    }
  );

  const isLoading = repoIsLoading;
  const error = repoError && "repoError";

  return {
    error,
    isLoading,
  };
};
