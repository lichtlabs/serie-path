import AIProviderSettings from "@/components/ai-provider-settings"
import Chat from "@/components/chat"
import { Button } from "@/components/ui/button"

export default function ComponentPreviewPage() {
    return (
        <div className="p-8">
            <div className="flex flex-col items-center justify-center gap-6">
                <AIProviderSettings />
                <div className="flex flex-wrap justify-center gap-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="destructive">Destructive</Button>
                </div>
                <Chat />
            </div>
        </div>
    )
}
