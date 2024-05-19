import { NextJSClient } from "@/api/client";
import { exportData } from "@/components/lib/api/frontend/parserClient";
import { GetCharacterInfoResponse } from "@/pages/api/character/route";

export const getCharacterInfo = async () =>
  await NextJSClient.get<GetCharacterInfoResponse>(`character`).then(
    exportData
  );
