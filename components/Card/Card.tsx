import { getCharacterInfo } from "../apps/character/api/character";
import { useQuery } from "@tanstack/react-query";

export const Card = () => {
  const { data } = useQuery({
    queryKey: ["characterInfo"],
    queryFn: getCharacterInfo,
  });
  console.log(data);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data?.results.map((e) => (
          <div style={{ margin: 5, padding: 5 }}>
            <img src={e.image} />
            <h3>{e.name}</h3>
            <p>{e.species}</p>
          </div>
        ))}
      </div>
    </>
  );
};
