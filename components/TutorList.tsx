/* Import section */
import {
    Table,
    TableBody,
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

            <h2 className="font-bold text-3xl">{title}</h2>
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

                            {/* Lessons */}
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
                                            <p className="text-lg ">{topic}</p>
                                        </div>
                                    </div>
                                </Link>
                            </TableCell>

                            {/* Subject */}
                            <TableCell>
                                {/* For desktop version */}
                                <div className="subject-badge text-center max-md:hidden">
                                    {subject}
                                </div>
                                {/* For mobile version */}
                                <div
                                    className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                                    style={{ backgroundColor: getSubjectColor(subject) }}
                                >
                                    <Image
                                        src={`/icons/${subject}.svg`}
                                        alt={subject}
                                        width={18}
                                        height={18}
                                    />
                                </div>
                            </TableCell>

                            {/* Duration */}
                            <TableCell>
                                <div className="flex items-center gap-2 w-full justify-end">
                                    <p className="text-lg">
                                        {duration} {' '}
                                        <span className="max-md:hidden">minutes</span>
                                    </p>
                                    <Image
                                        src="/icons/clock.svg"
                                        alt="duration"
                                        width={14}
                                        height={14}
                                        className="md:hidden"
                                    />
                                </div>
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
