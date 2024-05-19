import { apiGetCharacterInfo } from "@/api/character/characterInfo";
import routerCreation, { baseHandler } from "@/lib/api/backend/middleware";
import {
  defaultAxiosError,
  defaultParser,
  sendResponse,
} from "@/lib/api/backend/parser";

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
