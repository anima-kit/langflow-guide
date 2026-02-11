import React from "react";
import Image from "next/image";

const SlideLangflowChat: React.FC = () => (
  <>
    <section>
      <div className="h-screen r-fit-text r-stretch">
        <h2 className="shadow0">Langflow Chat</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 col-start-1">
            <h3 className="fragment r-frame shadow1">Motivation</h3>
          </div>
          <div className="col-span-1 col-start-1">
            <ul className="shadow2">
              <li className="fragment">Embed flow in site</li>
              <li className="fragment">Chat with flow</li>
            </ul>
          </div>
          <div className="col-span-1 col-start-2">
            <ul className="shadow2">
              <li className="fragment">Limited components</li>
              <li className="fragment">API for more complex flows</li>
            </ul>
          </div>
        </div>
        <Image
          src="/langflow-chat.png"
          data-preview-image="/langflow-chat.png"
          fill={true}
          alt="Langflow Chat Embed"
          className="fragment r-frame r-stretch shadow3"
        ></Image>
      </div>
    </section>
  </>
);
export default SlideLangflowChat;
