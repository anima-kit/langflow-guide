import React from "react";
import Image from "next/image";

const SlideDockerDeploy: React.FC = () => (
  <section>
    <div className="h-screen r-fit-text r-stretch">
      <h2 className="shadow0">Docker Deploy</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 col-start-1">
          <h3 className="fragment r-frame shadow1">Custom Config</h3>
        </div>
        <div className="col-span-1 col-start-1">
          <ul className="shadow2">
            <li className="fragment">Flows</li>
            <li className="fragment">Components</li>
          </ul>
        </div>
        <div className="col-span-2 col-start-2">
          <ul className="shadow2">
            <li className="fragment">Storage</li>
            <li className="fragment">User config</li>
          </ul>
        </div>
      </div>
      <Image
        src="/docker-deploy.png"
        data-preview-image="/docker-deploy.png"
        fill={true}
        alt="Docker Deploy Langflow"
        className="fragment r-frame r-stretch shadow3"
      ></Image>
    </div>
  </section>
);
export default SlideDockerDeploy;
