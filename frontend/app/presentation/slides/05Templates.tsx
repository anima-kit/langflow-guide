import React from "react";
import Image from "next/image";

const SlideTemplates: React.FC = () => (
  <section>
    <div className="h-screen r-fit-text r-stretch">
      <h2 className="shadow0">Templates</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 col-start-1">
          <h3 className="fragment r-frame shadow1">Chat</h3>
        </div>
        <div className="col-span-1 col-start-1">
          <ul className="shadow2">
            <li className="fragment">Basic prompting</li>
            <li className="fragment">Adding memory</li>
          </ul>
        </div>
        <div className="col-span-1 col-start-3">
          <ul className="shadow2">
            <li className="fragment">Prompt chaining</li>
            <li className="fragment">Specialized blog posts</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h3 className="fragment r-frame shadow1">RAG</h3>
          <ul className="shadow2">
            <li className="fragment">Basic retrieval</li>
            <li className="fragment">DB ingestion</li>
            <li className="fragment">DB retrieval</li>
            <li className="fragment">Hybrid retrieval</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h3 className="fragment r-frame shadow1">Agent</h3>
          <ul className="shadow2">
            <li className="fragment">Basic agent</li>
            <li className="fragment">Specialized agents</li>
            <li className="fragment">Multi-agent</li>
            <li className="fragment">LangChain agents</li>
            <li className="fragment">CUGA agent</li>
          </ul>
        </div>
      </div>
      <Image
        src="/langflow-templates.png"
        data-preview-link="http://localhost:7860/"
        fill={true}
        alt="Components"
        className="fragment r-frame r-stretch shadow3"
      ></Image>
    </div>
  </section>
);

export default SlideTemplates;
