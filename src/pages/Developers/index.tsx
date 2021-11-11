import React from "react";
import { useSelector } from "react-redux";

import BasePage from "@/components/ui/BasePage";
import Developer from "./Developer/Developer";

import { RootState } from "@/store";
import useDevelopers from "@/shared/hooks/useDevelopers";
import Loading from "@ui/Loading";

const Developers = () => {
  const { isLoading, error } = useDevelopers();
  const { developers } = useSelector((state: RootState) => state);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BasePage>
      {!error ? (
        <>
          {developers.map((developer) => (
            <Developer key={developer.username} {...developer} />
          ))}
          {!developers.length && (
            <p style={{ color: "#fff" }}>Developers don't exist in database </p>
          )}
        </>
      ) : (
        <p style={{ color: "#fff" }}>{error as string}</p>
      )}
    </BasePage>
  );
};

export default Developers;
