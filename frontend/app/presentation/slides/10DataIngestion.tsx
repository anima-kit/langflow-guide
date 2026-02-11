import React from "react";
import Image from "next/image";

const SlideDataIngestion: React.FC = () => (
  <section>
    <div className="h-screen r-fit-text r-stretch">
      <h2 className="shadow0">Data Ingestion</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="fragment r-frame shadow1">Input</h3>
          <ul className="shadow2">
            <li className="fragment">File parser</li>
            <li className="fragment">Text splitter</li>
          </ul>
        </div>
        <div>
          <h3 className="fragment r-frame shadow1">Storage</h3>
          <ul className="shadow2">
            <li className="fragment">
              LM Studio provider for <br></br> local embeddings
            </li>
            <li className="fragment">
              Chroma DB for <br></br> storing docs
            </li>
          </ul>
        </div>
      </div>
      <Image
        src="/data-ingestion.png"
        data-preview-link="http://localhost:7860/flow/7c304051-f15c-4aa6-a41d-74276db6f2b3"
        fill={true}
        alt="Data Ingestion"
        className="fragment r-frame r-stretch shadow3"
      ></Image>
    </div>
  </section>
);
export default SlideDataIngestion;
