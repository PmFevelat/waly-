'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestSupabasePage() {
  const [status, setStatus] = useState('🔄 Test en cours...')
  const [dbVersion, setDbVersion] = useState('')

  useEffect(() => {
    testConnection()
  }, [])

  const testConnection = async () => {
    try {
      // Test simple de connexion
      const { error } = await supabase
        .from('_test')
        .select('*')
        .limit(1)

      if (error && (error.code === 'PGRST116' || error.message.includes('does not exist'))) {
        // Table doesn't exist - c'est normal, cela confirme que la connexion fonctionne !
        setStatus('✅ Connexion Supabase réussie !')
        setDbVersion('PostgreSQL via Supabase - Connexion confirmée')
      } else if (error) {
        setStatus(`❌ Erreur: ${error.message}`)
      } else {
        setStatus('✅ Connexion Supabase réussie !')
      }

    } catch (err) {
      setStatus(`❌ Erreur de connexion: ${err}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Test Connexion Supabase</h1>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded">
            <p className="text-sm font-medium text-gray-600">Status:</p>
            <p className="text-lg">{status}</p>
          </div>

          <div className="p-4 bg-blue-50 rounded">
            <p className="text-sm font-medium text-blue-600">Configuration:</p>
            <p className="text-xs text-gray-600 break-all">
              URL: {process.env.NEXT_PUBLIC_SUPABASE_URL || 'Non configuré'}
            </p>
            <p className="text-xs text-gray-600">
              API Key: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Configuré' : '❌ Manquant'}
            </p>
          </div>

          {dbVersion && (
            <div className="p-4 bg-green-50 rounded">
              <p className="text-sm font-medium text-green-600">Base de données:</p>
              <p className="text-xs text-gray-600">{dbVersion}</p>
            </div>
          )}

          <button 
            onClick={testConnection}
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
            Retester la connexion
          </button>
        </div>
      </div>
    </div>
  )
} 