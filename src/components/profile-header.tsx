'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'
import React from 'react'
import { UserDropdown } from './user-dropdown'

const tabItems = [
  { name: 'Intros', href: '/intros', active: false },
  { name: 'Chrome extension', href: '/chromeextension', active: false },
  { name: 'Profile', href: '/profile', active: true },
]

export const ProfileHeader = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-background/75 border-b border-black/5 backdrop-blur-lg' 
        : 'bg-transparent border-b border-transparent'
    )}>
      <nav className="w-full px-6">
        <div className="flex items-center h-10">
          {/* Logo - Extrémité gauche */}
          <Link
            href="/"
            aria-label="home"
            className="flex items-center space-x-1">
            <Logo className="w-4 h-4" />
            <span className="text-sm font-bold font-[family-name:var(--font-nunito)]">Waly</span>
          </Link>

          {/* Tab Navigation - Aligné avec le contenu */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                  <div className="flex items-center space-x-6">
                    {tabItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={cn(
                          "text-sm transition-colors",
                          item.active 
                            ? "font-semibold text-gray-900" 
                            : "font-normal text-gray-400 hover:text-gray-600"
                        )}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Avatar - Extrémité droite */}
          <div className="flex items-center">
            <UserDropdown />
          </div>
        </div>
      </nav>
    </header>
  )
} 