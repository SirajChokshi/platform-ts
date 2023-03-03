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
        <Note>
          <h2>
            <code>useUserAgent</code> is not very useful (yet)
          </h2>
          <p>
            Currently the React hook is not very useful since{" "}
            <code>platform-ts</code> is fully synchronous. However, it will be
            useful once support is added for async user-agent data sniffing.
          </p>
          <p>
            For example, on macOS the user-agent string has the OS version
            frozen at 10.15.7 regardless of the actual OS version. Instead, this
            information is available asynchronously via the{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/getHighEntropyValues"
              target="_blank"
            >
              <code>getHightEntropyValues()</code>
            </a>{" "}
            API.
          </p>
        </Note>
        <p>
          <code>platform-ts</code> is available as a React hook.
        </p>
        <H id="installation">Installation</H>
        <Code
          content={`${COMMANDS[packageManager]} use-user-agent`}
          lang="bash"
        />
      </main>
    </>
  );
}
