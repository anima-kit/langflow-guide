"use client";
import { useEffect, useRef } from "react";
export default function RevealWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    Promise.all([
      import("reveal.js"),
      import("reveal.js/plugin/markdown/markdown.esm.js"),
      import("reveal.js/plugin/highlight/highlight.esm.js"),
      import("reveal.js/plugin/zoom/zoom.esm.js"),
      import("reveal.js/plugin/notes/notes.esm.js"),
      import("reveal.js/plugin/search/search.esm.js"),
    ]).then(
      ([
        { default: Reveal },
        { default: RevealMarkdown },
        { default: RevealHighlight },
        { default: RevealZoom },
        { default: RevealNotes },
        { default: RevealSearch },
      ]) => {
        if (!deckRef.current && deckDivRef.current) {
          deckRef.current = new Reveal(deckDivRef.current, {
            controlsBackArrows: "visible",
            slideNumber: "c/t",
            hash: true,
            mouseWheel: true,
            plugins: [
              RevealMarkdown,
              RevealHighlight,
              RevealZoom,
              RevealNotes,
              RevealSearch,
            ],
          });
          deckRef.current.initialize({ center: false });
        }
      },
    );
    return () => {
      if (deckRef.current) {
        deckRef.current.destroy();
        deckRef.current = null;
      }
    };
  }, []);
  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">{children}</div>
    </div>
  );
}
