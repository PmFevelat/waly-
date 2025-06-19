import Image from 'next/image'

export const ChromeExtensionEmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      {/* Empty state image */}
      <div className="mb-6">
        <Image
          src="/images/emptystate.png"
          alt="Chrome Extension coming soon"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Text content */}
      <div className="max-w-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Chrome Extension Coming Soon
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          We&apos;re working hard to bring you the best Chrome extension experience. 
          Our extension is currently in development and will be available soon.
        </p>
        <p className="text-xs text-gray-500">
          Stay tuned for updates and be the first to know when it&apos;s ready!
        </p>
      </div>
    </div>
  )
} 