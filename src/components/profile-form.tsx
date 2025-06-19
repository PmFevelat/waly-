import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { X } from 'lucide-react'

const competitorTags = ['Stripe', 'Square', 'PayPal']
const knownAccounts = ['Qonto', 'Doctolib', 'Revolut', 'N26']
const wantToLearnAccounts = ['Swile', 'Spendesk', 'Klarna', 'Wise']

export const ProfileForm = () => {
  return (
    <div className="space-y-4">
      {/* Personal Information */}
      <Card className="bg-white hover:shadow-md transition-shadow duration-200 py-2" style={{ border: '1px solid #E6E6E6' }}>
        <CardContent className="p-3">
          <h2 className="text-base font-semibold text-gray-900 mb-3">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="fullName" className="text-xs font-medium text-gray-700">
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                defaultValue="Alex Johnson"
                className="h-8 text-sm"
                style={{ border: '1px solid #E6E6E6' }}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" className="text-xs font-medium text-gray-700">
                Email
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  defaultValue="alex@startup.com"
                  className="h-8 text-sm pr-16"
                  style={{ border: '1px solid #E6E6E6' }}
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Company Information */}
      <Card className="bg-white hover:shadow-md transition-shadow duration-200 py-2" style={{ border: '1px solid #E6E6E6' }}>
        <CardContent className="p-3">
          <h2 className="text-base font-semibold text-gray-900 mb-3">Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div className="space-y-1">
              <Label htmlFor="company" className="text-xs font-medium text-gray-700">
                Company
              </Label>
              <Input
                id="company"
                type="text"
                defaultValue="TechCorp Inc."
                className="h-8 text-sm"
                style={{ border: '1px solid #E6E6E6' }}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="jobTitle" className="text-xs font-medium text-gray-700">
                Job Title
              </Label>
              <Input
                id="jobTitle"
                type="text"
                defaultValue="Account Executive"
                className="h-8 text-sm"
                style={{ border: '1px solid #E6E6E6' }}
              />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="industry" className="text-xs font-medium text-gray-700">
              Industry
            </Label>
            <Input
              id="industry"
              type="text"
              defaultValue="FinTech"
              className="h-8 text-sm"
              style={{ border: '1px solid #E6E6E6' }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Competitors to Exclude */}
      <Card className="bg-white hover:shadow-md transition-shadow duration-200 py-2" style={{ border: '1px solid #E6E6E6' }}>
        <CardContent className="p-3">
          <h2 className="text-base font-semibold text-gray-900 mb-1">Competitors to Exclude</h2>
          <p className="text-xs text-gray-600 mb-3">Select companies you compete with to avoid introductions</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {competitorTags.map((competitor, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">
                {competitor}
                <X className="w-3 h-3 cursor-pointer hover:text-gray-900" />
              </span>
            ))}
          </div>
          <Button variant="outline" size="sm" className="text-xs h-6">
            + Add competitor
          </Button>
        </CardContent>
      </Card>

      {/* Interview Recap */}
      <Card className="bg-white hover:shadow-md transition-shadow duration-200 py-2" style={{ border: '1px solid #E6E6E6' }}>
        <CardContent className="p-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-gray-900">Interview Recap</h2>
            <Button size="sm" className="bg-black text-white hover:bg-gray-800 text-xs h-6">
              Redo Interview
            </Button>
          </div>
          <p className="text-xs text-gray-600 mb-4">Voice interview completed on March 15, 2024</p>
          
          <div className="space-y-3">
            <div>
              <h3 className="text-xs font-medium text-gray-900 mb-1">Accounts you know</h3>
              <div className="flex flex-wrap gap-1.5">
                {knownAccounts.map((account, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {account}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xs font-medium text-gray-900 mb-1">Accounts you want to learn about</h3>
              <div className="flex flex-wrap gap-1.5">
                {wantToLearnAccounts.map((account, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {account}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 