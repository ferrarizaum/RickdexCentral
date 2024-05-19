/*
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Fetching data
    const response = await fetch("https://rickandmortyapi.com/api/character");

    // Extracting JSON body from the Response object
    const data = await response.json();

    // Sending the extracted data as JSON response
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to load data" });
  }
}
*/

import { apiGetCharacterInfo } from "@/api/character/characterInfo";
import routerCreation, {
  baseHandler,
} from "@/components/lib/api/backend/middleware";
import {
  defaultAxiosError,
  defaultParser,
  sendResponse,
} from "@/components/lib/api/backend/parser";

const router = routerCreation();

router.get(async (req, res) => {
  await apiGetCharacterInfo()
    .catch(defaultAxiosError)
    .then(defaultParser)
    .then((e) => {
      sendResponse(e, res);
    });
});

export type GetCharacterInfoResponse = Awaited<
  ReturnType<typeof apiGetCharacterInfo>
>["data"];

export default baseHandler(router);
