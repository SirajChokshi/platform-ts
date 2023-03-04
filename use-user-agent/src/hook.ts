import { useMemo } from "react";
import { PlatformReader } from "platform-ts";

export function useUserAgent(
  uastring?: string,
  extensions?: Record<string, unknown>
) {
  const result = useMemo(
    () => new PlatformReader(uastring, extensions).getResult(),
    [uastring, extensions]
  );

  return {
    isLoading: false,
    isError: false,
    error: null,
    data: result,
  };
}
