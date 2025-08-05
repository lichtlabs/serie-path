"use client"

import { useChat } from "@ai-sdk/react"
import { useAtom } from "jotai"
import { useState } from "react"
import { toast } from "sonner"

import { providerAtom } from "@/lib/atoms"

import { Header } from "./header"
import Messages from "./messages"
import ProjectOverview from "./project-overview"
import Textarea from "./textarea"

/* eslint-disable  @typescript-eslint/no-explicit-any */

export default function Chat() {
    const [input, setInput] = useState("")

    const [providerAtomValue] = useAtom<any>(providerAtom)

    const { sendMessage, messages, status, stop } = useChat({
        onError: (error) => {
            toast.error(
                error.message.length > 0
                    ? error.message
                    : "An error occured, please try again later.",
                { position: "top-center", richColors: true },
            )
        },
    })

    const isLoading = status === "streaming" || status === "submitted"

    return (
        <div className="stretch flex h-dvh w-full flex-col justify-center">
            <Header />
            {messages.length === 0 ? (
                <div className="mx-auto w-full max-w-xl">
                    <ProjectOverview />
                </div>
            ) : (
                <Messages
                    messages={messages}
                    isLoading={isLoading}
                    status={status}
                />
            )}
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    sendMessage(
                        { text: input },
                        { body: { options: providerAtomValue } },
                    )
                    setInput("")
                }}
                className="mx-auto w-full max-w-xl px-4 pb-8 sm:px-0"
            >
                <Textarea
                    handleInputChange={(e) => setInput(e.currentTarget.value)}
                    input={input}
                    isLoading={isLoading}
                    status={status}
                    stop={stop}
                />
            </form>
        </div>
    )
}
