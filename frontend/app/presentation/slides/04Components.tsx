import React from "react";
import Image from "next/image";

const SlideComponents: React.FC = () => (
  <section>
    <div className="h-screen r-fit-text r-stretch">
      <h2 className="shadow0">Components</h2>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <h3 className="fragment r-frame shadow1">Built-in</h3>
          <ul className="shadow2">
            <li className="fragment">Input/Ouput</li>
            <li className="fragment">Models</li>
            <li className="fragment">Files</li>
            <li className="fragment">Data sources</li>
            <li className="fragment">Data processing</li>
            <li className="fragment">Flow control</li>
          </ul>
        </div>
        <div>
          <h3 className="fragment r-frame shadow1">Third-party</h3>
          <ul className="shadow2">
            <li className="fragment">
              Local models with <br></br> LM Studio/Ollama
            </li>
            <li className="fragment">DB search with Chroma/Milvus</li>
            <li className="fragment">
              Data search with <br></br> DuckDuckGo/arXiv/Wiki
            </li>
            <li className="fragment">Data processing with Docling</li>
            <li className="fragment">LangChain integration</li>
          </ul>
        </div>
      </div>
      <Image
        src="/langflow-components.png"
        data-preview-link="http://localhost:7860/"
        fill={true}
        alt="Components"
        className="fragment r-frame r-stretch shadow3"
      ></Image>
    </div>
  </section>
);

export default SlideComponents;
