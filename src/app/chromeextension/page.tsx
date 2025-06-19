import { ChromeExtensionHeader } from '@/components/chromeextension-header'
import { ChromeExtensionEmptyState } from '@/components/chromeextension-emptystate'
import { IntrosFooter } from '@/components/intros-footer'

export default function ChromeExtensionPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-muted to-background flex flex-col">
      <ChromeExtensionHeader />
      
      <main className="flex-1 pt-12">
        <div className="mx-auto max-w-6xl px-6 py-8 min-h-full">
          {/* Grid container with 12 columns */}
          <div className="grid grid-cols-12 gap-6">
            {/* Content area - 8 columns on desktop, full width on mobile */}
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              {/* Header section */}
              <div className="mb-6">
                <h1 className="text-xl font-semibold text-gray-900">Chrome Extension</h1>
              </div>

              {/* Empty state */}
              <div className="pb-16">
                <ChromeExtensionEmptyState />
              </div>
            </div>
          </div>
        </div>
      </main>

      <IntrosFooter />
    </div>
  )
} 