import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import { storeDevData } from "@/store/developers";

const useDevelopers = () => {
  const dispatch = useDispatch();

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = "https://gh-trending-api.herokuapp.com/";

  const { isLoading: devIsLoading, error: devError } = useQuery(
    "devData",
    async () => {
      try {
        const data = await fetch(`${proxyUrl + targetUrl}developers`);
        const response = await data.json();
        dispatch(storeDevData(response));
      } catch (error) {
        console.error(error);
      }
    }
  );

  const isLoading = devIsLoading;
  const error = devError && "devError";

  return {
    error,
    isLoading,
  };
};

export default useDevelopers;
