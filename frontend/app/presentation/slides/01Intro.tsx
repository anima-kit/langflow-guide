import React from "react";

const SlideIntro: React.FC = () => (
  <section>
    <div className="h-screen r-fit-text r-stretch">
      <h2 className="shadow0">What is Langflow?</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="fragment r-frame shadow1">How?</h3>
          <ul className="shadow2">
            <li className="fragment">Built on LangChain</li>
            <li className="fragment">
              Drag-and-drop <br></br>{" "}
              <span className="font-bold shadow0">Components</span>
            </li>
            <li className="fragment">
              Pre-built <br></br>{" "}
              <span className="font-bold shadow0">Templates</span>
            </li>
            <li className="fragment">Test in Playground</li>
            <li className="fragment">Integrate in site</li>
          </ul>
        </div>
        <div>
          <h3 className="fragment r-frame shadow1">Why?</h3>
          <ul className="shadow2">
            <li className="fragment">Chatbots</li>
            <li className="fragment">RAG</li>
            <li className="fragment">Specialized agents</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default SlideIntro;
