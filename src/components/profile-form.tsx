'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

interface Profile {
  full_name: string
  email: string
  company: string
  job_title: string
  industry: string
  competitors: string[]
}

export const ProfileForm = () => {
  const { user } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [profile, setProfile] = useState<Profile>({
    full_name: '',
    email: '',
    company: '',
    job_title: '',
    industry: '',
    competitors: []
  })

  // Pour l'instant, données statiques
  const knownAccounts = ['Qonto', 'Doctolib', 'Revolut', 'N26']
  const wantToLearnAccounts = ['Swile', 'Spendesk', 'Klarna', 'Wise']

  useEffect(() => {
    if (!user) {
      router.push('/login')
      return
    }
    loadProfile()
  }, [user, router])

  const loadProfile = async () => {
    if (!supabase || !user) return

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (error) throw error

      if (data) {
        setProfile({
          full_name: data.full_name || '',
          email: data.email || user.email || '',
          company: data.company || '',
          job_title: data.job_title || '',
          industry: data.industry || '',
          competitors: data.competitors || []
        })
      }
    } catch (error) {
      console.error('Error loading profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const saveField = async (field: keyof Profile, value: any) => {
    if (!supabase || !user) return

    setSaving(true)
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ [field]: value })
        .eq('id', user.id)

      if (error) throw error
    } catch (error) {
      console.error('Error saving profile:', error)
    } finally {
      setSaving(false)
    }
  }

  const handleFieldChange = (field: keyof Profile, value: any) => {
    setProfile(prev => ({ ...prev, [field]: value }))
    // Sauvegarder automatiquement après un délai
    const timeoutId = setTimeout(() => {
      saveField(field, value)
    }, 500)
    return () => clearTimeout(timeoutId)
  }

  const addCompetitor = (competitor: string) => {
    const newCompetitors = [...profile.competitors, competitor]
    handleFieldChange('competitors', newCompetitors)
  }

  const removeCompetitor = (competitor: string) => {
    const newCompetitors = profile.competitors.filter(c => c !== competitor)
    handleFieldChange('competitors', newCompetitors)
  }

  if (loading) {
    return <div className="text-center py-8">Loading profile...</div>
  }
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
                value={profile.full_name}
                onChange={(e) => handleFieldChange('full_name', e.target.value)}
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
                  value={profile.email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  className="h-8 text-sm pr-16"
                  style={{ border: '1px solid #E6E6E6' }}
                  disabled
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
                value={profile.company}
                onChange={(e) => handleFieldChange('company', e.target.value)}
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
                value={profile.job_title}
                onChange={(e) => handleFieldChange('job_title', e.target.value)}
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
              value={profile.industry}
              onChange={(e) => handleFieldChange('industry', e.target.value)}
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
            {profile.competitors.map((competitor, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">
                {competitor}
                <X 
                  className="w-3 h-3 cursor-pointer hover:text-gray-900" 
                  onClick={() => removeCompetitor(competitor)}
                />
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