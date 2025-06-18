import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function CtaSection() {
    return (
        <section>
            <div className="py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="space-y-6 text-center">
                        <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">Got a target account in mind?</h2>
                        <div className="flex justify-center">
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
    )
}
