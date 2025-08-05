"use client"

import { useAtom, useSetAtom } from "jotai"
import { Fragment } from "react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SUPPORTED_PROVIDERS } from "@/lib/ai"
import { providerAtom } from "@/lib/atoms"

import ModelPicker from "./model-picker"
import { Badge } from "./ui/badge"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"

/* eslint-disable  @typescript-eslint/no-explicit-any */

export default function AIProviderSettings() {
    const [providerAtomValue] = useAtom<any>(providerAtom)
    const providerAtomSetValue = useSetAtom(providerAtom)

    function handleSetProvider(provider: keyof typeof SUPPORTED_PROVIDERS) {
        providerAtomSetValue((prev: any) => ({
            ...prev,
            provider,
        }))
    }

    function handleSetConfig(config: any) {
        providerAtomSetValue((prev: any) => ({
            ...prev,
            config,
        }))
    }

    function handleSave() {
        const defaultConfig = (SUPPORTED_PROVIDERS as any)[
            providerAtomValue?.provider ?? "Ollama"
        ]?.config

        providerAtomSetValue((prev: any) => ({
            ...prev,
            provider: prev?.provider,
            model: prev?.model,
            config: {
                ...defaultConfig,
                ...prev?.config,
            },
        }))
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    {providerAtomValue?.provider && providerAtomValue?.model ? (
                        <>
                            <span>{providerAtomValue?.provider}</span>
                            <Badge variant="secondary">
                                {providerAtomValue?.model}
                            </Badge>
                        </>
                    ) : (
                        "Configure Provider"
                    )}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>AI Provider Settings</DialogTitle>
                    <DialogDescription>
                        Configure your AI provider settings here. Click save
                        when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="provider">Provider</Label>
                        <Select
                            onValueChange={handleSetProvider}
                            defaultValue={providerAtomValue?.provider}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a provider" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.keys(SUPPORTED_PROVIDERS).map(
                                    (provider) => (
                                        <SelectItem
                                            key={provider}
                                            value={provider}
                                        >
                                            {provider}
                                        </SelectItem>
                                    ),
                                )}
                            </SelectContent>
                        </Select>
                    </div>
                    {providerAtomValue?.provider && (
                        <div className="grid gap-3">
                            <Label htmlFor="model">Model</Label>
                            <ModelPicker />
                        </div>
                    )}
                    {providerAtomValue?.provider &&
                        providerAtomValue?.model && (
                            <div className="grid gap-3">
                                {Object.keys(
                                    (SUPPORTED_PROVIDERS as any)[
                                        providerAtomValue.provider
                                    ]?.config,
                                ).map((configKey) => (
                                    <Fragment key={configKey}>
                                        <Label htmlFor={configKey}>
                                            {configKey}
                                        </Label>
                                        <Input
                                            id={configKey}
                                            defaultValue={
                                                (SUPPORTED_PROVIDERS as any)[
                                                    providerAtomValue.provider
                                                ]?.config[configKey]
                                            }
                                            placeholder={`Enter your ${configKey}`}
                                            onChange={(e) =>
                                                handleSetConfig(
                                                    (prevConfig: any) => ({
                                                        ...prevConfig,
                                                        [configKey]:
                                                            e.target.value,
                                                    }),
                                                )
                                            }
                                        />
                                    </Fragment>
                                ))}
                            </div>
                        )}
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button onClick={handleSave}>Save changes</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
