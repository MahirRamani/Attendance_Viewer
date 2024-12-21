// // 100% Working
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from '@/components/ui/table'

//   interface StudentDataProps {
//     student: {
//       Roll: string
//       'Full Name': string
//       [period: string]: // Dynamic period keys like "Jul-Aug", "Sep-Oct", etc.
//         | string // For keys like Roll and Full Name
//         | {
//             'M-Present Days': number
//             'E-Present Days': number
//             'Total Present Days': number
//           }
//     }
//   }

//   export function StudentData({ student }: StudentDataProps) {
//     // Filter out non-period keys (e.g., "Roll" and "Full Name")
//     const periods = Object.keys(student).filter(
//       (key) =>
//         key !== 'Roll' && key !== 'Full Name'
//     ) as string[]

//     return (
//       <div className="space-y-4">
//         <h2 className="text-xl font-semibold text-center">{student['Full Name']}</h2>
//         <p className="text-center text-gray-500">Roll No: {student.Roll}</p>

//         <div className="overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Period</TableHead>
//                 <TableHead>M-Present</TableHead>
//                 <TableHead>E-Present</TableHead>
//                 <TableHead>Total</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {periods.map((period) => {
//                 const periodData = student[period] as {
//                   'M-Present Days': number
//                   'E-Present Days': number
//                   'Total Present Days': number
//                 }
//                 return (
//                   // <TableRow key={period}>
//                   //   <TableCell className="font-medium">{period}</TableCell>
//                   //   <TableCell>{periodData['M-Present Days']}</TableCell>
//                   //   <TableCell>{periodData['E-Present Days']}</TableCell>
//                   //   <TableCell>{periodData['Total Present Days']}</TableCell>
//                   // </TableRow>
//                   <TableRow key={period}>
//   <TableCell className="font-medium" dangerouslySetInnerHTML={{ __html: period.replace(/\n/g, '<br />') }} />
//   <TableCell>{periodData['M-Present Days']}</TableCell>
//   <TableCell>{periodData['E-Present Days']}</TableCell>
//   <TableCell>{periodData['Total Present Days']}</TableCell>
// </TableRow>

//                 )
//               })}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     )
//   }





// 'use client';
// import { useState, useEffect } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// interface PeriodData {
//   "M-Present Days": number;
//   "E-Present Days": number;
//   "M-%": number;
//   "E-%": number;
// }

// interface StudentDataProps {
//   student: {
//     Roll: string;
//     "Full Name": string;
//     [period: string]: string | PeriodData; // Dynamic keys for attendance periods
//   };
// }

// export function StudentData({ student }: StudentDataProps) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate data loading
//     const timer = setTimeout(() => {
//       setLoading(false); // Set loading to false once data is "loaded"
//     }, 1000); // Adjust delay as needed

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold text-center">{student["Full Name"]}</h2>
//       <p className="text-center text-gray-500">Roll No: {student.Roll}</p>

//       <div className="overflow-x-auto">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Period</TableHead>
//               <TableHead>M-Present</TableHead>
//               <TableHead>E-Present</TableHead>
//               <TableHead>M-%</TableHead>
//               <TableHead>E-%</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {Object.keys(student)
//               .filter((key) => key !== "Roll" && key !== "Full Name")
//               .map((period) => {
//                 const periodData = student[period] as PeriodData;

//                 return (
//                   <TableRow key={period}>
//                     <TableCell
//                       className="font-medium"
//                       dangerouslySetInnerHTML={{
//                         __html: period.replace(/\n/g, "<br />"),
//                       }}
//                     />
//                     <TableCell>{periodData["M-Present Days"]}</TableCell>
//                     <TableCell>{periodData["E-Present Days"]}</TableCell>
//                     <TableCell>{periodData["M-%"]}</TableCell>
//                     <TableCell>{periodData["E-%"]}</TableCell>
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }





// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table";

//   interface PeriodData {
//     "M-Present Days": number;
//     "E-Present Days": number;
//     "M-%": number;
//     "E-%": number;
//   }

//   interface StudentDataProps {
//     student: {
//       Roll: string;
//       "Full Name": string;
//       [period: string]: string | PeriodData; // Dynamic keys for attendance periods
//     };
//   }

//   export function StudentData({ student }: StudentDataProps) {
//     // Filter out non-period keys (e.g., "Roll" and "Full Name")
//     const periods = Object.keys(student).filter(
//       (key) => key !== "Roll" && key !== "Full Name"
//     ) as string[];

//     return (
//       <div className="space-y-4">
//         <h2 className="text-xl font-semibold text-center">{student["Full Name"]}</h2>
//         <p className="text-center text-gray-500">Roll No: {student.Roll}</p>

//         <div className="overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Period</TableHead>
//                 <TableHead>M-Present (M-%)</TableHead>
//                 <TableHead>E-Present (E-%)</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {periods.map((period) => {
//                 const periodData = student[period] as PeriodData;

//                 return (
//                   <TableRow key={period}>
//                     {/* Render period name dynamically */}
//                     <TableCell
//                       className="font-medium"
//                       dangerouslySetInnerHTML={{
//                         __html: period.replace(/\n/g, "<br />"),
//                       }}
//                     />
//                     {/* Render M-Present and M-% together */}
//                     <TableCell>{`${periodData["M-Present Days"]} (${periodData["M-%"]}%)`}</TableCell>
//                     {/* Render E-Present and E-% together */}
//                     <TableCell>{`${periodData["E-Present Days"]} (${periodData["E-%"]}%)`}</TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     );
//   }






import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface PeriodData {
    "M-Present Days": number;
    "E-Present Days": number;
    "M-%": number;
    "E-%": number;
}

interface StudentDataProps {
    student: {
        Roll: string;
        "Full Name": string;
        [period: string]: string | PeriodData; // Dynamic keys for attendance periods
    };
}

export function StudentData({ student }: StudentDataProps) {
    // Filter out non-period keys (e.g., "Roll" and "Full Name")
    const periods = Object.keys(student).filter(
        (key) => key !== "Roll" && key !== "Full Name"
    ) as string[];

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-center">{student["Full Name"]}</h2>
            <p className="text-center text-gray-500">Roll No: {student.Roll}</p>

            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="bg-yellow-300 text-black font-bold">Period</TableHead>
                            <TableHead className="bg-yellow-300 text-black font-bold">Morning-Present (M-%)</TableHead>
                            <TableHead className="bg-yellow-300 text-black font-bold">Evening-Present (E-%)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {periods.map((period) => {
                            const periodData = student[period] as PeriodData;

                            return (
                                <TableRow key={period}>
                                    {/* Render period name dynamically */}
                                    <TableCell
                                        className=" font-semibold bg-blue-400"
                                        dangerouslySetInnerHTML={{
                                            __html: period.replace(/\n/g, "<br />"),
                                        }}
                                    />
                                    {/* Render M-Present and M-% together */}
                                    <TableCell className={periodData["M-%"] <= 60 ? "bg-red-400" : "bg-green-300"}>
                                        <span>{periodData["M-Present Days"]}</span>
                                        <span> </span>
                                        <span >
                                            ({periodData["M-%"]}%)
                                        </span>
                                    </TableCell>
                                    {/* Render E-Present and E-% together */}
                                    <TableCell className={periodData["E-%"] <= 60 ? "bg-red-400" : "bg-green-300"}>
                                        <span>{periodData["E-Present Days"]}</span>
                                        <span> </span>
                                        <span>
                                            ({periodData["E-%"]}%)
                                        </span>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

