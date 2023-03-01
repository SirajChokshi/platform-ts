import UAParser from "ua-parser-js";
import { useMemo } from "react";
import { UseUserAgentResult } from "./types";

export function useUserAgent(uastring?: string): UseUserAgentResult {
  const parser = useMemo(() => new UAParser(uastring), [uastring]);
  const data = useMemo(() => parser.getResult(), [parser]);

  return {
    isLoading: false,
    isError: false,
    data,
  };
}
