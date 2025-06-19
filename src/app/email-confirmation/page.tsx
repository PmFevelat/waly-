'use client'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function EmailConfirmationPage() {
    const [email, setEmail] = useState('')
    const [resending, setResending] = useState(false)
    const [resent, setResent] = useState(false)

    useEffect(() => {
        // Récupérer l'email depuis localStorage
        const pendingEmail = localStorage.getItem('pendingVerificationEmail')
        if (pendingEmail) {
            setEmail(pendingEmail)
        }
    }, [])

    const handleResendEmail = async () => {
        if (!email || !supabase) return
        
        setResending(true)
        setResent(false)
        
        try {
            const { error } = await supabase.auth.resend({
                type: 'signup',
                email: email
            })
            
            if (!error) {
                setResent(true)
            }
        } catch (err) {
            console.error('Error resending email:', err)
        } finally {
            setResending(false)
        }
    }

    return (
        <section className="bg-linear-to-b from-muted to-background flex min-h-screen px-4 py-16 md:py-32">
            <div className="max-w-92 m-auto h-fit w-full">
                <div className="p-6">
                    <div>
                        {/* Back button */}
                        <div className="mb-4">
                            <Button
                                asChild
                                variant="ghost"
                                size="icon"
                                className="text-muted-foreground hover:text-foreground -ml-3">
                                <Link href="/signup" aria-label="Back to signup">
                                    <ArrowLeft className="size-5" />
                                </Link>
                            </Button>
                        </div>
                        <Link
                            href="/"
                            aria-label="go home">
                            <Logo />
                        </Link>
                        
                        {/* Email icon */}
                        <div className="mt-8 mb-6 flex justify-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                                <Mail className="w-8 h-8 text-gray-600" />
                            </div>
                        </div>
                        
                        <h1 className="text-balance text-xl font-semibold text-center">
                            Check your email
                        </h1>
                        <p className="mt-3 text-sm text-muted-foreground text-center">
                            We&apos;ve sent a verification link to<br />
                            <span className="font-medium text-gray-900">{email}</span>
                        </p>
                    </div>

                    <div className="mt-8 space-y-4">
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground">
                                Didn&apos;t receive the email?{' '}
                                <Button
                                    variant="link"
                                    className="px-0 text-sm"
                                    onClick={handleResendEmail}
                                    disabled={resending}>
                                    {resending ? 'Sending...' : 'Click here to resend'}
                                </Button>
                            </p>
                            {resent && (
                                <p className="mt-2 text-sm text-green-600">
                                    Email sent successfully!
                                </p>
                            )}
                        </div>

                        <div className="text-center pt-4">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="/login">Back to login</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 