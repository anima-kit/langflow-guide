"use client";
import { useEffect } from "react";
import { LangflowChatProps } from "@/types/langflow";

const LAYOUT_SRC =
  "https://cdn.jsdelivr.net/gh/logspace-ai/langflow-embedded-chat@v1.0.7/dist/build/static/js/bundle.min.js";
export default function LangflowChat({
  windowTitle,
  flowId,
  hostUrl,
}: LangflowChatProps) {
  // Load the external script only once
  useEffect(() => {
    if (document.querySelector(`script[src="${LAYOUT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = LAYOUT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <langflow-chat
      window_title={windowTitle}
      flow_id={flowId}
      host_url={hostUrl}
      start_open={true}
    />
  );
}
