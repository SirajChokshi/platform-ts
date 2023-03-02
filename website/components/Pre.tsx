import { useEffect, useMemo, useState } from "react";
import hljs from "highlight.js";
import {
  usePreferences,
  PACKAGE_MANAGERS,
  packageManager,
} from "@/hooks/usePreferences";

interface CodeProps {
  content: string;
  lang?: string;
  tag?: boolean;
}

function PackageManagerSelect() {
  const { packageManager, setPackageManager } = usePreferences();

  return (
    <div role="tablist">
      {PACKAGE_MANAGERS.map((value) => (
        <button
          role="tab"
          aria-selected={value === packageManager}
          key={value}
          onClick={() => setPackageManager(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export function Code({ content, lang, tag = true }: CodeProps) {
  const highlighted = useMemo(() => {
    if (!lang) {
      return content;
    }

    return hljs.highlight(content, {
      language: lang,
    }).value;
  }, [content, lang]);

  let codeBlock = (
    <pre className="code">
      {tag && lang && <div className="code__lang-tag">{lang}</div>}

      <code
        className="code__inner"
        dangerouslySetInnerHTML={{
          __html: highlighted,
        }}
      />
    </pre>
  );

  if (lang !== "bash") {
    return codeBlock;
  }

  return (
    <div className="code-with-package-manager__container">
      <PackageManagerSelect />
      {codeBlock}
    </div>
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
