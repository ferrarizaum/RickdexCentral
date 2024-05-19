import { AxiosResponse } from "axios";
import { NextApiResponse } from "next";

class CustomError extends Error {
  status: number;
  stack?: any;

  constructor(
    message: string,
    { status, stack }: { status: number; stack?: any }
  ) {
    super(message);
    this.status = status;
    this.stack = stack;
  }
}

export function sendResponse<T extends AxiosResponse>(
  e: T,
  res: NextApiResponse
) {
  console.log(e);
  return res.status(200).json(e.data);
}

export function defaultParser<T extends AxiosResponse>(e: T): T {
  console.log(e);
  if (e.status >= 200 && e.status < 300) return e;

  let message = `Unknown error (${e.status})`;
  if (e.status === 405) message = e.data.message || "invalid request";
  throw new CustomError(message, { status: e.status, stack: e.data });
}

export const defaultAxiosError = (e: any) => {
  console.log(e);
  if (e.request && !e.response)
    throw new CustomError("Cant connect to internal server", { status: 500 });
  throw defaultParser(e.response);
};
