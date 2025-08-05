"use client"

import { useAtom } from "jotai"

import { SUPPORTED_PROVIDERS } from "@/lib/ai"
import { providerAtom } from "@/lib/atoms"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"

/* eslint-disable  @typescript-eslint/no-explicit-any */

export default function ModelPicker({ className }: { className?: string }) {
    const [providerAtomValue, providerAtomSetValue] = useAtom<any>(providerAtom)

    function handleModelChange(modelId: string) {
        providerAtomSetValue({ ...providerAtomValue, model: modelId })
    }

    return (
        <div className={className}>
            <Select
                value={providerAtomValue?.model}
                onValueChange={handleModelChange}
            >
                <SelectTrigger className="border-none ring-0 outline-none focus:border-none focus:ring-0 focus:outline-none">
                    <SelectValue
                        placeholder={
                            providerAtomValue?.provider
                                ? "Select a model"
                                : "⚠ Configure a provider first"
                        }
                    />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {(SUPPORTED_PROVIDERS as any)[
                            providerAtomValue?.provider
                        ]?.models?.map((modelId: string) => (
                            <SelectItem key={modelId} value={modelId}>
                                {modelId}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
