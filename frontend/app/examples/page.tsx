import MainNavButton from "@/components/buttons/MainNavButton";
import SideNav from "@/components/nav/SideNav";

// Page where we can view and manage our examples
export default function ExamplesPage() {
  return (
    <div>
      <SideNav />
      <main className="mt-4 ml-16 p-4">
        <h2 className="text-2xl font-bold mb-4">Examples</h2>
        <div className="mt-2 flex flex-col gap-8">
          <h3 className="text-xl font-bold">Prompting Workflows</h3>
          <div className="flex flex-row gap-2">
            <MainNavButton
              title="Basic Prompting"
              url="/examples/basic-prompting"
            />
            <MainNavButton
              title="Adding Memory"
              url="/examples/adding-memory"
            />
            <MainNavButton title="Web Search" url="/examples/web-search" />
          </div>
          <h3 className="text-xl font-bold">Data Workflows</h3>
          <div className="flex flex-row gap-2">
            <MainNavButton
              title="Data Retrieval"
              url="/examples/data-retrieval"
            />
          </div>
          <h3 className="text-xl font-bold">Agent Workflows</h3>
          <div className="flex flex-row gap-2">
            <MainNavButton title="Basic Agent" url="/examples/basic-agent" />
            <MainNavButton title="RAG Agent" url="/examples/rag-agent" />
          </div>
        </div>
      </main>
    </div>
  );
}
