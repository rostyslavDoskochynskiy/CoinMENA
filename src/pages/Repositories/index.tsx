import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store";
import { useRepositories } from "@/shared/hooks/useRepositories";

import Loading from "@ui/Loading";
import BasePage from "@ui/BasePage";
import Repository from "./Repository/Repository";

const Repositories = () => {
  const { isLoading, error } = useRepositories();
  const { repositories } = useSelector((state: RootState) => state);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BasePage>
      {!error ? (
        <>
          {repositories.map((repository) => (
            <Repository key={repository.url} {...repository} />
          ))}
          {!repositories.length && (
            <p style={{ color: "#fff" }}>
              Repositories don't exist in database{" "}
            </p>
          )}
        </>
      ) : (
        <p style={{ color: "#fff" }}>{error as string}</p>
      )}
    </BasePage>
  );
};

export default Repositories;
