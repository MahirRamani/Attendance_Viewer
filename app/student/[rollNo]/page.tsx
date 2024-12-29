import { StudentData } from '@/components/student-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
require("dotenv").config();

// Replace this URL with your Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL as string;

console.log("GOOGLE_SCRIPT_URL", GOOGLE_SCRIPT_URL);

async function getStudentData(rollNo: string) {
  console.log(`${GOOGLE_SCRIPT_URL}?rollNo=${rollNo}`);
  const res = await fetch(`${GOOGLE_SCRIPT_URL}?rollNo=${rollNo}`, {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function StudentPage({ params }: { params: Promise<{ rollNo: string }> }) {
  const { rollNo } = await params
  const studentData = await getStudentData(rollNo)

  return (
    <main className="min-h-screen p-4 bg-gray-50 flex items-center justify-center relative">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <Button asChild variant="outline" className="bg-purple-500 text-white hover:bg-purple-600">
          <Link href="/student">Back</Link>
        </Button>
      </div>

      {/* Card Section */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center !text-black">Student Attendance Data</CardTitle>
        </CardHeader>
        <CardContent>
          {studentData.error ? (
            <div className="text-center">
              <p className="text-red-500 mb-4">{studentData.error}</p>
              <Button asChild className="bg-purple-500 text-white hover:bg-purple-600">
                <Link href="/student">Go Back</Link>
              </Button>
            </div>
          ) : (
            <>
              <StudentData student={studentData} />
              <div className="mt-4 text-center">
                <Button asChild className="bg-purple-500 text-white hover:bg-purple-600">
                  <Link className="text-black" href="/student">Search Another</Link>
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </main>
  )
}