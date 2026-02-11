import React from "react";
import Image from "next/image";

const SlideBasicPrompting: React.FC = () => (
  <section>
    <div className="h-screen r-fit-text r-stretch">
      <h2 className="shadow0">Basic Prompting</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 col-start-1">
          <h3 className="fragment r-frame shadow1">Input</h3>
          <ul className="shadow2">
            <li className="fragment">
              Chat Input <br></br> for Playground
            </li>
            <li className="fragment">
              Prompt for <br></br> LLM system message
            </li>
          </ul>
        </div>
        <div className="col-span-2 col-start-3">
          <h3 className="fragment r-frame shadow1">Output</h3>
          <ul className="shadow2">
            <li className="fragment">
              Chat Output <br></br> for Playground
            </li>
          </ul>
        </div>
        <div className="col-span-4 col-start-1">
          <h3 className="fragment r-frame shadow1">Model</h3>
          <ul className="shadow2">
            <li className="fragment">LM Studio provider for local LLMs</li>
            <li className="fragment">Configured to work with Docker</li>
          </ul>
        </div>
      </div>
      <Image
        src="/basic-prompting.png"
        data-preview-link="http://localhost:7860/flow/e98a6dfd-5508-4826-9768-93c7f4075109"
        fill={true}
        alt="Basic Prompting"
        className="fragment r-frame r-stretch shadow3"
      ></Image>
    </div>
  </section>
);
export default SlideBasicPrompting;
