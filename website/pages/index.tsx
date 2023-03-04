import Header from "@/components/Header";
import { JSONBlob } from "@/components/Pre";
import Head from "next/head";
import { useState } from "react";
import useUserAgent from "use-user-agent";

export default function Home(props: any) {
  const [mockUA, setMockUA] = useState<string | undefined>(undefined);
  const { data: agent } = useUserAgent(mockUA);

  return (
    <>
      <Head>
        <title>platform-ts</title>
      </Head>
      <main>
        <Header />
        <p>
          A type-safe utility for user-agent sniffing. It uses{" "}
          <a href="https://github.com/faisalman/ua-parser-js">ua-parser-js</a>{" "}
          under the hood, but provides a richer API optimized for the most
          common, known results with escape hatches for the rest.
        </p>
        <select
          value={mockUA}
          onChange={(e) => setMockUA(e.target.value || undefined)}
        >
          <option value={""}>Browser Default</option>
          <option value="Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko">
            Internet Explorer 11
          </option>
          <option value="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15">
            Safari 14
          </option>
          <option value="Mozilla/5.0 (X11; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0">
            Firefox 82
          </option>
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
