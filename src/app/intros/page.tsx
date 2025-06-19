import { IntrosHeader } from '@/components/intros-header'
import { IntroCard } from '@/components/intro-card'
import { IntrosFooter } from '@/components/intros-footer'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const mockIntros = [
  {
    id: 1,
    title: 'Sales Lead – FinTech – 200-500 emp.',
    company: 'Qonto',
    description: 'Has strong relationship with the Head of Sales at ACME.',
    avatar: '/images/avatar1.png'
  },
  {
    id: 2,
    title: 'Account Executive – SaaS – 50-200 emp',
    company: 'Swile',
    description: 'Know the decision makers in the Product team at Swile.',
    avatar: '/images/avatar2.png'
  }
]

export default function IntrosPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-muted to-background flex flex-col">
      <IntrosHeader />
      
      <main className="flex-1 pt-12">
        <div className="mx-auto max-w-6xl px-6 py-8 min-h-full">
          {/* Grid container with 12 columns */}
          <div className="grid grid-cols-12 gap-6">
            {/* Content area - 8 columns on desktop, full width on mobile */}
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              {/* Header section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-xl font-semibold text-gray-900">Suggested Intros</h1>
                  <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    2 new matches
                  </span>
                </div>
                
                {/* Search bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search intros"
                    className="pl-9 h-9 text-sm bg-white focus:border-blue-500 focus:ring-blue-500"
                    style={{ border: '1px solid #E6E6E6' }}
                  />
                </div>
              </div>

              {/* Intro cards */}
              <div className="space-y-4 pb-16">
                {mockIntros.map((intro) => (
                  <IntroCard key={intro.id} intro={intro} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <IntrosFooter />
    </div>
  )
} 