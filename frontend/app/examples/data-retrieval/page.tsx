import LangflowChat from "@/components/flows/LangflowChat";
import SideNav from "@/components/nav/SideNav";

export default function DataRetrievalPage() {
  return (
    <div>
      <SideNav />
      <main className="mt-4 ml-16 p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Data Retrieval</h1>
        <div className="grid grid-cols-2">
          <LangflowChat
            windowTitle="Demo 05 - Data Retrieval"
            flowId="24a46822-4148-423f-af3f-6468c55970c3"
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
              for Retrieval Augmented Generation (RAG), e.g. retrieving data
              from a database (DB) and passing the results to an LLM. It extends
              the
              <a
                href="/examples/basic-prompting"
                className="text-(--color-pink)"
              >
                {" "}
                basic prompting{" "}
              </a>
              example by adding functionality for retrieving DB info.
              <br></br>
              <br></br>
              Just like in the basic prompting example, this example uses a
              local LLM served through
              <a href="https://lmstudio.ai/" className="text-(--color-pink)">
                {" "}
                LM Studio{" "}
              </a>
              using Langflow`s LM Studio provider component and the built-in
              components for chat input and output. We`ve also added a
              <a
                href="https://www.trychroma.com/"
                className="text-(--color-pink)"
              >
                {" "}
                Chroma DB{" "}
              </a>
              component which is where our data is stored, and another LM Studio
              provider component for embedding the user input for search.
              <br></br>
              <br></br>
              Just like in the
              <a href="/examples/web-search" className="text-(--color-pink)">
                {" "}
                web search{" "}
              </a>
              example, this workflow <em>always</em> uses the DB search, no
              matter what the user inputs. We`ll see how this issue can be fixed
              in the
              <a href="/examples/basic-agent" className="text-(--color-pink)">
                {" "}
                basic agent{" "}
              </a>
              and
              <a href="/examples/rag-agent" className="text-(--color-pink)">
                {" "}
                RAG agent{" "}
              </a>
              examples.
              <br></br>
              <br></br>
              See the workflow{" "}
              <a
                href="http://localhost:7860/flow/24a46822-4148-423f-af3f-6468c55970c3"
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
              Also, make sure you add data to your Chroma DB using the
              <a
                href="http://localhost:7860/flow/7c304051-f15c-4aa6-a41d-74276db6f2b3"
                className="text-(--color-pink)"
              >
                data ingestion
              </a>{" "}
              workflow.
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
