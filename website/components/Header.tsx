import { THEME_TO_LABEL, Theme, getNextTheme } from "@/utils/theme";
import { useTheme } from "next-themes";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect, useState } from "react";

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

function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted || !theme) {
    return null;
  }

  const nextTheme = getNextTheme(theme);

  return (
    <button onClick={() => setTheme(nextTheme)}>
      {THEME_TO_LABEL[theme as Theme]}
    </button>
  );
}

export default function Header() {
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
        <ThemeButton />
      </header>
      <hr />
    </>
  );
}
