import React from "react";

const SlideGettingStarted: React.FC = () => (
  <section>
    <div className="h-screen r-fit-text r-stretch">
      <h2 className="shadow0">Getting Started</h2>
      <div className="grid grid-cols-4 grid-row-4 gap-4">
        <div className="col-span-4 col-start-1 row-span-1 row-start-1">
          <h3 className="fragment r-frame shadow1">Install</h3>
        </div>
        <div className="col-span-1 col-start-2 row-span-1 row-start-2">
          <ul className="shadow2">
            <li className="fragment">Desktop</li>
            <li className="fragment">Python</li>
          </ul>
        </div>
        <div className="col-span-1 col-start-3 row-span-1 row-start-2">
          <ul className="shadow2">
            <li className="fragment">
              <span className="font-bold shadow0">Docker</span>
            </li>
            <li className="fragment">Source</li>
          </ul>
        </div>
        <div className="col-span-2 col-start-1 row-span-1 row-start-3">
          <h3 className="fragment r-frame shadow1">Components</h3>
        </div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-4">
          <ul className="shadow2">
            <li className="fragment">Built-in</li>
            <li className="fragment">Third-party</li>
          </ul>
        </div>
        <div className="col-span-2 col-start-3 row-span-1 row-start-3">
          <h3 className="fragment r-frame shadow1">Templates</h3>
        </div>
        <div className="col-span-1 col-start-3 row-span-1 row-start-4">
          <ul className="shadow2">
            <li className="fragment">Chat</li>
            <li className="fragment">RAG</li>
          </ul>
        </div>
        <div className="col-span-1 col-start-4 row-span-1 row-start-4">
          <ul className="shadow2">
            <li className="fragment">Agent</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default SlideGettingStarted;
