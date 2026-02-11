import LangflowChat from "@/components/flows/LangflowChat";
import SideNav from "@/components/nav/SideNav";

export default function RAGAgentPage() {
  return (
    <div>
      <SideNav />
      <main className="mt-4 ml-16 p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">RAG Agent</h1>
        <div className="grid grid-cols-2">
          <LangflowChat
            windowTitle="Demo 06 - RAG Agent"
            flowId="91172804-e9d7-4f95-bfe7-554e78c0fd71"
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
              for a RAG agent which can be used to chat with our data. It
              extends the
              <a
                href="/examples/basic-prompting"
                className="text-(--color-pink)"
              >
                {" "}
                basic prompting{" "}
              </a>
              and
              <a href="examples/data-retrieval" className="text-(--color-pink)">
                {" "}
                data retrieval{" "}
              </a>
              examples by utilizing an agent with tools instead of a language
              model component.
              <br></br>
              <br></br>
              Just like in the basic prompting example, this example uses a
              local LLM served through
              <a href="https://lmstudio.ai/" className="text-(--color-pink)">
                {" "}
                LM Studio{" "}
              </a>
              using Langflow`s LM Studio provider component and the built-in
              components for chat input and output. We`ve also added the
              built-in agent component which utilizes our LM Studio language
              model component and given the agent
              <a
                href="https://www.trychroma.com/"
                className="text-(--color-pink)"
              >
                {" "}
                Chroma DB{" "}
              </a>
              and web search tools.
              <br></br>
              <br></br>
              In the
              <a href="/examples/web-search" className="text-(--color-pink)">
                {" "}
                web search{" "}
              </a>
              and
              <a
                href="/examples/data-retrieval"
                className="text-(--color-pink)"
              >
                {" "}
                data retrieval{" "}
              </a>
              examples, we saw how the web DB search components were{" "}
              <em>always</em> triggered, no matter what the user input. By using
              the agent component with the web and DB search components passed
              as tools, the agent can choose when to trigger these components.
              Also, the agent comes with built-in memory, so there`s no need for
              passing a message history component.
              <br></br>
              <br></br>
              See the workflow{" "}
              <a
                href="http://localhost:7860/flow/91172804-e9d7-4f95-bfe7-554e78c0fd71"
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
