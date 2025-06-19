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
                <section className="overflow-hidden relative">
                    {/* Image man collée à gauche - taille réduite */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0">
                        <Image
                            src="/images/man.png"
                            alt="Man illustration"
                            width={200}
                            height={280}
                            className="object-contain"
                        />
                    </div>

                    {/* Image woman collée contre la bordure droite - décalée vers le bas */}
                    <div className="absolute right-0 top-32 z-0">
                        <Image
                            src="/images/woman.png"
                            alt="Woman illustration"
                            width={180}
                            height={220}
                            className="object-contain"
                        />
                    </div>

                    {/* Image charli collée contre la bordure droite - taille encore plus réduite */}
                    <div className="absolute right-0 bottom-4 z-0">
                        <Image
                            src="/images/charli.png"
                            alt="Charli illustration"
                            width={90}
                            height={110}
                            className="object-contain"
                        />
                    </div>

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


                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
