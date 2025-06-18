import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="[--color-primary:var(--color-indigo-500)]">
                <section className="overflow-hidden">
                    <div className="py-20 md:py-36">
                        <div className="relative z-10 mx-auto max-w-5xl px-6">
                            <div className="relative text-center">
                                <h1 className="mx-auto max-w-2xl text-balance text-4xl font-bold md:text-5xl">Know exactly who to reach — every time.</h1>

                                <p className="text-muted-foreground mx-auto my-6 max-w-2xl text-balance text-xl">I'll connect you to sellers who've already been there. Message me and I'll call you.</p>

                                <div className="flex flex-col items-center justify-center gap-3">
                                    <Button
                                        asChild
                                        size="lg">
                                        <Link href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer">
                                            <MessageCircle className="mr-2 h-5 w-5" />
                                            <span className="text-nowrap">Message me on WhatsApp</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl bg-black/10 md:mt-20">
                                <Image
                                    src="/images/background.png"
                                    alt="Background"
                                    width={2942}
                                    height={1842}
                                    className="absolute inset-0 size-full object-cover"
                                />

                                <div className="bg-background rounded-(--radius) relative m-4 overflow-hidden border border-transparent shadow-xl shadow-black/15 ring-1 ring-black/10 sm:m-8 md:m-12">
                                    <Image
                                        src="/mist/tailark-2.png"
                                        alt="app screen"
                                        width="2880"
                                        height="1842"
                                        className="object-top-left size-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
