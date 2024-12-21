// 'use client'
import { StudentData } from '@/components/student-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'

// Replace this URL with your Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || ''


async function getStudentData(rollNo: string) {
  const res = await fetch(`${GOOGLE_SCRIPT_URL}?rollNo=${rollNo}`, { cache: 'no-store' })
  // const data = res.json()
  console.log(res)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function StudentPage({ params }: { params: { rollNo: string } }) {
  // const router = useRouter();
  const studentData = await getStudentData(params.rollNo)
  console.log(studentData)

  return (
    <main className="min-h-screen p-4 bg-gray-50 flex items-center justify-center relative">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-md shadow hover:bg-purple-600 "
        >
          <Link href="/student">Back</Link>
        </button>
      </div>

      {/* Card Section */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Student Attendance Data</CardTitle>
        </CardHeader>
        <CardContent>
          {studentData.error ? (
            <div className="text-center">
              <p className="text-red-500 mb-4">{studentData.error}</p>
              <Button>
                <Link href="/student">Go Back</Link>
              </Button>
            </div>
          ) : (
            <>
              <StudentData student={studentData} />
              <div className="mt-4 text-center">
                <Button asChild className="text-white bg-purple-500">
                  <Link href="/student">Search Another</Link>
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </main>

  )
}





// import { Suspense } from 'react'
// import { StudentData } from '@/components/student-data'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'

// const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || ''

// async function getStudentData(rollNo: string) {
//   const res = await fetch(`${GOOGLE_SCRIPT_URL}?rollNo=${rollNo}`, {
//     cache: 'no-store',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
  
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
  
//   return res.json()
// }

// async function StudentPageContent({ rollNo }: { rollNo: string }) {
//   let studentData
//   let error

//   try {
//     studentData = await getStudentData(rollNo)
//   } catch (e) {
//     error = e instanceof Error ? e.message : 'An error occurred while fetching data'
//   }

//   if (error) {
//     return (
//       <div className="text-center">
//         <p className="text-red-500 mb-4">{error}</p>
//         <Button asChild>
//           <Link href="/">Go Back</Link>
//         </Button>
//       </div>
//     )
//   }

//   if (!studentData) {
//     return <div className="text-center">No data found for this student.</div>
//   }

//   return (
//     <>
//       <StudentData student={studentData} />
//       <div className="mt-4 text-center">
//         <Button asChild>
//           <Link href="/">Search Another</Link>
//         </Button>
//       </div>
//     </>
//   )
// }

// export default function StudentPage({ params }: { params: { rollNo: string } }) {
//   return (
//     <main className="min-h-screen p-4 bg-gray-50 flex items-center justify-center relative">
//       <div className="absolute top-4 left-4">
//         <Button asChild variant="outline">
//           <Link href="/">Back</Link>
//         </Button>
//       </div>

//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle className="text-center">Student Attendance Data</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Suspense fallback={<div className="text-center">Loading...</div>}>
//             <StudentPageContent rollNo={params.rollNo} />
//           </Suspense>
//         </CardContent>
//       </Card>
//     </main>
//   )
// }








// import { Suspense } from 'react'
// import { StudentData } from '@/components/student-data'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'

// const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || ''

// async function getStudentData(rollNo: string) {
//   const res = await fetch(`${GOOGLE_SCRIPT_URL}?rollNo=${rollNo}`, { 
//     cache: 'no-store',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
  
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
  
//   return res.json()
// }

// async function StudentPageContent({ rollNo }: { rollNo: string }) {
//   let studentData
//   let error

//   try {
//     studentData = await getStudentData(rollNo)
//   } catch (e) {
//     error = e instanceof Error ? e.message : 'An error occurred while fetching data'
//   }

//   if (error) {
//     return (
//       <div className="text-center">
//         <p className="text-red-500 mb-4">{error}</p>
//         <Button asChild>
//           <Link href="/">Go Back</Link>
//         </Button>
//       </div>
//     )
//   }

//   if (!studentData) {
//     return <div className="text-center">No data found for this student.</div>
//   }

//   return (
//     <>
//       <StudentData student={studentData} />
//       <div className="mt-4 text-center">
//         <Button asChild>
//           <Link href="/">Search Another</Link>
//         </Button>
//       </div>
//     </>
//   )
// }

// export default async function StudentPage({ params }: { params: { rollNo: string } }) {
//   const { rollNo } = params // No need for `await` because params are accessible directly here.

//   return (
//     <main className="min-h-screen p-4 bg-gray-50 flex items-center justify-center relative">
//       <div className="absolute top-4 left-4">
//         <Button asChild variant="outline">
//           <Link href="/">Back</Link>
//         </Button>
//       </div>

//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle className="text-center">Student Attendance Data</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Suspense fallback={<div className="text-center">Loading...</div>}>
//             {/* Pass rollNo directly */}
//             <StudentPageContent rollNo={rollNo} />
//           </Suspense>
//         </CardContent>
//       </Card>
//     </main>
//   )
// }

