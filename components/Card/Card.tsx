import { useState } from "react";
import { getCharacterInfo } from "../apps/character/api/character";
import { useQuery } from "@tanstack/react-query";

export const Card = () => {
  const { data } = useQuery({
    queryKey: ["characterInfo"], // Define your query key here
    queryFn: getCharacterInfo, // Pass your fetch function here
  });
  console.log(data);
  return (
    <>
      <div style={{ display: "flex" }}>
        {data?.results.map((e) => (
          <div style={{ margin: 5, padding: 5 }}>
            <h3>{e.name}</h3>
            <p>{e.species}</p>
          </div>
        ))}
      </div>
    </>
  );
};
