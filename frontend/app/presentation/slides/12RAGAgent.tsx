import React from "react";
import Image from "next/image";

const SlideRAGAgent: React.FC = () => (
  <section>
    <div className="h-screen r-fit-text r-stretch">
      <h2 className="shadow0">RAG Agent</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="fragment r-frame shadow1">Motivation</h3>
          <ul className="shadow2">
            <li className="fragment">Built-in routing</li>
            <li className="fragment">Built-in parsing</li>
            <li className="fragment">Built-in memory</li>
            <li className="fragment">Multiple tools</li>
          </ul>
        </div>
        <div>
          <h3 className="fragment r-frame shadow1">Build</h3>
          <ul className="shadow2">
            <li className="fragment">Chat Input</li>
            <li className="fragment">Prompt</li>
            <li className="fragment">
              LM Studio <br></br> LLMs and embeddings
            </li>
            <li className="fragment">Chroma DB tool</li>
            <li className="fragment">Web Search tool</li>
            <li className="fragment">Chat Output</li>
          </ul>
        </div>
      </div>
      <Image
        src="/rag-agent.png"
        data-preview-link="http://localhost:7860/flow/91172804-e9d7-4f95-bfe7-554e78c0fd71"
        fill={true}
        alt="RAG Agent"
        className="fragment r-frame r-stretch shadow3"
      ></Image>
    </div>
  </section>
);
export default SlideRAGAgent;
