import Header from "@/components/Header";
import Link from "next/link";

export default function Error() {
  return (
    <body>
      <main>
        <Header />

        <h2>404 - Page Not Found</h2>
        <p>
          <Link href="/">Go home</Link> &middot;{" "}
          <Link href="/docs">Go to docs</Link>
        </p>
      </main>
    </body>
  );
}
