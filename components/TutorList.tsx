/* Import section */
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn, getSubjectColor } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
/* Interface of he tutorlist props */
interface TutorListProps {
    title: string,
    tutors?: Tutor[],
    classNames?: string,
}
/* Tutor lists */
const TutorList = ({ title, tutors, classNames }: TutorListProps) => {
    return (
        <article className={cn('tutor-list', classNames)}>

            <h2 className="font-bold text-3xl">Latest Lessons</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-lg w-2/3">Lessons</TableHead>
                        <TableHead className="text-lg">Subject</TableHead>
                        <TableHead className="text-lg text-right">Duration</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tutors?.map(({ id, subject, name, topic, duration }) => (
                        <TableRow key={id}>
                            <TableCell>
                                <Link href={`/tutors/${id}`}>
                                    <div className="flex items-center gap-8">
                                        <div className="size-[72px] flex items-center 
                                            justify-center rounded-lg max-md:hidden"
                                            style={{ backgroundColor: getSubjectColor(subject) }}
                                        >
                                            <Image
                                                src={`/icons/${subject}.svg`}
                                                alt={subject}
                                                width={25}
                                                height={25}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 ">
                                            <p className="font-semibold text-xl">
                                                {name}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </article>
    )
}
/* Export section */
export default TutorList
