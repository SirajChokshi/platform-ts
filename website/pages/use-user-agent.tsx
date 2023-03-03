import Header from "@/components/Header";
import { Code } from "@/components/Pre";
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
        <p>platform-ts is available as a React hook.</p>
        <h2>Installation</h2>
        <Code
          content={`${COMMANDS[packageManager]} use-user-agent`}
          lang="bash"
        />
      </main>
    </>
  );
}
