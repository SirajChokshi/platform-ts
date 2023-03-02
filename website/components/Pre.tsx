import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import hljs, { Language } from "highlight.js";

interface CodeProps {
  content: string;
  lang?: string;
}

function Code({ content, lang }: CodeProps) {
  const highlighted = useMemo(() => {
    if (!lang) {
      return content;
    }

    return hljs.highlight(content, {
      language: lang,
    }).value;
  }, [content, lang]);

  return (
    <pre>
      <code
        dangerouslySetInnerHTML={{
          __html: highlighted,
        }}
      />
    </pre>
  );
}

interface BlobProps {
  content: any;
}

export function JSONBlob({ content }: BlobProps) {
  // avoid hydration mismatch
  const [inner, setInner] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (typeof content !== "string") {
      setInner(JSON.stringify(content, null, 2));
    } else {
      setInner(content);
    }
  }, [content]);

  if (!inner) {
    return null;
  }

  return <Code content={inner} lang={"json"} />;
}
