import Header from "@/components/Header";
import Menu from "@/components/Menu";
import { Code } from "@/components/Pre";
import { COMMANDS, usePreferences } from "@/hooks/usePreferences";
import Head from "next/head";
import Link from "next/link";

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
        <h2 id="getting-started">Getting Started</h2>
        <p style={{ marginBottom: 4 }}>
          <code>platform-ts</code> is a synchronous, type-safe utility for
          user-agent sniffing. You can get it by running:
        </p>
        <Code content={`${COMMANDS[packageManager]} platform-ts`} lang="bash" />
        <h2 id="usage">Usage</h2>
        <h2 id="api">API</h2>
        <h2 id="faq">FAQ</h2>
      </main>
    </>
  );
}
