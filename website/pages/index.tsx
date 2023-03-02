import { JSONBlob } from "@/components/Pre";
import Head from "next/head";
import Link from "next/link";
import { PropsWithChildren, useEffect, useState } from "react";
import useUserAgent from "use-user-agent";

export default function Home() {
  const [mockUA, setMockUA] = useState<string | undefined>(undefined);
  const agent = useUserAgent(mockUA);

  return (
    <>
      <Head>
        <title>use-user-agent</title>
      </Head>
      <main>
        <h1>
          <code>
            use-user-agent / <Link href="/docs">docs</Link>
          </code>
        </h1>
        <p>
          A React hook for user-agent sniffing. It uses{" "}
          <a href="https://github.com/faisalman/ua-parser-js">ua-parser-js</a>{" "}
          under the hood, but provides a richer API optimized for typesafety
          with known results.
        </p>
        <select
          value={mockUA}
          onChange={(e) => setMockUA(e.target.value || undefined)}
        >
          <option value={""}>Browser Default</option>
          <option value="Mozilla/5.0 (iPhone13,2; U; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/15E148 Safari/602.1">
            iPhone 12
          </option>
          <option value="Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36">
            Pixel 5
          </option>
          <option value="Mozilla/5.0 (Linux; Android 4.4.3; KFTHWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/47.1.79 like Chrome/47.0.2526.80 Safari/537.36">
            Kindle Fire HDX
          </option>
          <option value="Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36">
            Samsung Galaxy S10
          </option>
        </select>
        <JSONBlob content={agent} />
      </main>
    </>
  );
}
