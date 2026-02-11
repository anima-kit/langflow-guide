import React from "react";
import Image from "next/image";

const SlideAddingMemory: React.FC = () => (
  <section>
    <div className="h-screen r-fit-text r-stretch">
      <h2 className="shadow0">Adding Memory</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="fragment r-frame shadow1">Basic Prompting</h3>
          <ul className="shadow2">
            <li className="fragment">Chat Input</li>
            <li className="fragment">Prompt</li>
            <li className="fragment">LM Studio provider</li>
            <li className="fragment">Chat Output</li>
          </ul>
        </div>
        <div>
          <h3 className="fragment r-frame shadow1">Add Memory</h3>
          <ul className="shadow2">
            <li className="fragment">Message History</li>
            <li className="fragment">
              Give Prompt <br></br> message history context
            </li>
          </ul>
        </div>
      </div>
      <Image
        src="/adding-memory.png"
        data-preview-link="http://localhost:7860/flow/79cdaf79-9235-4512-934d-d37abb9a0c97"
        fill={true}
        alt="Adding Memory"
        className="fragment r-frame r-stretch shadow3"
      ></Image>
    </div>
  </section>
);
export default SlideAddingMemory;
