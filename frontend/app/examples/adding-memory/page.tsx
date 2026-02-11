import LangflowChat from "@/components/flows/LangflowChat";
import SideNav from "@/components/nav/SideNav";

export default function AddingMemoryPage() {
  return (
    <div>
      <SideNav />
      <main className="mt-4 ml-16 p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Adding Memory</h1>
        <div className="grid grid-cols-2">
          <LangflowChat
            windowTitle="Demo 01 - Adding Memory"
            flowId="79cdaf79-9235-4512-934d-d37abb9a0c97"
            hostUrl="http://localhost:7860"
          />
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">
              This example is a
              <a
                href="https://github.com/langflow-ai/langflow-embedded-chat"
                className="text-(--color-pink)"
              >
                {" "}
                Langflow embedded chat{" "}
              </a>
              for adding memory to a chat workflow. It extends the basic
              prompting example
              <a
                href="/examples/basic-prompting"
                className="text-(--color-pink)"
              >
                {" "}
                here
              </a>
              .<br></br>
              <br></br>
              Just like in the basic prompting example, this example uses a
              local LLM served through
              <a href="https://lmstudio.ai/" className="text-(--color-pink)">
                {" "}
                LM Studio{" "}
              </a>
              using Langflow`s LM Studio provider component and the built-in
              components for chat input and output. We`ve also added the
              built-in message history component to store and retrieve the chat
              history and pass this history to the LLM.
              <br></br>
              <br></br>
              See the workflow{" "}
              <a
                href="http://localhost:7860/flow/79cdaf79-9235-4512-934d-d37abb9a0c97"
                className="text-(--color-pink)"
              >
                here
              </a>
              .
            </h2>
            <p className="text-lg">
              <br></br>
              <br></br>
              To get started make sure your LM Studio server is running with an
              appropriate model and that you`ve started the app with Docker.
              <br></br>
              <br></br>
              See full instructions for getting started{" "}
              <a
                href="https://github.com/anima-kit/langflow-guide"
                className="text-(--color-pink)"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
