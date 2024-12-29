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
                                    <TableCell className={periodData["E-%"] <= 80 ? "bg-red-400" : "bg-green-300"}>
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

