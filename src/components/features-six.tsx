import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUp, CalendarCheck, Globe, MessageCircle, Phone, Play, Plus, Signature, Sparkles, Users } from 'lucide-react'
import Image from 'next/image'

const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const THEO_AVATAR = 'https://avatars.githubusercontent.com/u/68236786?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

export default function FeaturesSection() {
    return (
        <section id="features">
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground max-w-2xl text-balance text-4xl font-semibold">How I Work</h2>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card
                            className="group overflow-hidden p-6" style={{backgroundColor: '#F3F3F3'}}>
                            <MessageCircle className="text-primary size-5" />
                            <h3 className="text-foreground mt-5 text-lg font-semibold">Message me on WhatsApp</h3>
                            <p className="text-muted-foreground mt-3 text-balance">We'll chat so I can understand your clients, ICPs, and what kind of insights you're looking for.</p>

                            <MeetingIllustration />
                        </Card>

                        <Card
                            className="group overflow-hidden px-6 pt-6" style={{backgroundColor: '#F3F3F3'}}>
                            <Phone className="text-primary size-5" />
                            <h3 className="text-foreground mt-5 text-lg font-semibold">I'll give you a call</h3>
                            <p className="text-muted-foreground mt-3 text-balance">We'll chat so I can understand what you're looking for — and what you know that could help others.</p>

                            <CodeReviewIllustration />
                        </Card>
                        <Card
                            className="group overflow-hidden px-6 pt-6" style={{backgroundColor: '#F3F3F3'}}>
                            <Users className="text-primary size-5" />
                            <h3 className="text-foreground mt-5 text-lg font-semibold">I'll suggest smart introductions</h3>
                            <p className="text-muted-foreground mt-3 text-balance">If someone in the network can help with one of your target accounts — or benefit from your intel — I'll suggest an intro.</p>

                            <div className="mask-b-from-50 -mx-2 -mt-2 px-2 pt-2">
                                <AIAssistantIllustration />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

const MeetingIllustration = () => {
    return (
        <Card
            aria-hidden
            className="mt-9 aspect-video p-0 overflow-hidden transition-transform duration-200 group-hover:scale-105">
            <Image
                src="/images/chat.png"
                alt="Chat illustration"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-xl"
            />
        </Card>
    )
}

const CodeReviewIllustration = () => {
    return (
        <div
            aria-hidden
            className="relative mt-6">
            <Card className="aspect-3/5 absolute -top-4 right-1/4 flex w-1/2 translate-y-4 transition-transform duration-200 ease-in-out group-hover:rotate-3 overflow-hidden p-0">
                <Image
                    src="/images/call.png"
                    alt="Call illustration"
                    width={250}
                    height={400}
                    className="w-full h-full object-cover rounded-xl"
                />
            </Card>
        </div>
    )
}

const AIAssistantIllustration = () => {
    return (
        <Card
            aria-hidden
            className="mt-6 aspect-video translate-y-4 p-0 transition-transform duration-200 group-hover:translate-y-0 overflow-hidden">
            <Image
                src="/images/notify.png"
                alt="Notify illustration"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-xl"
            />
        </Card>
    )
}
