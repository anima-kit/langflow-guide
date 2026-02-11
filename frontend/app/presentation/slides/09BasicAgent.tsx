import React from "react";
import Image from "next/image";

const SlideBasicAgent: React.FC = () => (
  <section>
    <div className="h-screen r-fit-text r-stretch">
      <h2 className="shadow0">Basic Agent</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 col-start-1">
          <h3 className="fragment r-frame shadow1">Motivation</h3>
          <ul className="shadow2">
            <li className="fragment">
              Web search always <br></br> triggered
            </li>
            <li className="fragment">
              Tedious routing for <br></br> multiple integrations
            </li>
          </ul>
        </div>
        <div className="col-span-2 col-start-3">
          <h3 className="fragment r-frame shadow1">Agent with Tool</h3>
          <ul className="shadow2">
            <li className="fragment">Routes to proper tool</li>
            <li className="fragment">Parses tool results</li>
            <li className="fragment">Built-in memory</li>
          </ul>
        </div>
        <div className="col-span-4 col-start-1">
          <h3 className="fragment r-frame shadow1">Build</h3>
        </div>
        <div className="col-span-2 col-start-1">
          <ul className="shadow2">
            <li className="fragment">Chat Input</li>
            <li className="fragment">Prompt</li>
            <li className="fragment">LM Studio provider</li>
          </ul>
        </div>
        <div className="col-span-2 col-start-3">
          <ul className="shadow2">
            <li className="fragment">Agent</li>
            <li className="fragment">Tools</li>
            <li className="fragment">Chat Output</li>
          </ul>
        </div>
      </div>
      <Image
        src="/basic-agent.png"
        data-preview-link="http://localhost:7860/flow/ad2387e7-8f80-41ae-90e1-b8040c39b2c2"
        fill={true}
        alt="Basic Agent"
        className="fragment r-frame r-stretch shadow3"
      ></Image>
    </div>
  </section>
);
export default SlideBasicAgent;
