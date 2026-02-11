# Use the latest version of the base Langflow image
FROM langflowai/langflow:latest

# Create folders and set the working directory in the container
RUN mkdir /app/flows
RUN mkdir /app/langflow-config-dir
WORKDIR /app

# Copy flows, langflow-config-dir, and .env to the container
COPY flows /app/flows
COPY langflow-config-dir /app/langflow-config-dir
COPY components /app/components
COPY .env /app/.env

CMD ["langflow", "run", "--env-file","/app/.env"]
