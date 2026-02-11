import React from "react";
import Image from "next/image";

const SlideWebSearch: React.FC = () => (
  <section>
    <div className="h-screen r-fit-text r-stretch">
      <h2 className="shadow0">Web Search</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="fragment r-frame shadow1">Chat with Memory</h3>
          <ul className="shadow2">
            <li className="fragment">Chat Input</li>
            <li className="fragment">Prompt</li>
            <li className="fragment">LM Studio provider</li>
            <li className="fragment">Message History</li>
            <li className="fragment">Chat Output</li>
          </ul>
        </div>
        <div>
          <h3 className="fragment r-frame shadow1">Add Web Search</h3>
          <ul className="shadow2">
            <li className="fragment">Basic Web Search</li>
            <li className="fragment">Results Parser</li>
            <li className="fragment">Give Prompt parsed results</li>
          </ul>
        </div>
      </div>
      <Image
        src="/web-search.png"
        data-preview-link="http://localhost:7860/flow/953d9bc1-9c38-4f1a-9bed-dcbd18448c88"
        fill={true}
        alt="Web Search"
        className="fragment r-frame r-stretch shadow3"
      ></Image>
    </div>
  </section>
);
export default SlideWebSearch;
