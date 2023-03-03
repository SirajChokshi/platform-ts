import { useTheme } from "next-themes";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

function NavLink(props: PropsWithChildren<LinkProps>) {
  const router = useRouter();
  const isActive = router.pathname === props.href;

  let { children, ...rest } = props;

  if (isActive) {
    children = <h1>{children}</h1>;
  }

  return (
    <Link {...rest} data-is-active={isActive}>
      {children}
    </Link>
  );
}

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header>
        <nav>
          <NavLink href="/">platform-ts</NavLink>
          <span>&middot;</span>
          <NavLink href="/use-user-agent">use-user-agent</NavLink>
          <span>&middot;</span>
          <NavLink href="/docs">docs</NavLink>
        </nav>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "Light" : "Dark"}
        </button>
      </header>
      <hr />
    </>
  );
}
