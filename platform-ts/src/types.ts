import { ICPU, IDevice } from "ua-parser-js";
import { KNOWN_BROWSERS, KNOWN_ENGINES, KNOWN_OS } from "./const";

export type KnownEngineNames = (typeof KNOWN_ENGINES)[number];
export type KnownOSNames = (typeof KNOWN_OS)[number];
export type KnownBrowserNames = (typeof KNOWN_BROWSERS)[number];

export interface UnknownEngine {
  name: null;
  originalName?: string;
  version?: string;
  known: false;
}

export interface KnownEngine {
  name: KnownEngineNames;
  originalName: string;
  version?: string;
  known: true;
}

export type Engine = UnknownEngine | KnownEngine;

export interface UnknownOS {
  name: null;
  originalName?: string;
  version?: string;
  known: false;
}

export interface KnownOS {
  name: KnownOSNames;
  originalName: string;
  version?: string;
  known: true;
}

export type OS = UnknownOS | KnownOS;

export interface UnknownBrowser {
  name: null;
  originalName?: string;
  version?: string;
  known: false;
}

export interface KnownBrowser {
  name: KnownBrowserNames;
  originalName: string;
  version?: string;
  known: true;
}

export type Browser = UnknownBrowser | KnownBrowser;

export interface PlatformReaderResult {
  ua: string;
  browser: Browser;
  engine: Engine;
  os: OS;
  device: IDevice;
  cpu: ICPU;
}

/**
 * window definition for browsers implementing the `getHighEntropyValues`
 * API (currently only Chrome 90+)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/getHighEntropyValue
 */
export type WindowWithNavigatorUAData = Window & {
  navigator: Navigator & {
    userAgentData: {
      getHighEntropyValues: (keys: string[]) => Promise<Record<string, string>>;
    };
  };
};
