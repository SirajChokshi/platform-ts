import Header from "@/components/Header";
import Menu from "@/components/Menu";
import { Code } from "@/components/Pre";
import { H } from "@/components/Typography";
import { COMMANDS, usePreferences } from "@/hooks/usePreferences";
import Head from "next/head";

export default function Home() {
  const { packageManager } = usePreferences();

  return (
    <>
      <Head>
        <title>docs &middot; platform-ts</title>
      </Head>
      <main>
        <Header />
        <Menu />
        <H id="getting-started">Getting Started</H>
        <p style={{ marginBottom: 4 }}>
          <code>platform-ts</code> is a synchronous, type-safe utility for
          user-agent sniffing. You can get it by running:
        </p>
        <Code content={`${COMMANDS[packageManager]} platform-ts`} lang="bash" />
        <H id="usage">Usage</H>
        <p>
          This module uses discriminated unions to represent the distinction
          between common, known browsers, engines, devices, and operating
          systems. The following example shows the structure of the{" "}
          <code>Browser</code> type:
        </p>
        <Code
          content={`export interface UnknownBrowser {
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

export type Browser = UnknownBrowser | KnownBrowser;`}
          lang="typescript"
        />

        <p>
          We can use this type to determine the user&apos;s browser with type
          inference. The following example shows how to use the{" "}
          <code>Browser</code> type to determine the user&apos;s browser:
        </p>

        <Code
          content={`import { PlatformReader } from "platform-ts";

const platform = new PlatformReader();
const browser = platform.getBrowser();

if (browser.known) {
  // browser name can be autocompleted here
  // one of the \`KnownBrowserNames\` is available
  console.log(browser.name);
} else {
  // browser name is unknown
  // \`name\` is null, but \`originalName\` is available
  // if the user agent string is parsable
  console.log(browser.originalName);
}
`}
          lang="typescript"
        />

        <H id="api">API</H>
        <H id="faq">FAQ</H>
      </main>
    </>
  );
}
