import { RickdexAPIClient } from "../client";

type CharacterResults = {
  results: CharacterInfo;
};

type CharacterInfo = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
};

export const apiGetCharacterInfo = async () =>
  await RickdexAPIClient.get<CharacterResults[]>(`character`);
