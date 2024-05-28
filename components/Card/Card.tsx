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
      <p>Teste</p>
      <p></p>
    </>
  );
};
