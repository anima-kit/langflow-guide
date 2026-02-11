import LangflowChat from "@/components/flows/LangflowChat";
import SideNav from "@/components/nav/SideNav";

export default function WebSearchPage() {
  return (
    <div>
      <SideNav />
      <main className="mt-4 ml-16 p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Web Search</h1>
        <div className="grid grid-cols-2">
          <LangflowChat
            windowTitle="Demo 02 - Web Search"
            flowId="953d9bc1-9c38-4f1a-9bed-dcbd18448c88"
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
              for adding web search to a chat workflow. It extends the
              <a
                href="/examples/basic-prompting"
                className="text-(--color-pink)"
              >
                {" "}
                basic prompting{" "}
              </a>
              and
              <a href="/examples/adding-memory" className="text-(--color-pink)">
                {" "}
                adding memory{" "}
              </a>
              examples.
              <br></br>
              <br></br>
              Just like in these examples, this example uses a local LLM served
              through
              <a href="https://lmstudio.ai/" className="text-(--color-pink)">
                {" "}
                LM Studio{" "}
              </a>
              using Langflow`s LM Studio provider component and the built-in
              components for chat input and output. We`ve also kept the built-in
              message history component from the adding memory example and added
              the built-in web search component to be passed to the LLM.
              <br></br>
              <br></br>A major downside of this workflow is that it{" "}
              <em>always</em> uses the web search, no matter what the user
              inputs. In the
              <a href="/examples/basic-agent" className="text-(--color-pink)">
                {" "}
                basic agent{" "}
              </a>
              example, we`ll see how this issue can be fixed.
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
