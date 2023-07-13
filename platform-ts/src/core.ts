import { UAParser } from "ua-parser-js";
import {
  formatBrowser,
  formatEngine,
  formatOS,
  hasNavigatorUAData,
} from "./utils";
import { PlatformReaderResult } from "./types";
import { timer } from "./async";

export class PlatformReader {
  parser: UAParser;

  constructor(uastring?: string, extensions?: Record<string, unknown>) {
    this.parser = new UAParser(uastring, extensions);
  }

  /** returns if the current UA belongs to the runtime */
  private get isNavigatorUserAgent() {
    return this.parser.getUA() === navigator.userAgent;
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

  getResult(): PlatformReaderResult {
    const res = this.parser.getResult();

    return {
      ...res,
      engine: formatEngine(res.engine),
      os: formatOS(res.os),
      browser: formatBrowser(res.browser),
    };
  }

  async getHighEntropyResult(
    // give up after 2 seconds by default
    timeout: number = 2000
  ): Promise<PlatformReaderResult> {
    const syncResult = this.getResult();

    if (!this.isNavigatorUserAgent) {
      // if the user agent doesn't match the client, then
      // high entropy values are not relevant
      return syncResult;
    }

    if (hasNavigatorUAData(window)) {
      // helper for getting high entropy values
      const _getHighEntropyResult = async () => {
        if (!hasNavigatorUAData(window)) {
          // this should never happen
          throw new Error("FATAL: navigator.userAgentData is not available.");
        }

        return await window.navigator.userAgentData.getHighEntropyValues([
          "architecture",
          "model",
          "platform",
          "platformVersion",
          // TODO support fullVersionList
          // "fullVersionList",
        ]);
      };

      const highEntropyResult = await timer(_getHighEntropyResult(), timeout);

      // if we got a result, use it to fill in the blanks
      if (highEntropyResult) {
        // TODO support mapping platformName to UAParser.js OS name
        // for now we just replace the originalName
        syncResult.os.originalName =
          highEntropyResult?.platform ?? syncResult.os.originalName;

        syncResult.os.version =
          highEntropyResult?.platformVersion ?? syncResult.os.version;
        syncResult.device.model =
          highEntropyResult?.model ?? syncResult.device.model;
        syncResult.cpu.architecture =
          highEntropyResult?.architecture ?? syncResult.cpu.architecture;
      }
    }

    return syncResult;
  }

  setUA(uastring: string) {
    return this.parser.setUA(uastring);
  }
}
