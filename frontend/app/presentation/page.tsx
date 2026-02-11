import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "@/app/globals.css";
import RevealWrapper from "@/components/presentations/RevealWrapper";
import SideNav from "@/components/nav/SideNav";
import SlideTitle from "@/app/presentation/slides/00Title";
import SlideIntro from "@/app/presentation/slides/01Intro";
import SlideGettingStarted from "@/app/presentation/slides/02GettingStarted";
import SlideInstallation from "@/app/presentation/slides/03Installation";
import SlideComponents from "@/app/presentation/slides/04Components";
import SlideTemplates from "@/app/presentation/slides/05Templates";
import SlideBasicPrompting from "@/app/presentation/slides/06BasicPrompting";
import SlideAddingMemory from "@/app/presentation/slides/07AddingMemory";
import SlideWebSearch from "@/app/presentation/slides/08WebSearch";
import SlideBasicAgent from "@/app/presentation/slides/09BasicAgent";
import SlideDataIngestion from "@/app/presentation/slides/10DataIngestion";
import SlideDataRetrieval from "@/app/presentation/slides/11DataRetrieval";
import SlideRAGAgent from "@/app/presentation/slides/12RAGAgent";
import SlideDockerDeploy from "@/app/presentation/slides/13DockerDeploy";
import SlideLangflowChat from "@/app/presentation/slides/14LangflowChat";

export default function Presentation() {
  return (
    <div className="flex">
      <SideNav />
      <main className="mt-4 p-4 flex-1 min-h-screen">
        <RevealWrapper>
          <SlideTitle />
          <SlideIntro />
          <SlideGettingStarted />
          <SlideInstallation />
          <SlideComponents />
          <SlideTemplates />
          <SlideBasicPrompting />
          <SlideAddingMemory />
          <SlideWebSearch />
          <SlideBasicAgent />
          <SlideDataIngestion />
          <SlideDataRetrieval />
          <SlideRAGAgent />
          <SlideDockerDeploy />
          <SlideLangflowChat />
        </RevealWrapper>
      </main>
    </div>
  );
}
