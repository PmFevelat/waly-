'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth-context'

interface UserDropdownProps {
  className?: string
}

export const UserDropdown = ({ className }: UserDropdownProps) => {
  const { user, signOut } = useAuth()
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      {/* Avatar button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center focus:outline-none">
        <Image
          src="/images/avatar2.png"
          alt="Profile avatar"
          width={24}
          height={24}
          className="w-6 h-6 rounded-full object-contain bg-gray-100 hover:ring-2 hover:ring-gray-200 transition-all"
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 top-8 w-60 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {/* User info section */}
          <div className="px-4 py-2 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/avatar2.png"
                alt="Profile avatar"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-contain bg-gray-100"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {user?.user_metadata?.full_name || 'User'}
                </p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Menu items */}
          <div className="py-0.5">
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}>
              View profile
            </Link>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}>
              Configuration
            </button>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-100"></div>

          {/* Logout */}
          <div className="py-0.5">
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={async () => {
                setIsOpen(false)
                await signOut()
              }}>
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 