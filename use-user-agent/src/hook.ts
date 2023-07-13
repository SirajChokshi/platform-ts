import { useEffect, useMemo, useState } from "react";
import { PlatformReader } from "platform-ts";

const DEFAULT_USE_USER_AGENT_OPTIONS = {
  extensions: undefined,
  useHighEntropyResult: true,
};

interface useUserAgentOptions {
  extensions?: Record<string, unknown>;
  useHighEntropyResult?: boolean;
}

export function useUserAgent(
  uastring?: string,
  options: useUserAgentOptions = DEFAULT_USE_USER_AGENT_OPTIONS
) {
  const { extensions, useHighEntropyResult } = options;

  const reader = useMemo(
    () => new PlatformReader(uastring, extensions),
    [uastring, extensions]
  );

  const [result, setResult] = useState(() => reader.getResult());

  useEffect(() => {
    if (!useHighEntropyResult) {
      return;
    }

    (async function () {
      const asyncResult = await reader.getHighEntropyResult();

      setResult(asyncResult);
    })();
  }, [reader, useHighEntropyResult]);

  return {
    isLoading: false,
    isError: false,
    error: null,
    data: result,
  };
}
