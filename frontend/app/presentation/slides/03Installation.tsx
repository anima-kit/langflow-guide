import React from "react";
import Image from "next/image";

const SlideInstallation: React.FC = () => (
  <section>
    <div className="h-screen r-fit-text r-stretch">
      <h1 className="shadow0">Installation</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 col-start-1">
          <h2 className="fragment r-frame shadow1">Desktop</h2>
          <ul className="shadow2">
            <li className="fragment">
              Easy install{" "}
              <a className="shadow3" href="https://www.langflow.org/desktop">
                here
              </a>
            </li>
            <li className="fragment">Sign up for access</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h2 className="fragment r-frame shadow1">Python</h2>
          <ul className="shadow2">
            <li className="fragment">
              Easy install with <code>uv</code>{" "}
              <pre>uv pip install langflow</pre>
            </li>
            <li className="fragment">
              Run with
              <pre>uv run langflow run</pre>
            </li>
            <li className="fragment">
              Full instructions
              <a
                className="shadow3"
                href="https://docs.langflow.org/get-started-installation#install-and-run-the-langflow-oss-python-package"
              >
                {" "}
                here{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h2 className="fragment r-frame shadow1">Docker</h2>
          <ul className="shadow2">
            <li className="fragment">
              Easy build and run with
              <pre>docker run -p 7860:7860 langflowai/langflow:latest</pre>
            </li>
            <li className="fragment">
              Containerize app with{" "}
              <span className="font-bold shadow0">custom config</span>
            </li>
            <li className="fragment">
              Full instructions
              <a
                className="shadow3"
                href="https://docs.langflow.org/develop-application"
              >
                {" "}
                here{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Image
        src="/langflow-homepage.png"
        data-preview-link="http://localhost:7860/"
        fill={true}
        alt="Components"
        className="fragment r-frame r-stretch shadow3"
      ></Image>
    </div>
  </section>
);

export default SlideInstallation;
