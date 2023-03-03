export function Note({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="note">
      {children}
    </div>
  );
}
