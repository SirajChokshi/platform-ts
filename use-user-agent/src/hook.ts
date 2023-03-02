"use client";

import { UAParser } from "ua-parser-js";
import { useMemo } from "react";
import { UseUserAgentData } from "./types";
import { formatEngine, formatOS } from "./utils";

export function useUserAgent(uastring?: string): UseUserAgentData {
  const parser = useMemo(() => new UAParser(uastring), [uastring]);

  const data = useMemo(() => {
    const res = parser.getResult();

    const { engine: originalEngine, os: originalOS, ...rest } = res;

    return {
      engine: formatEngine(originalEngine),
      os: formatOS(originalOS),
      ...rest,
    };
  }, [parser]);

  return data;
}
