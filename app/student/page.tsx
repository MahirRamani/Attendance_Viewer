import { StudentSearch } from '@/components/student-search'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center !text-black">Student Attendance Portal</CardTitle>
        </CardHeader>
        <CardContent>
          <StudentSearch />
        </CardContent>
      </Card>
    </main>
  )
}

