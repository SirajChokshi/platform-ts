import Header from "@/components/Header";
import { Note } from "@/components/Note";
import { Code } from "@/components/Pre";
import { H } from "@/components/Typography";
import { COMMANDS, usePreferences } from "@/hooks/usePreferences";
import Head from "next/head";

export default function Home() {
  const { packageManager } = usePreferences();

  return (
    <>
      <Head>
        <title>react &middot; platform-ts</title>
      </Head>
      <main>
        <Header />
        <p>
          <code>platform-ts</code> is available as a React hook called{" "}
          <code>useUserAgent</code>. The user agent is particularly helpful for
          hardware and operating system detection.
        </p>
        <p>
          For example, on macOS the user-agent string has the OS version frozen
          at 10.15.7 regardless of the actual OS version. Instead, this
          information is available asynchronously via the{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/getHighEntropyValues"
            target="_blank"
          >
            <code>getHighEntropyValues()</code>
          </a>{" "}
          API. useUserAgent will immediately return the information parsed from
          the user agent string, and will update asynchronously when the high
          entropy values are available.
        </p>
        <Note>
          <h2>Note</h2>
          <p>
            Since the high entropy values are only available in the current
            browser, you will get the most value out of this hook when using it
            to detect a client&apos;s browser as opposed to arbitrary user agent
            strings.
          </p>
          <h4>GOOD:</h4>
          <ul>
            <li>
              <code>useUserAgent()</code>
            </li>
          </ul>
          <h4>BAD:</h4>
          <ul>
            <li>
              <code>useUserAgent(navigator.userAgent)</code>
            </li>
            <li>
              <code>useUserAgent(myArbitraryString)</code>
            </li>{" "}
          </ul>
        </Note>
        <H id="installation">Installation</H>
        <Code
          content={`${COMMANDS[packageManager]} use-user-agent`}
          lang="bash"
        />
        <H id="usage">Usage</H>
        <Code
          content={`import { useUserAgent } from "platform-ts";

function MyComponent() {
  const { browser, os } = useUserAgent();

  return (
    <p>
      You are using {browser.name} on {os.name}.
    </p>
  );
}`}
          lang="tsx"
        />
      </main>
    </>
  );
}
