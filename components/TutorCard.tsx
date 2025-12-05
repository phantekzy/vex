import Image from "next/image"
import Link from "next/link"

/* TutorCard interface */
interface TutorCardProps {
    id: string,
    name: string,
    topic: string,
    subject: string,
    duration: number,
    color: string,
}
/* Sensei card section */
const TutorCard = ({ id, name, topic, subject, duration, color }: TutorCardProps) => {
    return (
        <article
            className="tutor-card"
            style={{ backgroundColor: color }}
        >
            <div className="flex justify-between items-center">
                <div className="subject-badge">{subject}</div>
                <button className="tutor-bookmark">
                    <Image
                        src="/icons/bookmark.svg"
                        alt="bookmark"
                        width={12.5}
                        height={15}
                    />
                </button>
            </div>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="text-sm">{topic}</p>
            <div className="flex items-center gap-2">
                <Image
                    src="/icons/clock.svg"
                    alt="duration"
                    width={13.5}
                    height={13.5}
                />
                <p className="text-sm"> {duration} minutes </p>
            </div>
            <Link
                href={`/tutors/${id}`}
                className="w-full"
            >
                <button
                    className="btn-primary w-full justify-center"
                >
                    Start learning
                </button>
            </Link>
        </article>
    )
}
/* Export section */
export default TutorCard
