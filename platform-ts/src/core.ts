import { UAParser } from "ua-parser-js";
import { formatBrowser, formatEngine, formatOS } from "./utils";

export class PlatformReader {
  parser: UAParser;

  constructor(uastring?: string, extensions?: Record<string, unknown>) {
    this.parser = new UAParser(uastring, extensions);
  }

  getOS() {
    return formatOS(this.parser.getOS());
  }

  getEngine() {
    return formatEngine(this.parser.getEngine());
  }

  getBrowser() {
    return formatBrowser(this.parser.getBrowser());
  }

  getDevice() {
    return this.parser.getDevice();
  }

  getCPU() {
    return this.parser.getCPU();
  }

  getUA() {
    return this.parser.getUA();
  }

  setUA(uastring: string) {
    return this.parser.setUA(uastring);
  }
}
