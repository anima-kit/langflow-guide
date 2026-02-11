import MainNavButton from "@/components/buttons/MainNavButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-90 px-16">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-3xl font-semibold">Learn Langflow!</h1>
          <p className="max-w-md text-lg leading-8">
            Start by heading over to the server, check out some examples, or see
            the presentation.
          </p>
        </div>
        <div className="mt-2 flex flex-row gap-2">
          <MainNavButton title="Server" url="http://localhost:7860" />
          <MainNavButton title="Examples" url="/examples" />
          <MainNavButton title="Presentation" url="/presentation" />
        </div>
      </main>
    </div>
  );
}
