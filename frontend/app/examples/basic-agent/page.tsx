import LangflowChat from "@/components/flows/LangflowChat";
import SideNav from "@/components/nav/SideNav";

export default function BasicAgentPage() {
  return (
    <div>
      <SideNav />
      <main className="mt-4 ml-16 p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Basic Agent</h1>
        <div className="grid grid-cols-2">
          <LangflowChat
            windowTitle="Demo 03 - Basic Agent"
            flowId="ad2387e7-8f80-41ae-90e1-b8040c39b2c2"
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
              for a basic agent with a single tool. It extends the
              <a
                href="/examples/basic-prompting"
                className="text-(--color-pink)"
              >
                {" "}
                basic prompting{" "}
              </a>
              example by utilizing an agent instead of a language model
              component.
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
              model component and given the agent a web search tool.
              <br></br>
              <br></br>
              In the
              <a href="/examples/web-search" className="text-(--color-pink)">
                {" "}
                web search{" "}
              </a>
              example, we saw how the web search component was <em>always</em>,
              no matter what the user input. By using the agent component with
              the web search component passed as a tool, the agent can choose
              when to trigger this component. Also, the agent comes with
              built-in memory, so there`s no need for passing a message history
              component.
              <br></br>
              <br></br>
              See the workflow{" "}
              <a
                href="http://localhost:7860/flow/ad2387e7-8f80-41ae-90e1-b8040c39b2c2"
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
