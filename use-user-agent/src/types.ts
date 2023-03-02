import { IBrowser, ICPU, IDevice, IResult } from "ua-parser-js";
import { KNOWN_ENGINES, KNOWN_OS } from "./const";

export type KnownEngineNames = typeof KNOWN_ENGINES[number];
export type KnownOSNames = typeof KNOWN_OS[number];

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
  name: string;
  originalName: string;
  version?: string;
  known: true;
}

export interface UseUserAgentData {
  engine: Engine;
  os: OS;
  cpu: ICPU;
  browser: IBrowser;
  device: IDevice;
  ua: string;
}
