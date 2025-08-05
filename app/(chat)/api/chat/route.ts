/* eslint-disable  @typescript-eslint/no-explicit-any */
import {
    convertToModelMessages,
    LanguageModel,
    stepCountIs,
    streamText,
    UIMessage,
} from "ai"

import { getProvider } from "@/lib/ai"

export const maxDuration = 30

export async function POST(req: Request) {
    const {
        messages,
        options,
    }: {
        messages: UIMessage[]
        options:
            | {
                  provider: string
                  model: string
                  config: { apiKey: string } | { baseURL: string }
              }
            | any
    } = await req.json()

    const result = streamText({
        model: getProvider(options)(options.model) as LanguageModel,
        system: "You are a helpful assistant.",
        messages: convertToModelMessages(messages),
        stopWhen: stepCountIs(5), // enable multi-step agentic flow
        experimental_telemetry: {
            isEnabled: false,
        },
    })

    return result.toUIMessageStreamResponse({
        sendReasoning: true,
        onError: (error) => {
            if (error instanceof Error) {
                if (error.message.includes("Rate limit")) {
                    return "Rate limit exceeded. Please try again later."
                }
            }
            console.error(error)
            return "An error occurred."
        },
    })
}
