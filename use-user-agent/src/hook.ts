import { useMemo } from "react";
import { PlatformReaderResult, PlatformReader } from "platform-ts";

export function useUserAgent(
  uastring?: string,
  extensions?: Record<string, unknown>
): PlatformReaderResult {
  const result = useMemo(
    () => new PlatformReader(uastring, extensions).getResult(),
    [uastring, extensions]
  );

  return result;
}
