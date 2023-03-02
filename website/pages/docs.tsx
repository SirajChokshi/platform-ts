import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>api &middot; use-user-agent</title>
      </Head>
      <main>
        <h1>
          <code>
            <Link href="/">use-user-agent</Link> / docs
          </code>
        </h1>
        <p>
          A React hook for user-agent sniffing. It uses{" "}
          <a href="https://github.com/faisalman/ua-parser-js">ua-parser-js</a>{" "}
          under the hood, but provides a richer API optimized for typesafety
          with known results.
        </p>
      </main>
    </>
  );
}
