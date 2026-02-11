# Langflow Guide

This is a guide for using Langflow that I created for a talk. It utilizes Langflow on the backend with LM Studio for hosting local LLMs and embedding models and Next on the frontend for displaying the Langflow server, examples, and a presentation.  

## 🏁 Getting started

Clone the repo and navigate there:

```
git clone https://github.com/anima-kit/langflow-guide.git
cd langflow-guide
```

Build and run Docker containers:

```
docker compose up --build
```

Now the frontend should be running on http://localhost:3000 and the Langflow backend on http://localhost:7860/. By default, this app uses a local [LM Studio][lm-studio] server to host LLMs which runs on http://localhost:1234.

When you're done, you can stop and remove the Docker containers with:

```
docker compose down
```

Since the workspace is saved in the Docker container, if you remove the containers and rebuild, everything will be started fresh. If you want to keep your workspace, just start and stop the Docker containers (after initially building) with:

```
docker compose up
docker compose stop
```

## ⏭️ Next steps

When navigating to http://localhost:3000, you'll see some options to:
-   Head to the Langflow server 
    > This is just the Langflow server at http://localhost:7860/ which can be used to interact with the example flows and create your own flows. 
-   Interact with some embedded flow examples 
    > I've added some of the default flows as Langflow chat embeds on the frontend. You can interact with these through utilizing the chat interface.
-   View the presentation
    > This includes some slides explaining Langflow and the repo.

## ⚙️ Tech 

Thanks to all the projects that make this possible:
- [Chroma][chroma]
- [Docker][docker]
- [Langflow][langflow]
- [LM Studio][lm-studio]
- [Next][next]
- [Reveal.js][reveal]
- [Tailwind][tailwind]

## 🔗 Contributing 

This project is a work in progress. If you'd like to suggest or add improvements, clarify your confusion, help others understand, or share your own relevant projects, feel free to contribute through [discussions][discussions]. Check out the [contributing guidelines][contributing] to get started.

## 📑 License

This project is [licensed under MIT][license].

<!-- LINKS -->
[chroma]: https://www.trychroma.com/
[contributing]: CONTRIBUTING.md
[docker]: https://www.docker.com/
[langflow]: https://www.langflow.org/
[license]: LICENSE
[lm-studio]: https://lmstudio.ai/
[next]: https://nextjs.org/
[reveal]: https://revealjs.com/
[tailwind]: https://tailwindcss.com/