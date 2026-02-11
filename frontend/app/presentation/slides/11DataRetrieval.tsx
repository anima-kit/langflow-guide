import React from "react";
import Image from "next/image";

const SlideDataRetrieval: React.FC = () => (
  <section>
    <div className="h-screen r-fit-text r-stretch">
      <h2 className="shadow0">Data Retrieval</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 col-start-1">
          <h3 className="fragment r-frame shadow1">Input</h3>
          <ul className="shadow2">
            <li className="fragment">Chat Input</li>
            <li className="fragment">Prompt</li>
            <li className="fragment">
              LM Studio provider <br></br> to embed input
            </li>
          </ul>
        </div>
        <div className="col-span-2 col-start-3">
          <h3 className="fragment r-frame shadow1">Output</h3>
          <ul className="shadow2">
            <li className="fragment">
              LM Studio provider to generate <br></br> based on results
            </li>
            <li className="fragment">Chat Output</li>
          </ul>
        </div>
        <div className="col-span-4 col-start-1">
          <h3 className="fragment r-frame shadow1">Retrieval</h3>
          <ul className="shadow2">
            <li className="fragment">Chroma DB with docs</li>
            <li className="fragment">Results parser</li>
          </ul>
        </div>
      </div>
      <Image
        src="/data-retrieval.png"
        data-preview-link="http://localhost:7860/flow/24a46822-4148-423f-af3f-6468c55970c3"
        fill={true}
        alt="Data Retrieval"
        className="fragment r-frame r-stretch shadow3"
      ></Image>
    </div>
  </section>
);
export default SlideDataRetrieval;
