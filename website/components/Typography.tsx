interface HProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function H({ as = "h2", children, ...props }: HProps) {
  const Component = as;

  const className = [props.className, "heading"].filter(Boolean).join(" ");

  return (
    <Component {...props} data-anchor-id={props.id} className={className}>
      <a style={{ all: "unset" }} href={props.id ? `#${props.id}` : undefined}>
        {children}
      </a>
    </Component>
  );
}
