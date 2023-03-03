import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Item {
  id: string;
  label: string;
  sublinks?: Item[];
}

function MenuItem(props: Item) {
  return (
    <li>
      <a href={`#${props.id}`}>{props.label}</a>
      {props.sublinks && (
        <ul>
          {props.sublinks.map((sublink) => (
            <MenuItem key={sublink.id} {...sublink} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Menu() {
  const router = useRouter();

  const [links, setLinks] = useState<Item[]>([]);

  console.log(links);

  useEffect(() => {
    const links: Item[] = [];

    console.log("looking for links..");

    document.querySelectorAll("h2, h3").forEach((heading) => {
      const id = heading.getAttribute("id");
      const label = heading.textContent;

      if (!id || !label) {
        return;
      }

      const item: Item = {
        id,
        label,
      };

      if (heading.tagName === "H3") {
        const parent = heading.parentElement;

        if (!parent) {
          return;
        }

        const parentHeading = parent.previousElementSibling;

        if (!parentHeading || parentHeading.tagName !== "H2") {
          return;
        }

        const parentId = parentHeading.getAttribute("id");

        if (!parentId) {
          return;
        }

        const parentLink = links.find((link) => link.id === parentId);

        if (!parentLink) {
          return;
        }

        if (!parentLink.sublinks) {
          parentLink.sublinks = [];
        }

        parentLink.sublinks.push(item);
      }

      links.push(item);
    });

    setLinks(links);
  }, [router.pathname]);

  return (
    <nav id="menu">
      <h3>Table of Contents</h3>
      <ul>
        {links.map((link) => (
          <MenuItem key={link.id} {...link} />
        ))}
      </ul>
    </nav>
  );
}
