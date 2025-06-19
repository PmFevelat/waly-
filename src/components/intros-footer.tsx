import { Logo } from '@/components/logo'
import Link from 'next/link'

const links = [
    {
        title: 'Features',
        href: '#features',
    },
    {
        title: 'Pricing',
        href: '#',
    },
]

export const IntrosFooter = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-6 mt-8">
            <div className="mx-auto max-w-6xl px-6">
                {/* Grid container matching the content width */}
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                        <div className="flex flex-wrap justify-between items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/"
                                    aria-label="go home"
                                    className="flex items-center gap-1">
                                    <Logo className="h-4 w-auto" />
                                    <span className="text-sm font-bold font-[family-name:var(--font-nunito)]">Waly</span>
                                </Link>
                                <span className="text-gray-500 text-xs">
                                    © {new Date().getFullYear()} Waly, All rights reserved
                                </span>
                            </div>

                            <div className="flex gap-4">
                                {links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className="text-gray-600 hover:text-gray-900 text-xs transition-colors">
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 