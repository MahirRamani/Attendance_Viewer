'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

export function StudentSearch() {
  const [rollNo, setRollNo] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!rollNo.trim()) {
      setError('Roll number is required')
      return
    }

    setError('') // Clear any previous error
    setLoading(true) // Show loader immediately

    // Navigate and reset loading after navigation
    router.push(`/student/${rollNo}`)
  }

  return (
    <div className="relative">
      {/* Full-Screen Loader */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
          <div className="loader w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Input
            type="text"
            placeholder="Enter Roll Number"
            value={rollNo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRollNo(e.target.value)}
            className={`flex-1 ${error ? 'border-red-500' : ''}`} // Add red border if error
          />
          <Button type="submit" disabled={loading} className="relative flex items-center justify-center">
            <Search className="h-8 w-8 bg-purple-500 text-white rounded-md p-1" />
          </Button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  )
}
