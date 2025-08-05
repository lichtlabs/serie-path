import { createOpenAI, OpenAIProviderSettings } from "@ai-sdk/openai"
import { createOllama, OllamaProviderSettings } from "ollama-ai-provider"

export const SUPPORTED_PROVIDERS = {
    "Open AI": {
        models: ["gpt-3.5-turbo", "gpt-4"],
        config: {
            baseUrl: undefined,
            apiKey: undefined,
        },
    },
    Ollama: {
        models: ["llama3", "mistral"],
        config: {
            baseURL: "http://localhost:11434",
        },
    },
}

type ProviderOptions = {
    model?: string
    provider?: "openai" | "ollama"
    config?: OpenAIProviderSettings | OllamaProviderSettings
}

export function getProvider(opt: ProviderOptions) {
    switch (opt.provider) {
        case "openai":
            return createOpenAI(opt.config)
        case "ollama":
            return createOllama(opt.config)
        default:
            throw new Error(`Unsupported provider: ${opt.provider}`)
    }
}
