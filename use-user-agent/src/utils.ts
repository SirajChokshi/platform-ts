import { Engine, KnownEngineNames, KnownOS, KnownOSNames, OS } from "./types";
import { KNOWN_ENGINES, KNOWN_OS } from "./const";
import { IEngine, IOS } from "ua-parser-js";

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

export function isKnownEngine(name: string): name is KnownEngineNames {
  return KNOWN_ENGINES.includes(name as KnownEngineNames);
}

export function isKnownOS(name: string): name is KnownOSNames {
  return KNOWN_OS.includes(name as KnownOSNames);
}
