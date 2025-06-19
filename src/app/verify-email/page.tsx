'use client'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function VerifyEmailPage() {
    const [verificationCode, setVerificationCode] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        // Si l'utilisateur n'est pas connecté, rediriger vers signup
        if (!user) {
            router.push('/signup')
        }
    }, [user, router])

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            if (!user?.email) {
                throw new Error('User email not found')
            }
            
            const { error } = await supabase.auth.verifyOtp({
                email: user.email,
                token: verificationCode,
                type: 'signup'
            })

            if (error) throw error

            setSuccess(true)
            // Rediriger vers intros après vérification réussie
            setTimeout(() => {
                router.push('/intros')
            }, 2000)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred')
        } finally {
            setLoading(false)
        }
    }

    const resendEmail = async () => {
        try {
            if (!user?.email) {
                throw new Error('User email not found')
            }
            
            const { error } = await supabase.auth.resend({
                type: 'signup',
                email: user.email
            })
            if (error) throw error
            setError('')
            alert('Verification email resent!')
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred')
        }
    }

    return (
        <section className="bg-linear-to-b from-muted to-background flex min-h-screen px-4 py-16 md:py-32">
            <form
                onSubmit={handleVerify}
                className="max-w-92 m-auto h-fit w-full">
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
                        <h1 className="mt-6 text-balance text-xl font-semibold">
                            <span className="text-muted-foreground">Verify your email</span>
                        </h1>
                        <p className="mt-2 text-sm text-muted-foreground">
                            We&apos;ve sent a verification code to {user?.email}
                        </p>
                    </div>

                    <div className="mt-6 space-y-6">
                        {error && (
                            <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">
                                {error}
                            </div>
                        )}
                        
                        {success && (
                            <div className="p-3 text-sm text-green-600 bg-green-50 rounded-md">
                                Email verified successfully! Redirecting...
                            </div>
                        )}
                        
                        <div className="space-y-2">
                            <Label
                                htmlFor="code"
                                className="block text-sm">
                                Verification Code
                            </Label>
                            <Input
                                type="text"
                                required
                                name="code"
                                id="code"
                                placeholder="Enter 6-digit code"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}
                                className="ring-foreground/15 border-transparent ring-1"
                                maxLength={6}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            size="default"
                            disabled={loading || success}>
                            {loading ? 'Verifying...' : 'Verify Email'}
                        </Button>

                        <div className="text-center">
                            <p className="text-sm text-muted-foreground">
                                Didn&apos;t receive the email?
                                <Button
                                    type="button"
                                    variant="link"
                                    className="px-2"
                                    onClick={resendEmail}>
                                    Resend code
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
} 