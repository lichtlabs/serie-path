"use client"

import { useAtom, useSetAtom } from "jotai"
import { atomWithStorage, createJSONStorage } from "jotai/utils"
import { Fragment, useState } from "react"

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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"

const storage = createJSONStorage(() => sessionStorage)
const providerAtom = atomWithStorage("provider", {}, storage)

export default function AIProviderSettings() {
    const [provider, setProvider] = useState<string>()
    const [model, setModel] = useState<string>()
    const [config, setConfig] = useState<{}>({})

    const [providerAtomValue] = useAtom(providerAtom)
    const providerAtomSetValue = useSetAtom(providerAtom)

    function handleSave() {
        providerAtomSetValue({ provider, model, config })
    }

    console.log(providerAtomValue)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    {provider && model
                        ? `${provider} > ${model}`
                        : "Configure Provider"}
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
                        <Select onValueChange={(e) => setProvider(e)}>
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
                    {provider && (
                        <div className="grid gap-3">
                            <Label htmlFor="model">Models</Label>
                            <Select onValueChange={(e) => setModel(e)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a model" />
                                </SelectTrigger>
                                <SelectContent>
                                    {SUPPORTED_PROVIDERS[
                                        provider as keyof typeof SUPPORTED_PROVIDERS
                                    ].models.map((model) => (
                                        <SelectItem key={model} value={model}>
                                            {model}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    )}
                    {provider && model && (
                        <div className="grid gap-3">
                            {Object.keys(
                                SUPPORTED_PROVIDERS[
                                    provider as keyof typeof SUPPORTED_PROVIDERS
                                ].config,
                            ).map((configKey) => (
                                <Fragment key={configKey}>
                                    <Label htmlFor={configKey}>
                                        {configKey}
                                    </Label>
                                    <Input
                                        id={configKey}
                                        defaultValue={
                                            (SUPPORTED_PROVIDERS as any)[
                                                provider
                                            ].config[configKey]
                                        }
                                        placeholder={`Enter your ${configKey}`}
                                        onChange={(e) =>
                                            setConfig((prevConfig) => ({
                                                ...prevConfig,
                                                [configKey]: e.target.value,
                                            }))
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
                    <Button onClick={handleSave}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
