import Header from "@/components/Header";

export default function Error() {
  return (
    <body>
      <main>
        <Header />

        <h2>404 - Page Not Found</h2>
        <p>
          <a href="/">Go home</a> &middot; <a href="/docs">Go to docs</a>
        </p>
      </main>
    </body>
  );
}
