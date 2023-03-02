import {
  Browser,
  Engine,
  KnownBrowser,
  KnownBrowserNames,
  KnownEngineNames,
  KnownOS,
  KnownOSNames,
  OS,
} from "./types";
import { KNOWN_BROWSERS, KNOWN_ENGINES, KNOWN_OS } from "./const";
import { IBrowser, IEngine, IOS } from "ua-parser-js";

export function formatEngine(original: IEngine): Engine {
  if (original.name && isKnownEngine(original.name)) {
    return {
      name: original.name,
      originalName: original.name,
      version: original.version,
      known: true,
    };
  }

  return {
    name: null,
    originalName: original.name,
    version: original.version,
    known: false,
  };
}

export function formatOS(original: IOS): OS {
  if (original.name && isKnownOS(original.name)) {
    return {
      name: original.name,
      originalName: original.name,
      version: original.version,
      known: true,
    };
  }

  return {
    name: null,
    originalName: original.name,
    version: original.version,
    known: false,
  };
}

export function formatBrowser(original: IBrowser): Browser {
  if (original.name && isKnownBrowser(original.name)) {
    return {
      name: original.name,
      originalName: original.name,
      version: original.version,
      known: true,
    };
  }

  return {
    name: null,
    originalName: original.name,
    version: original.version,
    known: false,
  };
}

export function isKnownEngine(name: string): name is KnownEngineNames {
  return KNOWN_ENGINES.includes(name as KnownEngineNames);
}

export function isKnownOS(name: string): name is KnownOSNames {
  return KNOWN_OS.includes(name as KnownOSNames);
}

export function isKnownBrowser(name: string): name is KnownBrowserNames {
  return KNOWN_BROWSERS.includes(name as KnownBrowserNames);
}
