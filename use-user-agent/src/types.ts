import { IResult } from "ua-parser-js";
import { ENGINES } from "./const";

export type Engine = typeof ENGINES[number];

export interface UserAgentData extends Omit<IResult, "engine"> {
  engine: {
    name: string;
    version: string;
  };
}

export interface UseUserAgentResult {
  isLoading: boolean;
  isError: boolean;
  data: UserAgentData | null;
}
