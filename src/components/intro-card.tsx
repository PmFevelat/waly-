import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { User } from 'lucide-react'
import Image from 'next/image'

interface Intro {
  id: number
  title: string
  company: string
  description: string
  avatar?: string
}

interface IntroCardProps {
  intro: Intro
}

export const IntroCard = ({ intro }: IntroCardProps) => {
  return (
    <Card className="bg-white hover:shadow-md transition-shadow duration-200 py-2" style={{ border: '1px solid #E6E6E6' }}>
      <CardContent className="p-3">
        <div className="flex flex-col space-y-2">
          {/* Header content */}
          <div className="flex items-start space-x-2">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {intro.avatar ? (
                <Image
                  src={intro.avatar}
                  alt={`${intro.company} avatar`}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-contain bg-gray-100"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {intro.title}
              </h3>
              <div className="mb-1">
                <span className="text-xs text-gray-600">Matched on: </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {intro.company}
                </span>
              </div>
              <p className="text-gray-700 text-xs leading-relaxed">
                {intro.description}
              </p>
            </div>
          </div>

          {/* Action buttons - déplacés en bas */}
          <div className="flex items-center justify-end space-x-2 pt-1">
            <Button
              variant="outline"
              size="sm"
              className="px-2 py-1 text-xs text-gray-600 border-gray-300 hover:bg-gray-50 h-6">
              Not now
            </Button>
            <Button
              size="sm"
              className="px-3 py-1 text-xs bg-black text-white hover:bg-gray-800 h-6">
              Accept
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 